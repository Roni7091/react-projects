
import './App.css';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Product from './webpages/Product';
import Contact from './webpages/Contact';
import Home from './webpages/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Breakfast from './food/Breakfast';
import Deserts from './food/Deserts';
import Beverages from './food/Beverages';
import Lunch from './food/Lunch';



function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}exact/>
        <Route path="/product" element={<Product/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/breakfast" element={<Breakfast/>} />
        <Route path="/Lunch" element={<Lunch/>} />
        <Route path="/Deserts" element={<Deserts/>} />
        <Route path="/Beverages" element={<Beverages/>} />
      </Routes>

      <Footer/>
    </Router>
    </div>
  );
}

export default App;
