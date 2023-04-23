import React, { useEffect, useState } from "react";
import { auth } from "./config/firebase";
import LoginRegister from "./Pages/LoginRegister";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CategoryPage from "./Pages/CategoryPage";

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <div className="App font-main flex flex-col">
      {/* {currentUser ? <Home /> : <LoginRegister />} */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
