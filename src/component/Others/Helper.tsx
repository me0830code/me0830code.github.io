export const CustomizedTextRendering = (text: string) => {
    if (!text) return null;

    const parts = text.split(/(\*\*.*?\*\*)/g);
    
    return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return (
                <strong key={index} className="font-bold text-pink-500">
                    {part.slice(2, -2)}
                </strong>
            );
        }
        return part;
    });
};