import React from "react";
import Image from "react-bootstrap/Image";
import styles from "./navbar.module.css";

const Navbar = () => {
  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className={`${styles.navbar}`}>
      <div className="fixed-container flex justify-between align-items-center">
        <Image
          src={
            "https://nordfinance.io/wp-content/uploads/2022/02/nord-darkmode-logo.png"
          }
          width="180"
          alt="Bright-Money"
        />
        <button className="btn btn-danger" onClick={clearLocalStorage}>
          Restart App
        </button>
      </div>
    </div>
  );
};

export default Navbar;
