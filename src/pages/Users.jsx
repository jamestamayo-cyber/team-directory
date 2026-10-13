import { useEffect, useState } from 'react'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import UserCard from '../components/UserCard'
import { mockUsers } from '../data/users'

export default function Users() {
  const [users, setUsers] = useState([])
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase()),
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setUsers(mockUsers)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    document.title = `Users (${filteredUsers.length})`
  }, [filteredUsers.length])

  return (
    <section>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Team Members</h1>
      <label className="mt-5 block w-full max-w-md">
        <span className="mb-2 block font-medium">Search by name</span>
        <span className="relative block">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          >
            <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="m13 13 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
          <input
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Enter a name"
            className="w-full rounded-md border border-slate-300 bg-white py-2 pl-10 pr-3 text-slate-900 outline-none transition focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          />
        </span>
      </label>
      <div className="mt-6">
        {isLoading ? (
          <Loader />
        ) : filteredUsers.length === 0 ? (
          <ErrorMessage message="No users match your search." />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}