import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Landing from "./pages/Landing";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todos" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
