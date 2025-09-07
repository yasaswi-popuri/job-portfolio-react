import { Link } from 'react-router-dom';

function Home() {
  const username = localStorage.getItem('username') || 'Guest';

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Job</h1>
          <p>Search thousands of jobs from top companies</p>
          <div className="search-bar">
            <input type="text" placeholder="Search job titles or keywords..." />
            <Link to="/jobs"><button>Explore Jobs</button></Link>
          </div>
          <p className="welcome-msg">Welcome, <span>{username}</span>!</p>
        </div>
      </section>
    </main>
  );
}

export default Home;