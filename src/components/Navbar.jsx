import { Link } from 'react-router-dom';

function Navbar() {
  const username = localStorage.getItem('username');
  const handleLogout = () => {
    localStorage.removeItem('username');
    window.location.href = '/login';
  };

  return (
    <nav className="navbar">
      <div className="logo">Job Portfolio</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/companies">Companies</Link></li>
        {!username && <li><Link to="/login">Login</Link></li>}
        {!username && <li><Link to="/register">Register</Link></li>}
        {username && <li><button onClick={handleLogout}>Logout</button></li>}
      </ul>
    </nav>
  );
}

export default Navbar;