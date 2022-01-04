import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useUser } from '../../context/UserContext.jsx'

export default function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [failedAttempt, setFailedAttempt] = useState(false)
  const { signIn } = useUser()
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if(signIn(username, password)) {
      history.replace('/')
    } else {
      setFailedAttempt(true)
    }
  }
  return (
    <div className='home'>
      <form onSubmit={handleSubmit} className='signin-form'>
        {failedAttempt ? <>Invalid Credentials. Please Try Again.</> : <></>}
        <label>
          Name: 
          <input value={username} onChange={({target}) => setUsername(target.value)}></input>
        </label>
        <label>
          Password: 
          <input value={password} onChange={({target}) => setPassword(target.value)}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
