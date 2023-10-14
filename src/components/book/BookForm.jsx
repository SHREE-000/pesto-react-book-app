import React, { useState } from 'react';

const BookForm = ({ setBooks }) => {
    const [book, setBook] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");

    const addBook = (e) => {
        e.preventDefault();
        const obj = {
            title: book,
            author,
            year
        };
        setBooks(elem => [...elem, obj]);
        setBook("");
        setAuthor("");
        setYear("");
    };

  return (
    <div className='p-5 border border-black'>
      <h1 className='pt-5 py-5 text-lg font-bold'>Add a New Book</h1>
      <form onSubmit={addBook}>
        <label htmlFor="title">Book Title:</label>
        <input onChange={(e) => setBook(e.target.value)} value={book} type="text" className='border-2 border-gray-300' required /><br />

        <label htmlFor="author">Author Name:</label>
        <input onChange={(e) => setAuthor(e.target.value)} value={author} type="text" iclassName='border-2 border-gray-300' required /><br />

        <label htmlFor="year">Publication Year:</label>
        <input onChange={(e) => setYear(e.target.value)} value={year} type="number" className='border-2 border-gray-300' min="1000" max="9999" required /><br />

        <input type="submit" value="Add Book" className="mt-5 border border-red-500 bg-green-500"/>
      </form>
    </div>
  );
};

export default BookForm;
