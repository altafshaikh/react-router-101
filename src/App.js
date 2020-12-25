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
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/about" component={About} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
