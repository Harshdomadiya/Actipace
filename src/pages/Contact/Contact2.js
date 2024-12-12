import React from "react";
import address from "./image/address.png";
import contact from "./image/contact.png";
import email from "./image/email.png";
import Group72 from "./image/Group72.png";
import number1 from "./image/number.png";
import share from "./image/share.png";
import text from "./image/text.png";
import vector from "./image/Vector.png";
function Contact2() {
  return (
    <div className="">
      <div className="-mx-80">
        <img src={vector} className="absolute -my-2"></img>
        <img src={contact} className=""></img>
      </div>
      <h6 className="text-xs -mx-60">
        Get in touch and we'll get back to you as soon as we
        <br />
        can. We look forward to hearing from you!
      </h6>
      <div className="-mx-32">
        <div className="w-3/4 h-2/3 -mx-32">
          <img src={number1} className=""></img>
        </div>
        <div className="w-3/4 h-2/3 -my-10 -mx-32">
          <img src={email}></img>
        </div>{" "}
        <div className="w-3/4 h-2/3 -mx-32">
          <img src={address}></img>
        </div>{" "}
        <div className="w-3/4 h-2/3 -my-10 -mx-32">
          <img src={share}></img>
        </div>
        <div className="w-1/2 h-2/3 my-32 ">
          {/* <img src={number1}></img>  */}
        </div>
      </div>
    </div>
  );
}

export default Contact2;
