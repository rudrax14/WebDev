import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Signup from "./Pages/Signup";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from "react";
import { Routes, Route, } from "react-router-dom";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className=" bg-slate-900 text-white h-screen">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Route path="/dashboard" element={<Dashboard />} />
          </PrivateRoute>
          <Route path="*" element={<NotFound />}
          />

        </Route>
      </Routes>

    </div>
  );
}

export default App;
