import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Register from "./pages/register";
import Login from "./pages/login";
import Home  from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
