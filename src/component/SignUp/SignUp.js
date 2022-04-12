import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const SignUp = () => {
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[confarmpassword,setConfarmpassword]=useState()
    const[error,setError]=useState()
    const navigate=useNavigate()

    const[createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth)

    const handleEmial=(e)=>{
        setEmail(e.target.value)
    }

    const handlePassword=e=>{
        setPassword(e.target.value)
    }
    const handleConfarmPassword=e=>{
        setConfarmpassword(e.target.value)
    }


    if(user){
      navigate('/shop')
    }

    const handelCreateUser=e=>{
        e.preventDefault();
        if(password!==confarmpassword){
            setError('Your two password not match')
            return;
        }
        if(password.length<6){
          setError('password length not strong')
          return;
        }
        createUserWithEmailAndPassword(email, password)
    }
  return (
    <div className="form-container">
      <div>
        <h2 className="login-title">Sign Up</h2>
        <form onSubmit={handelCreateUser}>
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input onBlur={handleEmial} type="email" name="email" id="" required/>
          </div>

          <div className="input-group">
            <label htmlFor="">Password</label>
            <input onBlur={handlePassword} type="password" name="password" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="">Confirm Password</label>
            <input onBlur={handleConfarmPassword} type="password" name="password" id="" required/>
          </div>
          <p style={{color:'red'}}>{error}</p>
          <input className="btn" type="submit" value="Sign Up" />
        </form>
        <p>
        Already have an account?{" "}  
        <Link className="from-link" to="/login">
             Login?
        </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
