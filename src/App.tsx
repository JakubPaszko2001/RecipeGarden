import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LoginRegister from "./components/LoginRegister";
import { auth } from "./config/firebase";
import HeroSection from "./components/HeroSection";
import fetchCategory from "./config/axios";

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="App font-main flex flex-col">
      {currentUser ? <Navbar /> : <LoginRegister />}
      {currentUser ? <HeroSection /> : null}
    </div>
  );
}

export default App;
