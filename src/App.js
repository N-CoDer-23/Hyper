import './App.css';
import AdverMouse from './components/advertising/AdverMouse';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ShowKeyboard from './components/show-keyboard/ShowKeyboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // BrowserRouter import qilingan
import SingleRoute from './router/single/SingleRoute';
import Hom from './router/home/Hom';
import NavbarBanner from './components/navbar/NavbarBanner';

function App() {
  return (
    <Router> {/* Router komponentini App komponentiga qo'shing */}
      <div className="App">
        <Navbar/>
        <NavbarBanner/>
        <Routes>
          <Route path='/' element={<Hom/>}/>
          <Route path='/product/:id' element={<SingleRoute/>}/>
        </Routes>
        <AdverMouse/>
        <ShowKeyboard/>
        <Blog/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
