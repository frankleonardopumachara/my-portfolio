export const containsAws = (value) => typeof value === "string" && value.includes("AWS");

export const renderAwsText = (value, options = {}) => {
    const { highlight = true } = options;

    if (!containsAws(value) || !highlight) {
        return value;
    }

    return value.split(/(AWS)/g).map((part, index) => {
        if (part === "AWS") {
            return (
                <span key={`aws-${index}`} className="aws-inline">
                    {part}
                </span>
            );
        }

        return part;
    });
};
