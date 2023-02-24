import '../assets/style/Home.css';
import '../assets/style/gallerystyle.css';
import React from 'react';
import books from '../assets/testDb/books.json'
const Home = () => {

  return (
    <section className="home">
      <div className="book-banner">
        <div className='book-banner-title'>
      <h1>Best-Sellers</h1>
      <a href='/Books'><p className="see-more">(See More)</p></a>
      </div>
          <div className="book-banner-content">
            {books.map((book) => (
              <div className="SingleBook">
              <ul key={book.id}>
                <img src={book.img} alt={book.name} width={'100px'} height={'150px'} />
                <div className="book-info">
                <a href={`/Books/${book.id}`} className="button">{book.name}</a> <br/>
                </div>
                </ul>
                </div>
            ))}
                      
          </div>
      </div>
    </section>
  );
  };
  
  export default Home;