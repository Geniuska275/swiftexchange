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

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route
        path="/Cryptocurrency"
        element={<Cryptocurrency/>}
        />
        <Route
        path="/AboutUs"
        element={<AboutUs/>}
        />
        <Route
        path="/GiftCards"
        element={<Giftcards/>}
        />
    </Routes>
  
  </Router>

   
  )
}

export default App
