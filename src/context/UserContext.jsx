import { createContext, useContext, useState } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  
  if (context === undefined) {
    throw new Error('useUser can only be called from a child component of UserProvider')
  }

  return context;
}