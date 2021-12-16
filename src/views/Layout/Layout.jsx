import { useUser } from '../../context/UserContext.jsx'

export default function Layout({ children }) {
  const { user } = useUser()

  return (
    <>
      <header>
        <h2>Guestbook</h2>
        <div className='right-div'>
          {user?.name ? <>(Signing as {user.name})</> : <></>}
        </div>
      </header>
      {children}
      <footer>
        Footer
      </footer>
    </>
  )
}
