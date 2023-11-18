import { Route, Routes } from "react-router";
import  Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Menu from "./routes/Menu";
import LegendChoice from "./routes/LegendChoice";
import Contact from "./routes/Contact";
import Account from "./routes/Account";
import Cart from "./routes/Cart";

 export default function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Menu" element={<Menu/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/legendchoice" element={<LegendChoice/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/account" element={<Account/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Navbar/>
      
    </div>
  );
  }
  
 
  
  