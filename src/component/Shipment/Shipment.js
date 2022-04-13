import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const[user]=useAuthState(auth)
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[address,setAddress]=useState()
    const[phone,setPhone]=useState()
    const handleName=e=>{
        setName(e.target.value)
    }
    const handleAddress=(e)=>{
        setAddress(e.target.value)
    }
    const handlePhone=(e)=>{
        setPhone(e.target.value)
    }
    const handleAddShipping=e=>{
        e.preventDefault();
        let shipping={name,email,address,phone}
        console.log(shipping)
    }
    return (
    <div className="form-container">
        <div>
            <h2 className="login-title">Shipping Information</h2>
            <form onSubmit={handleAddShipping}>
                <div className="input-group">
                    <label htmlFor="">Your Name</label>
                    <input onBlur={handleName} type="name" name="name" id="" required/>
                </div>
                <div className="input-group">
                    <label htmlFor="">Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id="" required/>
                </div>

            <div className="input-group">
                <label htmlFor="">Address</label>
                <input onBlur={handleAddress} type="text" name="address" id="" required/>
            </div>

            <div className="input-group">
                <label htmlFor="">Phone number</label>
                <input onBlur={handlePhone} type="text" name="phone" id="" required/>
            </div>
            <input className="btn" type="submit" value="Add Shipping" />
            </form>

        </div>
    </div>
    );
};

export default Shipment;