import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import TourList from "./components/tourList/tourList";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <TourList />
      </div>
    );
  }
}

export default App;
