
import React, { useState, useEffect } from 'react';
import '../App.css';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from "../utils/mutations";
import Auth from '../utils/Auth';

const LoginForm = () => {
    const [ formState, setFormState] = useState({
        username:'',
        email:'',
        password:''
    });
    const [ loginState, setLoginState] = useState({
        login:'true',
        email:'',
        password:'' 
    });

    
    const [loginUser] = useMutation(LOGIN_USER);
    const [signUpUser] = useMutation(ADD_USER);


    useEffect(() =>
    {
        console.log(formState)
    }, [formState])
    useEffect(() =>
    {
        console.log(loginState)
    }, [loginState])
    

    const handleSignUp = async (e) => {
        e.preventDefault();
        console.log("signup:",formState)
        try {
            const { data } =
            await signUpUser({
                variables: {
                    ...formState
                }
            })
            setFormState({ username:"", email:"", password:""})
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("login:",loginState)
        try {
            const { data } =
        await loginUser({
            variables: {
                ...loginState
            }
        })
        Auth.login(data.login.token);
        console.log(data)
        document.location.replace("/game")
    } catch (e) {
        console.log(e)
    }
    }

    return (
        <div className='App'>
        <div className='App-header'>
        <div className='loginbox'>
        <form onSubmit={handleSignUp}>
        <div className='boxclass'>
        <label>
            Username:
            <input type="username" value={formState.username}
            onChange={(e) => setFormState({ ...formState, username: e.target.value})} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={formState.email} 
          onChange={(e) => setFormState({ ...formState, email: e.target.value})} />
        </label>
        <br />
        <label>
            Password:
            <input type="password" value={formState.password} 
            onChange={(e) => setFormState({...formState, password: e.target.value})} />
        </label>
        <br />
        <button type="submit">Sign up</button>
        </div>
        </form>

        <div className='boxclass'>
        <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={loginState.email} 
          onChange={(e) => setLoginState({ ...loginState, email: e.target.value})} />
        </label>
        <br />
        <label>
            Password:
            <input type="password" value={loginState.password} 
            onChange={(e) => setLoginState({ ...loginState, password: e.target.value})} />
        </label>
        <br />
        <button type="submit">Log in</button>
        </form> 
        </div>
        </div>
        </div>
        </div>
        
    )
}

export default LoginForm;