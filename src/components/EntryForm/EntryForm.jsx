import React from 'react'

export default function EntryForm({
  name,
  entry,
  setEntry,
  handleSubmit,
  handleSignout
}) {
  return (
    <form onSubmit={(e) => handleSubmit(e)} className='entry-form'>
      <label>
        Entry
        <textarea rows='3' value={entry} onChange={({target}) => setEntry(target.value)}></textarea>
      </label>

      <button type="submit" aria-label='sign'>Sign</button>

      <button onClick={handleSignout} aria-label='sign-out'>Not {name}?</button>
      
    </form>
  )
}
