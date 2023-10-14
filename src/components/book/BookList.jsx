import React, { useState } from 'react'
import Book from './Book';
import withLogger from '../HOC/withLogger';
import BookForm from './BookForm';
import BookDetails from './BookDetails';
import '../../index.css';

const booksData = [
  { "title": "Book 1", "author": "Author 1", "year": 2020 },
  { "title": "Book 2", "author": "Author 2", "year": 2018 },
  { "title": "Book 3", "author": "Author 3", "year": 2022 }
];

const BookList = () => {
  const [books, setBooks] = useState(booksData);
  const [isBookDetail, setIsBookDetail] = useState(false);
  const deleteBook = (idx) => {
    setBooks(elem => {
      const updatedBooks = [...elem];
      updatedBooks.splice(idx, 1);
      return updatedBooks;
    });
  };

  if(books.length <= 0) return <p>No Books Available</p>;

  return (
    <div className='flex justify-center p-20 items-center flex-col bg-slate-200'>
      <BookForm setBooks={setBooks} />
      <br />
      {books.map((book, idx) => {
        const props = {
          idx,
          book,
          isBookDetail,
          setIsBookDetail,
          deleteBook
        };
        return(
          <li key={idx} style={{listStyle: "none"}}>
            <Book props={props} />
            {isBookDetail && <BookDetails />}
          </li>
        )
      })}
    </div>
  )
}

export default withLogger(BookList);