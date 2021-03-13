import { Link } from "react-router-dom";

const Snacks = () => {
  return (
    <div>
      <h1>Only the highest calorie snacks!</h1>
      <ul>
          <li>Cheetos</li>
          <li>Doritos</li>
          <li>Corndog</li>
          <li>Reeses</li>
      </ul>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default Snacks;
