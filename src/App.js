import React from "react";
import './App.css';
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
