
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Board from './Components/board.jsx'
import Header from './Components/header/header.jsx';
import Footer from './Components/footer/footer.jsx';
import Login from './Components/auth/authorization.jsx';
import  Home  from './Components/home/home.jsx';
import Browser, { searchData } from './Components/browser/browser.jsx';
import ProdPage from './Components/productPage/prodPage.jsx';
import Regist from './Components/auth/registration.jsx';
import UserPage from './Components/user/userPage.jsx';

import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import React from "react";
import Cart from './Components/cart/cart.jsx';
import Catalog from './Components/catalog/catalog.jsx';
import CatPage from './Components/catalog/catPage.jsx';
import Favorites from './Components/favorites/favor.jsx';
import SearchRes from './Components/browser/searchRes.jsx';


function App() {
  //const dispatch = useDispatch();
  // const searchs =useSelector(state=>state.searchs)
  // const IsAuth = useSelector(selectIsAuth);

  // React.useEffect(()=>{
  //   dispatch(fetchAuthMe());
  // },[])
  // const query = searchData();
  // console.log(query);
  return (
    <div>
      <div>
        <Header />
        
      </div>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/about" element={<Board />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/auth" element={<Login />}></Route>
          <Route path="/reg" element={<Regist/>}></Route>
          <Route path="/me" element={<UserPage/>}></Route>
          <Route path="/search-request" element={<SearchRes />}></Route>
          <Route path="/catalog/:id" element={<CatPage/>}></Route>
          <Route path="/prods/:id" element={<ProdPage/>}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
    
}

export default App;
