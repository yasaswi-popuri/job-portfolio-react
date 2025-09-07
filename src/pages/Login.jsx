import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const username = email.split('@')[0];
    localStorage.setItem('username', username);
    navigate('/');
  };

  return (
    <main className="form-section">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}

export default Login;