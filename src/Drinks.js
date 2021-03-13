import { Link } from "react-router-dom";
import './Drinks.css'

const Drinks = () => {
  return (
    <div>
      <h1>Drink Up!</h1>
      <ul>
          <li>Coke</li>
          <li>Pepsi</li>
          <li>Water</li>
          <li>Grapefruit Juice</li>
      </ul>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default Drinks;
