import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Alerts from "./pages/Alerts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
