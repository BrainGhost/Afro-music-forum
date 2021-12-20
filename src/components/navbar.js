import { Link } from "react-router-dom";
import { BellIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Afro Music Forum</h1>
      <div className="sublinks">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/create">New upload</Link>
        <Link to="/contact">About</Link>
        <Link to="/notification">
          <BellIcon
            style={{
              height: "20px",
              width: "20px",
            }}
          />
        </Link>
        <a
          href="/login"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "5px",
            padding: "10px 20px",
          }}
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
