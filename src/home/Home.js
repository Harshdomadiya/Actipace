import React from "react";
import Navbar from "../Navbar";
import Header1 from "../Header1";
import Section1 from "./Section1";
import Grid from "./Grid";

function Home() {
  return (
    <div className="relative">
      <Section1 />
      <Grid className="relative"/>
    </div>
  );
}

export default Home;
