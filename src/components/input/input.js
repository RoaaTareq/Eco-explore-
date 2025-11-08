const baseStyles = " w-full rounded-xl border focus:outline-none focus:ring transition";

const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
};

const states = {
    default: "border-gray-300 focus:ring-blue-300 focus:border-blue-400",
    error: "border-red-500 focus:ring-red-300 focus:border-red-500",
    success: "border-green-500 focus:ring-green-300 focus:border-green-500",
};

export default function Input({ type = "text", size = "md", state = "default", className = "", leftIcon, rightIcon, ...props }) {
    return (
        <div className={`flex items-center gap-2 ${sizes[size]} ${className} border rounded-xl ${states[state]}`}>
            {leftIcon && <span className="text-gray-500">{leftIcon}</span>}
            <input type={type} className="w-full bg-transparent outine-none" {...props} />
            {rightIcon && <span className="text-grey-500">{rightIcon}</span>}
        </div>
    );
}
