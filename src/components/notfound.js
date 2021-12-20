import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Sorry ...</h1>
      <div>404</div>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
};

export default NotFound;
