import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import Button from './Button'

export default function Navbar() {
  const { favorites, darkMode, setDarkMode } = useAppContext()

  function navLinkClass({ isActive }) {
    const activeStyles = isActive
      ? 'font-bold text-slate-900 underline underline-offset-4 dark:text-slate-100'
      : 'text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-300'

    return `transition-colors duration-150 ${activeStyles}`
  }

  return (
    <nav className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-y-4 px-6 py-4 md:grid-cols-[1fr_auto_1fr]">
        <NavLink
          to="/"
          className="whitespace-nowrap text-xs font-bold tracking-wide text-slate-900 dark:text-slate-100 sm:text-sm md:text-base"
        >
          TEAM DIRECTORY
        </NavLink>
        <div className="flex items-center justify-end gap-2 md:gap-3">
          <span className="whitespace-nowrap rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200 sm:px-3 sm:text-sm">
            Favorites: {favorites.length}
          </span>
          <Button
            label={darkMode ? 'Light Mode' : 'Dark Mode'}
            onClick={() => setDarkMode((currentMode) => !currentMode)}
          />
        </div>
        <div className="col-span-2 flex items-center justify-center gap-6 md:col-span-1 md:col-start-2 md:row-start-1">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/users" className={navLinkClass}>
            Users
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  )
}