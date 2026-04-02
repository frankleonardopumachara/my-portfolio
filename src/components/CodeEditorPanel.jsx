import { useEffect, useRef, useState } from "react";

const INITIAL_CODE = `export const editorConfig = {
  fileName: "index.ts",
  editable: true,
  syntaxColor: true,
  validation: false,
  accent: "aws-orange",
};

function mountEditor(): void {
  return createStaticVscode(editorConfig);
}
`;

const TOKEN_REGEX =
    /(\/\/.*$|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b(?:export|const|function|return|true|false|let|type|interface|class|new|extends|import|from)\b|\b(?:void|string|number|boolean|Promise|Record|Array)\b|\b\d+\b)/g;

const KEYWORD_SET = new Set([
    "export",
    "const",
    "function",
    "return",
    "true",
    "false",
    "let",
    "type",
    "interface",
    "class",
    "new",
    "extends",
    "import",
    "from",
]);

const TYPE_SET = new Set(["void", "string", "number", "boolean", "Promise", "Record", "Array"]);

const renderTokenClass = (token) => {
    if (token.startsWith("//")) {
        return "code-comment";
    }

    if (token.startsWith('"') || token.startsWith("'")) {
        return "code-string";
    }

    if (/^\d+$/.test(token)) {
        return "code-accent";
    }

    if (KEYWORD_SET.has(token)) {
        return "code-keyword";
    }

    if (TYPE_SET.has(token)) {
        return "code-type";
    }

    return "code-default";
};

const renderHighlightedLine = (line, lineIndex) => {
    const parts = [];
    let cursor = 0;

    for (const match of line.matchAll(TOKEN_REGEX)) {
        const token = match[0];
        const offset = match.index ?? 0;

        if (offset > cursor) {
            parts.push(
                <span key={`${lineIndex}-plain-${cursor}`}>{line.slice(cursor, offset)}</span>,
            );
        }

        parts.push(
            <span key={`${lineIndex}-${offset}`} className={renderTokenClass(token)}>
                {token}
            </span>,
        );

        cursor = offset + token.length;
    }

    if (cursor < line.length) {
        parts.push(<span key={`${lineIndex}-tail-${cursor}`}>{line.slice(cursor)}</span>);
    }

    if (parts.length === 0) {
        parts.push(<span key={`${lineIndex}-empty`}>&nbsp;</span>);
    }

    return parts;
};

export const CodeEditorPanel = ({ title }) => {
    const [code, setCode] = useState(INITIAL_CODE);
    const [isAwake, setIsAwake] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const shellRef = useRef(null);
    const inputRef = useRef(null);

    const lines = code.split("\n");

    useEffect(() => {
        if (!shellRef.current) {
            return undefined;
        }

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setIsAwake(true);
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    setIsAwake(true);
                    observer.disconnect();
                });
            },
            {
                threshold: 0.38,
            },
        );

        observer.observe(shellRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleChange = (event) => {
        setCode(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key !== "Tab" || !inputRef.current) {
            return;
        }

        event.preventDefault();
        const start = inputRef.current.selectionStart ?? 0;
        const end = inputRef.current.selectionEnd ?? 0;
        const nextValue = `${code.slice(0, start)}  ${code.slice(end)}`;

        setCode(nextValue);

        window.requestAnimationFrame(() => {
            inputRef.current?.setSelectionRange(start + 2, start + 2);
        });
    };

    return (
        <div ref={shellRef} className="code-editor-shell">
            {title ? <h3 className="code-editor-heading">{title}</h3> : null}
            <div className={`code-editor-window${isAwake ? " is-awake" : ""}`}>
                <div className="code-editor-topbar">
                    <div className="code-editor-dots" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="code-editor-tab is-active">
                        <span>index.ts</span>
                    </div>
                    <div className="code-editor-meta">
                        <span>TypeScript</span>
                        <span>Editable</span>
                    </div>
                </div>

                <div className="code-editor-body">
                    <div className="code-editor-gutter" style={{ transform: `translateY(-${scrollTop}px)` }}>
                        {lines.map((_, index) => (
                            <div key={index}>{index + 1}</div>
                        ))}
                    </div>

                    <div
                        className="code-editor-code"
                        style={{ transform: `translate(${-scrollLeft}px, -${scrollTop}px)` }}
                        aria-hidden="true"
                    >
                        {lines.map((line, index) => (
                            <div key={`${index}-${line.length}`} className="code-editor-line">
                                {renderHighlightedLine(line, index)}
                            </div>
                        ))}
                    </div>

                    <textarea
                        ref={inputRef}
                        className="code-editor-input"
                        spellCheck={false}
                        autoCapitalize="off"
                        autoComplete="off"
                        autoCorrect="off"
                        wrap="off"
                        value={code}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onScroll={(event) => {
                            setScrollTop(event.currentTarget.scrollTop);
                            setScrollLeft(event.currentTarget.scrollLeft);
                        }}
                        aria-label="Editable TypeScript code preview"
                    />
                </div>

                <div className="code-editor-statusbar">
                    <span>TypeScript</span>
                    <span>Spaces: 2</span>
                    <span>No validation</span>
                    <span>Write only</span>
                </div>
            </div>
        </div>
    );
};
