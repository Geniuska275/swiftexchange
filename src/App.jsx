import Navbar from "./components/navbar"
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Homepage from "./pages/homepage";
import Cryptocurrency from "./pages/cryptocurrency";
import AboutUs from "./pages/AboutUs";
import Giftcards from "./pages/Giftcards";
import NewHeader from "./components/NewHeader";

function App() {
  return (
    <Router>
    {/* <Navbar /> */}
    <NewHeader/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route
        path="/Cryptocurrency"
        element={<Cryptocurrency/>}
        />
        <Route
        path="/gift-cards"
        element={<Giftcards/>}
        />
    </Routes>
  
  </Router>

   
  )
}

export default App
