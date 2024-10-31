import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
      <ul>
         <li><Link className="active" to="/about">About</Link></li>
         <li><Link to="/home">Home</Link></li>
         <li><Link to="/reviews">Leave a Review</Link></li>
         <li style={{float: 'right'}}><Link to="/signup">Sign Up</Link></li>
         <img src="" alt=""></img>
      </ul>
        </div>
    )
}
