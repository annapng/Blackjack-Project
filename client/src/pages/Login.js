import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Email: ${email}, Password: ${password}, isSignup: ${isSignUp}`);

    };

    return (
        <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <label>
            Sign up!
            <input type="checkbox" checked={isSignUp} onChange={(e) => setIsSignUp(e.target.value)} />
        </label>
        <br />
        <button type="submit">{isSignUp ? 'Sign up' : 'Log in'}</button>
        </form>
    )
}

export default LoginForm