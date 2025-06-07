import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
