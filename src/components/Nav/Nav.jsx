import React, { useState } from 'react'
import './Nav.css'
import { Link, useNavigate } from 'react-router-dom';
function Nav() {
  const [img, setImg] = useState('/gama_audios/menu.svg');
  const changeImg = () => {
    setImg((currentImg) => {
      if (currentImg == "/gama_audios/menu.svg") {
        setStyle(0);
        return "/gama_audios/cross.svg";
      }
      else {
        setStyle("-100%");
        return "/gama_audios/menu.svg";
      }
    }
    );
  };

  const [style, setStyle] = useState("-100%");
  const menuStyles = {
    right: style,
  }


  return (
    <>
      <div className='main-nav-area'>
        <div className="img-area"><img src="/gama_audios/logo.svg" alt="logo" /><h1>Gama Audios</h1></div>
        <ul className='desktop-ul'>
          <li><Link to={"/gama_audios/"} style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
          <li><Link to={"/gama_audios/about"} style={{ color: "white", textDecoration: "none" }}>About</Link> </li>
          <li><Link to={"/gama_audios/blogs"} style={{ color: "white", textDecoration: "none" }}>Blogs</Link> </li>
          <li><Link to={"/gama_audios/contacts"} style={{ color: "white", textDecoration: "none" }}>Contacts</Link> </li>
        </ul>
        <button className='menu-btn' onClick={changeImg} >
          <img src={img} alt="menu" />
        </button>
      </div>
      <div className="menu-area" style={menuStyles}>
        <ul className='android-ul'>
          <li><Link to={"/gama_audios/"} style={{ color: "black", textDecoration: "none" }}>Home</Link></li>
          <li><Link to={"/gama_audios/about"} style={{ color: "black", textDecoration: "none" }}>About</Link> </li>
          <li><Link to={"/gama_audios/blogs"} style={{ color: "black", textDecoration: "none" }}>Blogs</Link> </li>
          <li><Link to={"/gama_audios/contacts"} style={{ color: "black", textDecoration: "none" }}>Contacts</Link> </li>
        </ul>
      </div >
    </>
  );
}

export default Nav
