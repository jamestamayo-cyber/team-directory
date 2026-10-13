import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import ErrorMessage from '../components/ErrorMessage'
import { mockUsers } from '../data/users'

export default function UserDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(mockUsers.find((member) => member.id === id) ?? null)
  }, [id])

  useEffect(() => {
    document.title = user ? user.name : 'User not found'
  }, [user])

  if (!user) {
    return (
      <section className="mx-auto max-w-2xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <ErrorMessage message="User not found." />
        <div className="mt-5">
          <Button
            label="Return to users"
            onClick={() => navigate('/users')}
          />
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-2xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
        Team member
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">{user.name}</h1>
      <p className="mt-2 text-lg font-medium text-blue-700 dark:text-blue-300">{user.role}</p>
      <dl className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
        <div className="flex gap-3">
          <dt className="shrink-0 font-semibold">Email</dt>
          <dd className="break-all">{user.email}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="shrink-0 font-semibold">Company</dt>
          <dd>{user.company}</dd>
        </div>
      </dl>
      <div className="mt-6">
        <Button
          label="Back to users"
          onClick={() => navigate('/users')}
        />
      </div>
    </section>
  )
}