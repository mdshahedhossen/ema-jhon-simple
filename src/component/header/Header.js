import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handelSignout=()=>{
      signOut(auth)
  }
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/inventoris">Inventory</Link>
        <Link to="/about">About</Link>
        {user ? <Link onClick={handelSignout} to="/login">Signout</Link> : <Link to="/login">Login</Link>}
      </div>
    </nav>
  );
};

export default Header;
