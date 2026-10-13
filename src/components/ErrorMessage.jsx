export default function ErrorMessage({ message = 'Something went wrong.' }) {
  return <p role="alert" className="text-red-700 dark:text-red-300">{message}</p>
}