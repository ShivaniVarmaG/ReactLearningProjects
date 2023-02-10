import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';


function BookList() {
  const someValue = 'Shake&Bake'; //prop drill
  const displayValue = () => {
    console.log(someValue);
  }

  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  }
  return (
    <>
      <h1 className='heading'> Amazon best Sellers</h1>
    <section className='booklist'>
      {/* <EventExample/> */}
      {books.map((book,index) => {
        // return <Book book={book} key={book.id}/>
        return <Book {...book} key={book.id} displayValue={displayValue} getBook={getBook} number={index} />
      })}
    </section>
    </>
  );
};


// const EventExample=()=>{                    //event function
//   const handleFormInput=(e)=>{
//     console.log(e.target);
//     console.log('handle form input');
//   };

//   const handleButtonClick=()=>{
//     console.log('handle Button Click');
//   };

//   const handleFormSubmission=(e)=>{
//     e.preventDefault();
//     console.log('form submitted');
//   }
// return(
//   <section>
//     <form onSubmit={handleFormSubmission}>
//       <h2> Form</h2>
//       <input type="text"  name='example' onChange={handleFormInput} style={{margin:'1rem 0'}}/>
//       <button type='submit' onClick={handleFormSubmission}>Click me</button>
//     </form>
//   </section>
// );
// };


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);