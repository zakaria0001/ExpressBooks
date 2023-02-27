import '../assets/style/App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About"
import Home from "../pages/Home"
import Books from "../pages/Books"
import Contact from "../pages/Contact"
import ErrorPage from "../pages/ErrorPage"
import BookDetail from "../pages/BookDetail"
import ProfilDetail from "../pages/Admin/ProfileDetail"
import BookDetailAdmin from "../pages/Admin/BookDetail"
import BooksCat from "../pages/BooksCat"
import BooksCatAdmin from "../pages/Admin/BooksCat"
import Login from "../pages/Admin/Login"
import Dashboard from "../pages/Admin/Dashboard"
import Layout from "../pages/Layout"
import LayoutAdmin from "../pages/Admin/LayoutAdmin"
import BooksGest from "../pages/Admin/BooksGest"
import AddBook from "../pages/Admin/AddBook"

function App() {
  return (

    <BrowserRouter>
    <Routes>
    <Route path={"Admin"}>
      <Route index element={<Login/>}></Route>
      <Route path={""} element={<LayoutAdmin/>}>
        <Route path="Dashboard" element={<Dashboard/>} />
        <Route path="Livres" element={<BooksGest/>}/>
        <Route path="AjouterLivre" element={<AddBook/>}/>
        <Route path="Books/Categorie/:Categorie" element={<BooksCatAdmin/>} />
        <Route path="Books/:id" element={<BookDetailAdmin/>} />
        <Route path="Profile/:id" element={<ProfilDetail/>} />
      </Route>

    </Route>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Books/:id" element={<BookDetail/>} />
        <Route path="Books/Categorie/:Categorie" element={<BooksCat/>} />
        <Route path="About" element={<About />} />
        <Route path="Books" element={<Books />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
