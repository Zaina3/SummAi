import React from 'react';

import Hero from '/src/Components/Hero'
import Demo from '/src/Components/Demo'

import './App.css';

const App = () => {
  return (
    <main>
      <div className = "main">
        <div className="gradient"/>
      </div>
      <div className="app">
        <Hero />
        <Demo />  
      </div>
    </main>
    
  )
}

export default App