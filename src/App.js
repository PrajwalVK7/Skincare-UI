import Home from './pages/Home'
import MenuBar from './components/Header/MenuBar'
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
function App() {
  return (
    <div>
      <Header/>
      <MenuBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
