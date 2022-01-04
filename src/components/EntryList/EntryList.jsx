import React from 'react'
import EntryDisplay from '../EntryDisplay/EntryDisplay.jsx'

export default function EntryList({ entries }) {
  return (
    <div>
      <ul>
        {entries.map(entry => <EntryDisplay {...entry} key={entry.text}/>)}
      </ul>
    </div>
  )
}
