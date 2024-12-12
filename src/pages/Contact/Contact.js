import React, { useState } from "react";
import Contact2 from "./Contact2";
import Form1 from "./Form1";
// import emogy from "./image/emogy.png";

const Contact = () => {
  return (
    <div className=" flex justify-evenly items-center">
      <div className="my-10 ">
        <Contact2 />
      </div>
      <div className="absolute ">
        <Form1 />
      </div>
    </div>
  );
};

export default Contact;
