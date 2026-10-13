import React from "react";
import { useEffect } from "react";

const About = () => {
  let interval = setInterval(() => {
    console.log("me About se hu");
  }, 1000);

  useEffect(() => {
    console.log("About rendering ");

    // only use when your Components leaks some Memory
    // and if you want to track any Updates
    return () => {
      clearInterval(interval);
      console.log(
        "i remove all the component or property of About beause the About is Unmounted from the App",
      );
    };
  }, []);

  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;
