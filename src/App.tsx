import React, { useEffect, useState } from "react";
import { auth } from "./config/firebase";
import LoginRegister from "./Pages/LoginRegister";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CategoryPage from "./Pages/CategoryPage";
import DishDetailPage from "./Pages/DishDetailPage";
import Loading from "./components/Loading";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
  }, []);

  if (currentUser) {
    // console.log(currentUser);
  }

  if (isLoading) {
    return <Loading />;
  }

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
                element={<DishDetailPage currentUser={currentUser} />}
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
