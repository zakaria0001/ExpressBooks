const Books = () => {
const books = [
  {
      "id": "1",
      "name": "Harry Potter: The Prequel",
      "author": "J.K. Rowling",
      "category": "Fantasy",
      "img" : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944._SY180_.jpg"
  },
  {
      "id": "2",
      "name": "Harry Potter and the Deathly Hallows",
      "author": "J.K. Rowling",
      "category": "Fantasy",
      "img" : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1663805647i/136251._SY180_.jpg"
  },
  {
      "id": "3",
      "name": "The Final Gambit",
      "author": "Jennifer Lynn Barnes",
      "category": "Mystery",
      "img" : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1634068432l/59233594.jpg"
  },
  {
      "id": "4",
      "name": "Lessons in Chemistry",
      "author": "Bonnie Garmus",
      "category": "Romance",
      "img" : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1634748496l/58065033._SY475_.jpg"
  }
]
const categories = {};

books.forEach((book) => {
  if (!categories[book.category]) {
    categories[book.category] = [];
  }
  categories[book.category].push(book);
});
console.log(categories);
    return (
      <div class="bg-[#bfb6b6c0]">
        {/* this is category */}
      <div class="category flex flex-col items-start ml-6 mr-4 ">
      <div style={{height:'20px'}} aria-hidden="true" class="wp-block-spacer"></div>
        <p class="text-2xl font-semibold font-mono text-gray-800 font-serif mt-3 underline underline-offset-2">Category :</p>
      <div style={{height:'20px'}} aria-hidden="true" class="wp-block-spacer"></div>

        </div>
      
      <div class="books flex flex-row flex-wrap gap-1 justify-center mt-6">
        {/* this is card  */}
        <div class="w-80 bg-white shadow rounded border-2 border-black rounded-sm">
      <div
        class="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center"
        style={{backgroundImage: `url('https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`}}
      >
      </div>
      <div class="p-4 flex flex-col items-center">
        <p class="text-gray-400 font-light text-xs text-center">author</p>
        <h1 class="text-gray-800 text-center mt-1">name</h1>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Details</button>
      </div>
        </div>
        {/* end of card */}
        {/* every 4 do this */}
      <div style={{height:'20px'}} aria-hidden="true" class="wp-block-spacer"></div>
     
      </div>

      
      </div>
      
    );
  };
  
  export default Books;