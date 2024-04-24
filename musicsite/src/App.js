
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Board from './Components/board.jsx'
import Header from './Components/header.jsx';
import Footer from './Components/footer.jsx';
import Login from './Components/authorization.jsx';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Board />}></Route>
          <Route path="/shops" element={<Board />}></Route>
          <Route path="/delivery" element={<Board />}></Route>
          <Route path="/about" element={<Board />}></Route>
          <Route path="/contacts" element={<Board />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
    
}

export default App;
