import { Switch, Route } from "react-router-dom";
import Add from "./Pages/Add";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import ContactList from "./components/ContactList";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contacts" component={ContactList} />
        <Route path={["/Add", "/edit"]} component={Add} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
