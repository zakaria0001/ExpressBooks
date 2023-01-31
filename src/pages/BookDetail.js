import {Route, Link, Routes, useParams} from 'react-router-dom';

const BookDetail = () => {
    const params = useParams();

  console.log(params); 

  return <h2> ID: {params.id}</h2>;
  
  };
  
  export default BookDetail;