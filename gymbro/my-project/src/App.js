import logo from './logo.svg';
import './App.css';
import  './index.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Payment from './Payment';
1-footer-jeff

import About from './pages/About';
main
import Contact from './Contact';

function App() {
  return (

      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Payment" element={<Payment/>} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
