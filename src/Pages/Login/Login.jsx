import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/FakeAuthContext';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Buttons/Button';
import styles from '../Login/Login.module.css';

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('john@worldtracker.com');
  const [password, setPassword] = useState('1234John');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate('/app', { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <main className={styles.login}>
      <Logo />

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}