const baseStyles = "rounded-xl font-meduim focus-outline-none focus:ring transition";

const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
};

const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
};

export default function Button({ children, variant = "primary", size = "md", className = "", ...props }) {
    return (
        <button className={`${baseStyles} ${variants[variant]}${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    );
}
