import "bootstrap/dist/css/bootstrap.min.css";
import "./tailwind.css";
import { Footer, Navbar, ScrollToTop } from "components";
import {
  BookPage,
  ErrorPage,
  HomePage,
  ListBookPage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  CartPage,
} from "pages";
import { Suspense,useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {setTypes} from "features/books/booksSlice";
import instance from "api/axios";
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchType = async ()=>{
      const typeResp = await instance.get('/categories');
      const type = typeResp.data.category_list;
      type.sort(function(a, b) {
        return Number(a.cat_id) - Number(b.cat_id);
      });
      dispatch(setTypes(type));
    }
    const getBooks = async ()=>{
      const bookGetResp = await instance.get('/books');
      const bookGet = bookGetResp.data;
      console.log(bookGet.book_list);
    };
    getBooks();
    fetchType();
  },[dispatch]);
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <BrowserRouter>
        {/* Scoll to top page when redirect  */}
        <ScrollToTop />
        {/* Nagivation bar for all pages */}
        <Navbar />

        <Switch>
          {/* Home page */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/home" component={HomePage} />
          {/* List of all books in the store */}
          <Route exact path="/books" component={ListBookPage} />
          {/* View book details */}
          <Route exact path="/book/:id" component={BookPage} />
          {/* Profile page */}
          <Route exact path="/profile" component={ProfilePage} />
          {/* Shopping cart page */}
          <Route exact path="/cart" component={CartPage} />
          {/* Login page */}
          <Route exact path="/login" component={LoginPage} />
          {/* Register page */}
          <Route exact path="/register" component={RegisterPage} />
          {/* Error page */}
          <Route path="*" component={ErrorPage} />
        </Switch>

        {/* Footer for all pages */}
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}
export default App;
