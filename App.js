import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import ImageUploadPage from './components/ImageUplodePage';
import Services from './components/Services';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/home' element={<h1 className="text-center pt-5">Home Pages</h1>}></Route> */}
          <Route path="/" exact element={<Home />} />
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/imageuplodepage" element={<ImageUploadPage />} />
          <Route path="/services" element={<Services />} />
          
        </Routes>
        
        <Footer />
        {/* <ImageUploadPage></ImageUploadPage> */}
      </BrowserRouter>

      

    </>
  );
}

export default App;