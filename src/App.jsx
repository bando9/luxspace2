import "./assets/css/app2.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Congratulation from "./pages/Congratulation";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={HomePages} />
          <Route path="/categories/:idc" Component={Details} />
          <Route path="/cart" Component={Cart} />
          <Route path="/congratulation" Component={Congratulation} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
