import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Post Board</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add New Post</Link>
      </div>
    </nav>
  );
};

export default Navbar;
