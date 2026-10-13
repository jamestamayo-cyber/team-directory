export default function Button({
  label,
  onClick,
  variant = 'primary',
  children,
  type = 'button',
}) {
  const colorStyles =
    variant === 'danger'
      ? 'bg-red-700 text-white hover:bg-red-800'
      : 'bg-blue-700 text-white hover:bg-blue-800'

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded px-4 py-2 font-medium ${colorStyles}`}
    >
      {children ?? label}
    </button>
  )
}