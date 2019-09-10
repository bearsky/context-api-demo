import React from 'react'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeToggle from './components/ThemeToggle'

import ThemeContextProvider from './contexts/ThemeContext'
import AuthContexProvider from './contexts/AuthContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContexProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContexProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
