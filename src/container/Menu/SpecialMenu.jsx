import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';
console.log(data.wines)
const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title={"menu that fits your palatte"}/>
      <h1 className="headtext__cormorant">today's special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex_center">
        <p className="app__specialMenu_menu_heading">wine & beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => {
            return <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          })}
        </div>
      </div>

      <div className="app__specialMenu-img_img">
        <img src={images.menu} alt="cocktail shaker"/>
      </div>

      <div className="app__specialMenu-menu_cocktails flex_center">
        <p className="app__specialMenu_menu_heading">cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => {
            return <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          })}
        </div>
      </div>
    </div>
    <div style={{ marginTop: '15px'}}>
    <button type="button" className="custom__button">view more</button>
    </div>
    
  </div>
);

export default SpecialMenu;
