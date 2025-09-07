import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    localStorage.setItem('username', name);
    navigate('/');
  };

  return (
    <main className="form-section">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </main>
  );
}

export default Register;