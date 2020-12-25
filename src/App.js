import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shop from "./components/Shop";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Home />
        <Shop />
        <ContactUs />
        <About />
      </header>
    </div>
  );
}

export default App;
