import React, { memo } from 'react'
import '../../index.css';

const Book = ({ props }) => {
  const { idx, book, isBookDetail, setIsBookDetail, deleteBook } = props;
    const {
        title,
        author,
        year
    } = book;
  return (
    <div className='p-5 border border-black'>
    <h3>{title}</h3>
    <label for="toggleSwitch">{isBookDetail ? "Hide Description" : "Show Description"}</label>
    <input onChange={() => setIsBookDetail(!isBookDetail)} type="checkbox" id="toggleSwitch"></input>
    <p>Author: {author}</p>
    <p>Year: {year}</p>
    <button onClick={() => deleteBook(idx)} className="border border-green-500 bg-red-500">Delete Book</button>
  </div>
  )
}

export default memo(Book);