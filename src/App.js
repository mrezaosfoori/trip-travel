import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "../src/pages/Hero";
import Pasanger from "../src/pages/Pasanger";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/passngers" element={<Pasanger />} />

      {/* Catch-all route for 404 */}
    </Routes>
  );
}

export default App;
