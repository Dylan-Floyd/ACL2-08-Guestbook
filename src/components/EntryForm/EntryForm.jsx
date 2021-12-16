import React from 'react'

export default function EntryForm({
  name,
  entry,
  isSignedIn,
  setName,
  setEntry,
  handleSubmit,
  handleSignout
}) {
  return (
    <form onSubmit={(e) => handleSubmit(e)} className='entry-form'>
      {isSignedIn ? (
        <label>Thank you for signing {name}. Feel free to add more entries.</label>
      ) : (
        <label>Please Sign the Guestbook!</label>
      )}

      {isSignedIn ? <></> : (
        <label>
          Guest Name
          <input type='text' value={name} onChange={({target}) => setName(target.value)}></input>
        </label>
      )}

      <label>
        Guest Entry
        <textarea rows='3' value={entry} onChange={({target}) => setEntry(target.value)}></textarea>
      </label>

      <button type="submit" aria-label='sign'>Sign</button>

      {isSignedIn ? <button onClick={handleSignout} aria-label='sign-out'>Not {name}?</button> : <></>}
      
    </form>
  )
}
