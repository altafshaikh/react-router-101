import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shop from "./components/Shop";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Route path="/">
            <Home />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </header>
      </div>
    </Router>
  );
}

export default App;
