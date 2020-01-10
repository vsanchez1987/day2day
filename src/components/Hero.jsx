import React from "react";
import "./Hero.css";
import youGotIt from "../assets/you-got-it.jpg";

const Hero = () => {
  return (
    <div className="hero-wrapper ui equal width grid">
      <div className="six huge column">
        <img className="ui fluid image" src={youGotIt} alt="placeholder" />
      </div>
      <div className="six wide column">
        <div className="header-wrapper">
          <h1>Success Starts with a design book</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            malesuada vulputate lectus, a gravida arcu condimentum ut. Maecenas
            et risus vitae sapien maximus tempor eu vitae sem. Vestibulum et
            eros iaculis nibh aliquam congue sit amet id orci. Suspendisse eu
            varius dolor. Maecenas mollis at metus id molestie. Ut leo diam,
            eleifend ut malesuada ut, congue et arcu. Nullam maximus augue et
            ultricies eleifend. Cras quis ullamcorper purus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            volutpat turpis vitae pellentesque maximus.
          </p>
          <button className="ui primary button">Click here to start</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
