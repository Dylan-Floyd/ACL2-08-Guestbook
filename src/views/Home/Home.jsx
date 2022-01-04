import { useState } from 'react'
import EntryForm from '../../components/EntryForm/EntryForm.jsx'
import EntryList from '../../components/EntryList/EntryList.jsx'
import { useUser } from '../../context/UserContext.jsx'

export default function Home() {
  const { user, signIn, signOut } = useUser()
  const { name } = user
  const [entry, setEntry] = useState('')
  const [entries, setEntries] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries((prevEntries) => [...prevEntries, { text: entry, name: name } ])
    setEntry('')
  }

  const handleSignout = (e) => {
    signOut()
    setName('')
  }

  return (
    <div className="home">
      <EntryForm 
        {...{
          name,
          entry,
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
