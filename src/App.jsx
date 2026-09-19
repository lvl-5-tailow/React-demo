import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div>
      <div className="card">
        <h1>Hii lol</h1>
        <p>This is a simple React application using Vite.</p>
      </div>
      {Card()}
    </div>
  )
}

export default App