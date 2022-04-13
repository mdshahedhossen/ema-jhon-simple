import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate=useNavigate();
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";

    const handleEmial=(e)=>{
      setEmail(e.target.value)
  }

  const handlePassword=e=>{
      setPassword(e.target.value)
  }
  if(user){
    navigate(from,{ replace: true })
  }

  const handleLoginUser=e=>{
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
  }

  return (
    <div className="form-container">
      <div>
        <h2 className="login-title">Login</h2>
        <form action="">
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input onBlur={ handleEmial} type="email" name="email" id="" required/>
          </div>

          <div className="input-group">
            <label htmlFor="">Password</label>
            <input onBlur={handlePassword} type="password" name="password" id="" required/>
          </div>
          <p style={{color:'red'}}>{error?.message}</p>
          {
            loading && <p>Loading...</p>
          }
          <input onClick={handleLoginUser} className="btn" type="submit" value="Login" />
        </form>
        <p>
            New to Ema-Jhon? <Link className="from-link" to='/signup'>Create New Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
