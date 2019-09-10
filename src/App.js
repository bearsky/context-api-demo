import React from 'react'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeToggle from './components/ThemeToggle'

import ThemeContextProvider from './contexts/ThemeContext'
import AuthContexProvider from './contexts/AuthContext'
import BookContextProvider from './contexts/BookContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContexProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContexProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
