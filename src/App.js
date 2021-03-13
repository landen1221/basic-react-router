import { BrowserRouter, Route, Link } from "react-router-dom";
import VendingMaching from "./VendingMachine";
import "./App.css";
import Drinks from "./Drinks";
import Snacks from "./Snacks";
import Veggies from "./Veggies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Route exact path="/">
          <VendingMaching />
        </Route>
        <Route exact path="/drinks">
          <Drinks />
        </Route>
        <Route exact path="/snacks">
          <Snacks />
        </Route>
        <Route exact path="/veggies">
          <Veggies />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
