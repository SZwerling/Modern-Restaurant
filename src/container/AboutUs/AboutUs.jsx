import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
   <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
   >
      <div className="app__aboutus-overlay flex__center">
         <img src={images.G} alt="letter g" />
      </div>

      <div className="app__aboutus-content flex__center">
         <div className="app__aboutus-content_about">
            <h1 className="headtext__cormorant">about us</h1>
            <img src={images.spoon} alt="spoon" className="spoon__img" />
            <p className="p__opensans">
               Aliquam erat ante, eleifend efficitur ipsum a, pharetra lobortis
               nunc. Morbi ac ornare neque. Etiam blandit mi libero, vel
               placerat nisi iaculis vitae. Aliquam luctus odio eu nisl faucibus
               tincidunt. Cras in dolor et risus mollis consequat. Maecenas a mi
               fringilla, tempus enim nec, viverra eros. Etiam vestibulum, nisl
               sed volutpat tristique, est tortor porta nunc, et pellentesque
               est libero a libero
            </p>
            <button type="button" className="custom__button">
               know more
            </button>
         </div>

         <div className="app__aboutus-content_knife flex__center">
            <img src={images.knife} alt="knife" />
         </div>

         <div className="app__aboutus-content_history">
            <h1 className="headtext__cormorant">our history</h1>
            <img src={images.spoon} alt="spoon" className="spoon__img" />
            <p className="p__opensans">
               Aliquam erat ante, eleifend efficitur ipsum a, pharetra lobortis
               nunc. Morbi ac ornare neque. Etiam blandit mi libero, vel
               placerat nisi iaculis vitae. Aliquam luctus odio eu nisl faucibus
               tincidunt. Cras in dolor et risus mollis consequat. Maecenas a mi
               fringilla, tempus enim nec, viverra eros. Etiam vestibulum, nisl
               sed volutpat tristique, est tortor porta nunc, et pellentesque
               est libero a libero
            </p>
            <button type="button" className="custom__button">
               know more
            </button>
         </div>
      </div>
   </div>
);

export default AboutUs;
