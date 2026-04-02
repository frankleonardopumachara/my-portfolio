import { useEffect, useRef } from "react";

const GLYPHS = [".", ".", ":", ":", "+", "+", ">", ">", "0", "1", "_", "/"];
const TRAIL_LIFETIME_MS = 1100;
const INFLUENCE_RADIUS = 170;
const FOOTPRINT_RADIUS = 138;
const FOOTPRINT_FADE_MS = 4200;
const FOOTPRINT_STAMP_INTERVAL_MS = 32;

const createGlyphCells = (width, height) => {
    const stepX = 28;
    const stepY = 24;
    const columns = Math.ceil(width / stepX) + 2;
    const rows = Math.ceil(height / stepY) + 2;
    const cells = [];

    for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
            const index = row * columns + column;
            const glyph = GLYPHS[(row * 5 + column * 7 + index) % GLYPHS.length];
            const offsetX = ((index * 17) % 10) - 5;
            const offsetY = ((index * 13) % 8) - 4;

            cells.push({
                glyph,
                x: column * stepX + offsetX,
                y: row * stepY + offsetY,
                size: 10 + ((index * 11) % 3),
                baseAlpha: 0.012 + (((index * 23) % 8) / 220),
                fadeMs: FOOTPRINT_FADE_MS + ((index * 29) % 900),
                imprint: 0,
                weight: index % 5 === 0 ? 700 : 500,
            });
        }
    }

    return cells;
};

const mixChannel = (fromValue, toValue, ratio) => {
    return Math.round(fromValue + (toValue - fromValue) * ratio);
};

export const AmbientGlyphField = ({ theme = "dark" }) => {
    const canvasRef = useRef(null);
    const animationFrameRef = useRef(0);
    const trailRef = useRef([]);
    const cellsRef = useRef([]);
    const lastFrameTimeRef = useRef(0);
    const lastFootprintStampRef = useRef(0);
    const viewportRef = useRef({ width: 0, height: 0, dpr: 1 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return undefined;
        }

        const context = canvas.getContext("2d");
        if (!context) {
            return undefined;
        }

        const syncCanvasSize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            viewportRef.current = { width, height, dpr };
            cellsRef.current = createGlyphCells(width, height);
        };

        const registerTrailPoint = (clientX, clientY) => {
            const now = performance.now();
            const nextTrail = trailRef.current
                .filter((point) => now - point.time < TRAIL_LIFETIME_MS)
                .slice(0, 14);

            nextTrail.unshift({ x: clientX, y: clientY, time: now });
            trailRef.current = nextTrail;

            if (now - lastFootprintStampRef.current < FOOTPRINT_STAMP_INTERVAL_MS) {
                return;
            }

            lastFootprintStampRef.current = now;

            for (const cell of cellsRef.current) {
                const dx = clientX - cell.x;
                const dy = clientY - cell.y;
                const distance = Math.hypot(dx, dy);
                const distanceRatio = Math.max(0, 1 - distance / FOOTPRINT_RADIUS);

                if (distanceRatio <= 0) {
                    continue;
                }

                const imprintStrength = Math.pow(distanceRatio, 1.4) * 0.78;
                cell.imprint = Math.max(cell.imprint, imprintStrength);
            }
        };

        const handlePointerMove = (event) => {
            registerTrailPoint(event.clientX, event.clientY);
        };

        const handlePointerLeave = () => {
            trailRef.current = trailRef.current.slice(0, 6);
        };

        const render = (now) => {
            const { width, height, dpr } = viewportRef.current;
            if (!width || !height) {
                animationFrameRef.current = window.requestAnimationFrame(render);
                return;
            }

            const delta = lastFrameTimeRef.current ? now - lastFrameTimeRef.current : 16;
            lastFrameTimeRef.current = now;

            trailRef.current = trailRef.current.filter((point) => now - point.time < TRAIL_LIFETIME_MS);

            context.setTransform(1, 0, 0, 1, 0, 0);
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.setTransform(dpr, 0, 0, dpr, 0, 0);
            context.textAlign = "center";
            context.textBaseline = "middle";

            for (const cell of cellsRef.current) {
                if (cell.imprint > 0) {
                    cell.imprint = Math.max(0, cell.imprint - delta / cell.fadeMs);
                }

                let trailInfluence = 0;

                for (const point of trailRef.current) {
                    const ageRatio = 1 - (now - point.time) / TRAIL_LIFETIME_MS;
                    const dx = point.x - cell.x;
                    const dy = point.y - cell.y;
                    const distance = Math.hypot(dx, dy);
                    const distanceRatio = Math.max(0, 1 - distance / INFLUENCE_RADIUS);
                    const nextInfluence = ageRatio * distanceRatio;

                    if (nextInfluence > trailInfluence) {
                        trailInfluence = nextInfluence;
                    }
                }

                const footprintInfluence = cell.imprint;
                const alpha = Math.min(
                    theme === "light" ? 0.12 : 0.22,
                    cell.baseAlpha +
                        trailInfluence * (theme === "light" ? 0.12 : 0.24) +
                        footprintInfluence * (theme === "light" ? 0.08 : 0.14),
                );
                if (alpha <= 0.006) {
                    continue;
                }

                const accentRatio = Math.min(1, trailInfluence * 1.25 + footprintInfluence * 0.7);
                const snowRatio = footprintInfluence > 0 ? Math.max(0, 1 - footprintInfluence / 0.34) * 0.72 : 0;

                let red = mixChannel(theme === "light" ? 124 : 72, theme === "light" ? 84 : 98, accentRatio);
                let green = mixChannel(theme === "light" ? 138 : 84, theme === "light" ? 111 : 112, accentRatio);
                let blue = mixChannel(theme === "light" ? 172 : 122, theme === "light" ? 182 : 164, accentRatio);

                red = mixChannel(red, theme === "light" ? 156 : 82, snowRatio);
                green = mixChannel(green, theme === "light" ? 168 : 94, snowRatio);
                blue = mixChannel(blue, theme === "light" ? 197 : 136, snowRatio);

                context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
                context.font = `${cell.weight} ${cell.size + accentRatio * 0.8}px "Space Grotesk", monospace`;
                context.fillText(cell.glyph, cell.x, cell.y);
            }

            animationFrameRef.current = window.requestAnimationFrame(render);
        };

        syncCanvasSize();

        window.addEventListener("resize", syncCanvasSize);
        window.addEventListener("pointermove", handlePointerMove, { passive: true });
        window.addEventListener("pointerleave", handlePointerLeave);

        animationFrameRef.current = window.requestAnimationFrame(render);

        return () => {
            window.cancelAnimationFrame(animationFrameRef.current);
            window.removeEventListener("resize", syncCanvasSize);
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerleave", handlePointerLeave);
        };
    }, [theme]);

    return <canvas ref={canvasRef} className="ambient-glyph-field" aria-hidden="true" />;
};
