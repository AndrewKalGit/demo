import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Landing from './Landing';
import About from './About';
import Catering from './Catering';
import Location from './Location';
import Menu from './Menu';
import './App.css';
// import CalendlyEmbed from './CalendlyEmbed';

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<><Landing></Landing></>}></Route>
        <Route path='/about' element={<><About></About></>}></Route>
        <Route path='/catering' element={<><Catering></Catering></>}></Route>
        <Route path='/menu' element={<><Menu></Menu></>}></Route>
        <Route path='/location' element={<><Location></Location></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;