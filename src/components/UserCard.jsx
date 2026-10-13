import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function UserCard({ id, name, email, company, role }) {
  const { favorites, toggleFavorite } = useAppContext()
  const isFavorite = favorites.includes(id)

  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{name}</h2>
          <p className="mt-1 font-medium text-blue-700 dark:text-blue-300">{role}</p>
        </div>
        <button
          type="button"
          onClick={() => toggleFavorite(id)}
          aria-label={isFavorite ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
          aria-pressed={isFavorite}
          className="rounded p-1 text-2xl leading-none text-amber-500 transition-colors hover:text-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
      <dl className="mt-4 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex gap-2">
          <dt className="shrink-0 font-semibold">Email</dt>
          <dd className="break-all">{email}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="shrink-0 font-semibold">Company</dt>
          <dd>{company}</dd>
        </div>
      </dl>
      <Link
        to={`/users/${id}`}
        className="mt-auto inline-block pt-5 font-medium text-blue-700 underline underline-offset-4 transition-colors hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
      >
        View Details <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}