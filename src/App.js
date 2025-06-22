import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/home";
import { Arch } from "./pages/arch";
import { Gastro } from "./pages/gastro";
import { Cinema } from "./pages/cinema";
import { Auto } from "./pages/auto";
import { Religion } from "./pages/religion";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architecture" element={<Arch />} />
          <Route path="/gastronomie" element={<Gastro />} />
          <Route path="/cinema" element={<Cinema />} />
          <Route path="/automobile" element={<Auto />} />
          <Route path="/religion" element={<Religion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
