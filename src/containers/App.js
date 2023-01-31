import '../assets/style/App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About"
import Home from "../pages/Home"
import Books from "../pages/Books"
import Contact from "../pages/Contact"
import ErrorPage from "../pages/ErrorPage"
import BookDetail from "../pages/BookDetail"
import Layout from "../pages/Layout"
function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Books/:id" element={<BookDetail/>} />
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
