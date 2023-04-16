import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LoginRegister from "./components/LoginRegister";
import { auth } from "./config/firebase";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";
import PopularRecipe from "./components/PopularRecipe";

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <div className="App font-main flex flex-col">
      {currentUser ? <Navbar /> : <LoginRegister />}
      {currentUser ? <HeroSection /> : null}
      {currentUser ? <CategorySection /> : null}
      {currentUser ? <PopularRecipe /> : null}
    </div>
  );
}

export default App;
