import React from "react";
import Image from "next/image";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/9/92/Chitti_%28character%29.jpg"
          alt="Chitti profile picture"
          width={300}
          height={300}
        />
      </div>
      <h4>Hello, i am a robot. Speed=1Th Memory=1Zb</h4>
      {/* Image */}
      {/* Bio */}
      <p>Let&apos; us talk Tech!</p>
    </section>
  );
};

export default Hero;
