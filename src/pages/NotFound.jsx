import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-3">
        Return to the <Link className="underline" to="/">home page</Link>.
      </p>
    </section>
  )
}