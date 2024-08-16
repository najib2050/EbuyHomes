// import Container froimportm "react-bootstrap/Container";
import { useState } from "react";
import "./header.css";
import "bootstrap-icons/font/bootstrap-icons.css"


function Header() {
  const [toggle, setToggle]=useState(true)
  const [toggleIcons, setToggleIcons]=useState(true)

  const handleClick=()=>{
    console.log(setToggle(!toggle))
    setToggle(!toggle)
  }
  const handleIcons=()=>{
    setToggleIcons(!toggleIcons)
  }
  return (
    <div className="container-fluid">
      <div className="media">
        <div className="email-location">
          <div className="email">
            <p><i className="bi bi-envelope-at-fill" style={{color:"#F2AA9E"}}></i>
            email@gmail.com
              
            </p>
            </div>
          <div className="location">
            <p><i className="bi bi-geo-alt-fill" style={{color:"#F2AA9E"}}></i>
            Africa,Nairobi,Kenya

            </p>
            </div>
        </div>
        <div className="soctialMedia">
          <div id="icons" className={toggleIcons ? "#icons active" :"#icons"}>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-whatsapp"></i>
          <i className="bi bi-instagram"></i>
          </div>
          <div className="btn">
            <button >Add listing</button>
          </div>
        </div>
        <div onClick={handleIcons} className="toggleIcon">
         {toggleIcons ? <i className="bi bi-list"/>: <i className="bi bi-x"/>}
        </div>
      </div>
      <header className="hearderMain">
        <div className="headerLogo">
        <span style={{color:"red", margin:"10px"}} ><i className="bi bi-house-fill"style={{color:"#F2AA9E"}}></i></span>
          Querter
        </div>
        <nav id="headerNaveBar" className={toggle ? "#headerNaveBar  active": "#headerNaveBar"}>
          <ul>
            <li>Home+</li>
            <li>About+</li>
            <li>News+</li>
            <li>pages+</li>
            <li>contact+</li>
          </ul>
        </nav>
        <div className="headerSearch">
          <span><i className="bi bi-search"></i></span>
          <span><i className="bi bi-person"></i></span>
          <span><i className="bi bi-cart2"></i><sup>2</sup></span>
        </div>
        <div onClick={handleClick} className="toggle">
         {toggle ? <i className="bi bi-list"/>: <i className="bi bi-x"/>}
        </div>
      </header>
    </div>
  );
}

export default Header;
