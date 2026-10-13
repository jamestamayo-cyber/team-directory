export default function Button({
  label,
  onClick,
  variant = 'primary',
  children,
  type = 'button',
}) {
  const colorStyles =
    variant === 'danger'
      ? 'bg-red-700 text-white hover:bg-red-800 dark:bg-red-700 dark:hover:bg-red-600'
      : 'bg-blue-700 text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500'

  return (
    <button
      type={type}
      onClick={onClick}
      className={`whitespace-nowrap rounded-md px-4 py-2 font-medium shadow-sm transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${colorStyles}`}
    >
      {children ?? label}
    </button>
  )
}