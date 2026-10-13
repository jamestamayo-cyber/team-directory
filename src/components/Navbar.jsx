import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import Button from './Button'

export default function Navbar() {
  const { favorites, darkMode, setDarkMode } = useAppContext()

  function navLinkClass({ isActive }) {
    return isActive
      ? 'font-bold underline underline-offset-4'
      : 'text-gray-700 hover:underline dark:text-gray-200'
  }

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-5 px-6 py-4">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/users" className={navLinkClass}>
          Users
        </NavLink>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
        <span className="ml-auto">Favorites: {favorites.length}</span>
        <Button
          label={darkMode ? 'Light Mode' : 'Dark Mode'}
          onClick={() => setDarkMode((currentMode) => !currentMode)}
        />
      </div>
    </nav>
  )
}