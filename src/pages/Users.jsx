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
      <h1 className="text-3xl font-bold">Team Members</h1>
      <label className="mt-5 block">
        <span className="mb-2 block font-medium">Search by name</span>
        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Enter a name"
          className="w-full max-w-md rounded border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
        />
      </label>
      <div className="mt-6">
        {isLoading ? (
          <Loader />
        ) : filteredUsers.length === 0 ? (
          <ErrorMessage message="No users match your search." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}