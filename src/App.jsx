import "./assets/css/app2.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={HomePages} />
          <Route path="/categories/:idc" Component={Details} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
