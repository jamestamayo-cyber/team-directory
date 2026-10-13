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
      <section>
        <ErrorMessage message="User not found." />
        <Button
          label="Return to users"
          onClick={() => navigate('/users')}
        />
      </section>
    )
  }

  return (
    <section>
      <h1 className="text-3xl font-bold">{user.name}</h1>
      <dl className="mt-5 space-y-2">
        <div>
          <dt className="inline font-semibold">Email: </dt>
          <dd className="inline">{user.email}</dd>
        </div>
        <div>
          <dt className="inline font-semibold">Company: </dt>
          <dd className="inline">{user.company}</dd>
        </div>
        <div>
          <dt className="inline font-semibold">Role: </dt>
          <dd className="inline">{user.role}</dd>
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