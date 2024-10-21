import  { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [showModel,setShowModel] = useState(false);
  return (
    <header className="flex">
      
      <div className="navbar-brand">      
        <span className="navbar-caption-wrap">
          <Link className="navbar-caption text-black display-3" to="">NETWORKM5</Link></span>
      </div>
      <nav>
        <ul className="flex">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Pages</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
        </ul>
      </nav>
    {showModel &&(
        <div className=" fixed">
          <ul className="modal ">
            <li>
              <button className="icon-close" onClick={() => { setShowModel(false) }}/>
            </li>
            <li><Link to="">Home</Link></li>
            <li><Link to="">About</Link></li>
            <li><Link to="">Pages</Link></li>
            <li><Link to="">Blog</Link></li>
            
          </ul>
        </div>  
    )}  
    <button onClick={() => {
        setShowModel(true)
      }} className="menu icon-menu"/>
    </header>
  );
};

export default Header;
