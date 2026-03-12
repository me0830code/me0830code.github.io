type ButtonProps = {
    variant?: "solid" | "outline" | "ghost";
} & React.ComponentPropsWithoutRef<"a">;

const styles = {
    base: "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm transition",
    solid: "bg-black text-white hover:opacity-90",
    outline: "border hover:bg-black/5",
    ghost: "hover:bg-black/5",
};

export function Button({ variant = "outline", className = "", ...props }: ButtonProps) {
    return (
        <a
            {...props}
            className={[styles.base, styles[variant], className].join(" ")}
        />
    );
}