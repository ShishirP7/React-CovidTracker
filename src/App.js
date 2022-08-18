import LandingPage from "./Assets/Pages/LandingPage";

import { Routes, Route } from "react-router-dom";
import Precaution from "./Assets/Pages/Precaution/Precaution";
import News from "./Assets/Pages/News/News";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Precaution" element={<Precaution />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
