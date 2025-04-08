import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "../src/pages/Hero";
import Pasanger from "../src/pages/Pasanger";
import Drives from "../src/pages/Drives";
import HomeLayout from "./components/HomeLayout";

function App() {
  return (
    <Routes>
     <Route element={<HomeLayout />} >
       <Route path="/" element={<HeroPage />} />
       <Route path="/passngers" element={<Pasanger />} />
      
     </Route >
     <Route path="/drives" element={<Drives />} />

      {/* Catch-all route for 404 */}
    </Routes>
  );
}

export default App;
