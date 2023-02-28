import React, { useRef } from "react";
import "./User.css"

const User = ({ setUsername }) => {
    const user = useRef();
    const handleclick = () => {
        user.current.value && setUsername(user.current.value);
    };
  return (
    <div className="login">
      <input
      className="input"
        placeholder="Enter your name"
        ref={user}
        
      />
      <button className="btn" onClick={handleclick}>Start</button>
    </div>
  );
};

export default User;
