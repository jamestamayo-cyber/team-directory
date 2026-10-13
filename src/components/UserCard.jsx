import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function UserCard({ id, name, email, company, role }) {
  const { favorites, toggleFavorite } = useAppContext()
  const isFavorite = favorites.includes(id)

  return (
    <article className="rounded border border-gray-200 p-5 dark:border-gray-700">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{role}</p>
        </div>
        <button
          type="button"
          onClick={() => toggleFavorite(id)}
          aria-label={isFavorite ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
          aria-pressed={isFavorite}
          className="text-2xl leading-none"
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
      <dl className="mt-4 space-y-1 text-sm">
        <div>
          <dt className="inline font-semibold">Email: </dt>
          <dd className="inline">{email}</dd>
        </div>
        <div>
          <dt className="inline font-semibold">Company: </dt>
          <dd className="inline">{company}</dd>
        </div>
      </dl>
      <Link
        to={`/users/${id}`}
        className="mt-4 inline-block font-medium text-blue-700 underline dark:text-blue-300"
      >
        View Details
      </Link>
    </article>
  )
}