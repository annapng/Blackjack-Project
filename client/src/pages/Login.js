import React, { useState } from 'react';
import '../App.css';

const LoginForm = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = { username, email, password };

    //     fetch('/signup' , {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data)
    //     })

    //     .then(response => { 
        
    //     })
    //     .catch(error => {

    //     })

    //     console.log(`Email: ${email}, Password: ${password}, isSignup: ${isSignUp}`);

    // };

    // function handleUsernameChange(event) {
    //     setUserName(event.target.value)
    // }

    // function handleEmailChange(event) {
    //     setEmail(event.target.value);
    // }

    // function handlePasswordChange(event) {
    //     setPassword(event.target.value);
    }

    return (
        <div className='App'>
        <div className='App-header'>
        <div className='loginbox'>
        <form onSubmit={handleSubmit}>
        <div className='boxclass'>
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
        </div>

        <div className='boxclass'>
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
            Login!
            <input type="checkbox" checked={isSignUp} onChange={(e) => setIsSignUp(e.target.value)} />
        </label>
        <br />
        <button type="submit">{isSignUp ? 'Sign up' : 'Log in'}</button>
        </form>
        </div>
        </form>
        
        
        </div>
        </div>
        </div>
        
    )
}

export default LoginForm