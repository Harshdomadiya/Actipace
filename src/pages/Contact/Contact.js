import React  from "react";
import Contact2 from "./Contact2";
import Form1 from "./Form1";
import acti from "../home/image/actipace-a.png"
// import emogy from "./image/emogy.png";

const Contact = () => {
  return (
    <div>
      <img src={acti} alt="" className="absolute w-[260px] h-[350px] mb-[50px] ml-[1257px] z-10"/>
      <div className="w-full h-full flex justify-center gap-20 items-center my-3 relative">
        
        <div className="">
          <Contact2 />
        </div>
        <div className="">
          <Form1 />
        </div>
      </div>
      <div className="relative">
                <iframe
                    title="Map"
                    src="https://maps.google.com/maps?q=Surat%20India&t=&z=10&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-[400px] md:h-[450px]"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
      </div>
    </div>
  );
};

export default Contact;