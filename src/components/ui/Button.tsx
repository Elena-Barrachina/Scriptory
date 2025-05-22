export function Button({
  children,
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-4 py-2 rounded-full bg-teal-500 text-white text-sm font-medium shadow hover:bg-teal-600 transition duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
