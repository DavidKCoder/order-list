import React from "react";
import NavigationBar from "./NavBar";
import SplashScreenContent from "./SplashScreenContent";
import MenuContent from "./MenuContent";

function App() {
  return (
      <div className="App">
        <NavigationBar />
        <SplashScreenContent />
        <MenuContent />
      </div>
  );
}

export default App;