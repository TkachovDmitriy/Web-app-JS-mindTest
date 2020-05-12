import React from "react";
import Header from "./commponets/header/Header";
import SubmitBtn from "./commponets/buttons/SubmitBtn";
import MainContainer from "./commponets/mainContainer/MainContainer";
import MainCheckCategory from "./commponets/mainCheckCategory/MainCheckCategory";
import Footer from "./commponets/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MainContainer /> */}
      <MainCheckCategory />
      {/* <SubmitBtn /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
