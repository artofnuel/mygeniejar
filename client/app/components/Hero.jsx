import React from "react";
import "../globals.css";

const Hero = () => {
  return (
    <div class="col-gap">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((images) => (
        <img
          src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
          alt="/"
        />
      ))}
    </div>
  );
};

export default Hero;
