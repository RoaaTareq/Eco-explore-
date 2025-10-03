export default function Image({ src, alt = "", className = "", rounded = "md", shadow = true, ...props }) {
  const roundedClass = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${roundedClass[rounded] || "rounded-md"}  ${className}`}
      {...props}
    />
  );
}
