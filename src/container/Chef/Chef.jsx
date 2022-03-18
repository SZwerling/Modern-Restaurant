import React from 'react';
import {images} from '../../constants'
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper__img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef"/>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="chef's word"/>
      <h1 className="headtext__cormorant">what we believe in</h1>
      
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <p className="p__opensans"> consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Lou</p>
        <p className="p__opensans">chef and founder</p>
        <img src={images.sign} alt="signature"/>
      </div>
    </div>
  </div>
);

export default Chef;
