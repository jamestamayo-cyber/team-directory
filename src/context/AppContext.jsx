import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [favorites, setFavorites] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  function toggleFavorite(userId) {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(userId)
        ? currentFavorites.filter((favoriteId) => favoriteId !== userId)
        : [...currentFavorites, userId],
    )
  }

  return (
    <AppContext.Provider
      value={{
        favorites,
        toggleFavorite,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}