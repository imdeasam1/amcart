import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      return (
      <div>
      <p>"Hello, world!"</p> 
      </div>
      )
    } else {
      setErrorMessage('Incorrect username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;