import { useState } from 'react'
import EntryForm from '../../components/EntryForm/EntryForm.jsx'
import EntryList from '../../components/EntryList/EntryList.jsx'
import { useUser } from '../../context/UserContext.jsx'

export default function Home() {
  const { user, setUser } = useUser()
  const [name, setName] = useState('')
  const [entry, setEntry] = useState('')
  const [entries, setEntries] = useState([])

  const isSignedIn = user?.name !== undefined

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isSignedIn) setUser({ name: name })
    setEntries((prevEntries) => [...prevEntries, { text: entry, name: name } ])
    setEntry('')
  }

  const handleSignout = (e) => {
    setUser({})
    setName('')
  }

  return (
    <div className="home">
      <EntryForm 
        {...{
          name,
          entry,
          isSignedIn,
          setName,
          setEntry,
          handleSubmit,
          handleSignout
        }}
      />
      <div>
        <EntryList entries={entries}/>
      </div>
    </div>
  )
}
