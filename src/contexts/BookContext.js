import React, { createContext, useState } from 'react'

export const BookContext = createContext()

const BookContextProvider = (props) => {
  const [books, setBook] = useState([
    {title: 'Book 1', id: 1},
    {title: 'Book 2', id: 2},
    {title: 'Book 3', id: 3},
    {title: 'Book 4', id: 4},
  ])
  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;
