import { createContext, useContext, useState } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({})

  function signIn(username, password) {
    console.log(process.env.NOT_WINDOWS_USERNAME)
    console.log(process.env.PASSWORD)
    if(username === process.env.NOT_WINDOWS_USERNAME
      && password === process.env.PASSWORD) {
      setUser({name: username})
      return true
    }
    return false
  }

  function signOut() {
    setUser({})
  }

  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
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