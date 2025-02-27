import "./assets/css/app2.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={HomePages} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
