import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from "./component/Home/Nav";
import MultiImage from "./component/MultiImage/MultiImage";
import Tshirt from "./component/Tshirt/Tshirt";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
       <Nav></Nav>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="/imageUpload">
          <MultiImage></MultiImage>
        </Route>
        <Route path="/tshirt">
          <Tshirt></Tshirt>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
