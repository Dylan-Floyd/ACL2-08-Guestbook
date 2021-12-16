import React from 'react'

export default function EntryDisplay({ text, name }) {
  return (
    <div>
      {text}
      <br />
      <em>-{name}</em>
    </div>
  )
}
