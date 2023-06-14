import React from 'react';
import "../Styles/Header.scss";

const Header = () => {
  return (
    <nav>
      <NavContent/>
    </nav>
  )
};

const NavContent=()=>{
    return(
<>
<h2>Shaikh Atif. </h2>
<div>
    <a href="#home">Home</a>
    <a href="#word">Word</a>
    <a href="#timeline">Experience</a>
    <a href="#services">services</a>
    <a href="#testimonial">Testimonial</a>
    <a href="#contact">Contact</a>
</div>
<a href="mailto:shaikhatif456a@gmail.com">
    <button>Email</button>
</a>
</>
    )
}

export default Header
