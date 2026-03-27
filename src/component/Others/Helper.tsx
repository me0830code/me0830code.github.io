export const CustomizedTextRendering = (text: string) => {
    if (!text) return null;

    const parts = text.split(/(\*\*.*?\*\*)/g);
    
    return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return (
                <strong key={index} className="font-bold text-black bg-gradient-to-t from-yellow-300 from-50% to-transparent to-50% px-1">
                    {part.slice(2, -2)}
                </strong>
            );
        }
        return part;
    });
};