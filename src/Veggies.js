import { Link } from "react-router-dom";

const Veggies = () => {
  return (
    <>
      <h1>Semi-fresh but healthy Veggies!</h1>
      <ul>
          <li>Celery</li>
          <li>Broccoli</li>
          <li>Cucumber</li>
          <li>Lettuce</li>
      </ul>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </>
  );
};

export default Veggies;
