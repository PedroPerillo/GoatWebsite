import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Payment from './pages/Payment';
import About from './pages/About';
import Contact from './pages/Contact';

export default function StripeApp () {
  return (

      <div className='App'>

          <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="Payment" element={<Payment/>} />
                <Route path="Contact" element={<Contact/>} />
            </Routes>
          </BrowserRouter>

      </div>
  );
}


