import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Cart from "./Cart";
import Home from "./Home";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
        <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        
        </Switch>
      </Router>
    </>
  );
}

export default App;
