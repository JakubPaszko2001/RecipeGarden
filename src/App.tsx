import React, { useEffect, useState } from "react";
import { auth } from "./config/firebase";
import LoginRegister from "./Pages/LoginRegister";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CategoryPage from "./Pages/CategoryPage";
import DishDetailPage from "./Pages/DishDetailPage";

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <div className="App font-main flex flex-col">
      <Router>
        <Routes>
          {currentUser ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route
                path="/category/:category/:dishId"
                element={<DishDetailPage />}
              />
            </>
          ) : (
            <Route path="/" element={<LoginRegister />} />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
