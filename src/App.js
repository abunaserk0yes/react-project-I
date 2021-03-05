import React from "react";
import './App.css';
import Header from "./component/Header/Header";
import Shop from "./component/Shop/Shop";
import Review from "./component/Review/Review";
import Inventroy from "./component/Inventroy/Inventroy";
import Notfound from "./component/Notfound/Notfound";
import Productdetails from "./component/Productdetails/Productdetails";
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
      <Router>
          <Switch>
              <Route path="/shop">
                  <Shop></Shop>
              </Route>
              <Route path="/review">
                  <Review></Review>
              </Route>
              <Route path="/inventroy">
                  <Inventroy></Inventroy>
              </Route>
              <Route exact path="/">
                  <Shop></Shop>
              </Route>
              <Route path="/product/:productKey">
                  <Productdetails></Productdetails>
              </Route>
              <Route path="*">
                  <Notfound></Notfound>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
