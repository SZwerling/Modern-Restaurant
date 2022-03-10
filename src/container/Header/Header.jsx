import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
   <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
         <SubHeading title={"chase the new flavor"}/>
         <h1 className="app__header-h1">the key to fine dining</h1>
         <p className="p__opensans" style={{ margin: '2rem 0'}}>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
         <button type="button" className="custom__button">explore menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header image"/>
        </div>
   </div>
);

export default Header;
