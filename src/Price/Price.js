import React, { useState } from "react";
import bg1 from "./image/Bg-1.png";
import bg2 from "./image/Bg-2.png";
import bg3 from "./image/Bg-3.png";
import sec1 from "./image/Section1.png";
import sec2 from "./image/Section.png";
import emogy from "./image/emogy.png";
import actipace_a from "./image/actipace-a.png";
import List from "./List.jpg";

function Price() {

    const price={
      1:{
        1:"399.47",
        2:"732.64",
        3:"999.17"
      },
      2:{
        1:"732.64",
        2:"1332.34",
        3:"1832.08"
      },
      3:{
          1:"999.17",
          2:"1832.08",
          3:"2331.84"
      },
      5:{
        1:"1199.07",
        2:"2265.20",
        3:"2998.17"
      },
      10:{
        1:"2265.20",
        2:"3331.34",
        3:"4530.40"
      }
    }

    const priceT={
      1:{
        1:"1199.00",
        2:"2199.00",
        3:"2999.00"
      },
      2:{
        1:"2199.00",
        2:"3999.00",
        3:"5499.00"
      },
      3:{
          1:"2999.00",
          2:"5499.00",
          3:"6999.00"
      },
      5:{
        1:"3599.00",
        2:"6799.00",
        3:"8999.00"
      },
      10:{
        1:"6799.00",
        2:"9999.00",
        3:"13598.00"
      }
    }

    const priceI={
      1:{
        1:"798.94",
        2:"1465.27",
        3:"1998.34"
      },
      2:{
        1:"1465.27",
        2:"2664.67",
        3:"3664.17"
      },
      3:{
          1:"1998.34",
          2:"3664.17",
          3:"4663.67"
      },
      5:{
        1:"2398.14",
        2:"4530.40",
        3:"5996.34"
      },
      10:{
        1:"4530.40",
        2:"6662.67",
        3:"9060.80"
      }
    }
    
    const [LiteD,SetLiteD] = useState(1);
    const [LiteY,SetLiteY] = useState(1);
    const [TotalD,SetTotalD] = useState(1);
    const [TotalY,SetTotalY] = useState(1);
    const [InterD,SetInterD] = useState(1);
    const [InterY,SetInterY] = useState(1);

  return (
    <div className="w-full">
      <div className="flex items-center justify-center container mt-[50px]">
        <img src={sec1} className="w-2/3" />
        <img src={actipace_a} alt="" className="w-1/6 absolute ml-[1260px]" />
      </div>


      <div className="w-full h-[800px]  flex justify-center items-center gap-[40px] mt-[20px]">
        <div className="w-[345px] h-[700px] flex flex-col shadow-2xl">
            <div className="bg-[#31BF5C] h-[5px]"></div>
            <div className="text-[24px] mt-[15px] ml-[15px] font-bold">Total Security</div>
            <div className="h-10 text-[50px] mt-[20px] mb-[50px] justify-center flex text-[#31BF5C]">{priceT[TotalD][TotalY]} ₹</div>

            <div className="flex justify-center items-center gap-10">
              <div className="flex gap-[5px]">
                <label for="DeviceL" className="text-[15px] font-semibold">Device :</label>

                <select name="DeviceL" id="DeviceL" className=" border-[2px] border-[#31BF5C] text-[15px] rounded-sm" value={TotalD} onChange={(event) => SetTotalD(event.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div  className="flex gap-[5px]">
                <label for="Year" className="text-[15px] font-semibold">Year :</label>

                <select name="Year" id="Year" className=" border-[2px] border-[#31BF5C] text-[15px] rounded-sm" value={TotalY} onChange={(event) => SetTotalY(event.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            
            
            </div>
            <div className="w-ful  flex justify-center items-center mt-[30px]">
                <button className="w-[305px] h-[55px] bg-[#31BF5C] rounded-sm text-white">BUY NOW</button>
            </div>
            <div className="text-[12px] flex flex-col ml-[20px] mt-[30px] gap-[5px] font-[200px]">
              <p>✔ Real Time Protection</p>
              <p>✔ Ransomware Protection</p>
              <p>✔ USB Protection</p>
              <p>✔ Temp Files Cleaner</p>
              <p>✔ Website Blocker</p>
              <p>✔ Webcam Protection</p>
              <p>✔ Advertise Blocker (Phishing and Malicious
                   Website</p>
              <p className="ml-[20px]">Protection)</p>
              <p>✔ Privacy Cleaner</p>
              <p>✔ Wifi Scanner</p>
              <p>✔ Data Encryption</p>
              <p>✔ Data Recovery</p>
              <p>✔ Backup Manager</p>
              <p>✔ Game Booster</p>
              <p>✔ Registry Cleaner</p>
              <p>✔ Registry Optimizer</p>
            </div>
            
        </div>
        
        
        <div className="w-[345px] h-[700px] flex flex-col shadow-2xl">
            <div className="bg-[#31BF5C] h-[5px]"></div>
            <div className="text-[24px] mt-[15px] ml-[15px] font-bold">Internet Security</div>
            <div className="h-10 text-[50px] mt-[20px] mb-[50px] justify-center flex text-[#31BF5C]">{priceI[InterD][InterY]} ₹</div>

            <div className="flex justify-center items-center gap-10">
              <div className="flex gap-[5px]">
                <label for="DeviceL" className="text-[15px] font-semibold">Device :</label>

                <select name="DeviceL" id="DeviceL" className=" border-[2px] border-[#31BF5C] text-[15px] rounded-sm" value={InterD} onChange={(event) => SetInterD(event.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div  className="flex gap-[5px]">
                <label for="Year" className="text-[15px] font-semibold">Year :</label>

                <select name="Year" id="Year" className=" border-[2px] border-[#31BF5C] text-[15px] rounded-sm" value={InterY} onChange={(event) => SetInterY(event.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            
            
            </div>
            <div className="w-ful  flex justify-center items-center mt-[30px]">
                <button className="w-[305px] h-[55px] bg-[#31BF5C] rounded-sm text-white">BUY NOW</button>
            </div>
            <div className="text-[12px] flex flex-col ml-[20px] mt-[30px] gap-[5px] font-[200px]">
              <p>✔ Real Time Protection</p>
              <p>✔ Ransomware Protection</p>
              <p>✔ USB Protection</p>
              <p>✔ Temp Files Cleaner</p>
              <p>✔ Website Blocker</p>
              <p>✔ Webcam Protection</p>
              <p>✔ Advertise Blocker (Phishing and Malicious
                   Website</p>
              <p className="ml-[20px]">Protection)</p>
              <p>✔ Privacy Cleaner</p>
              <p>✔ Wifi Scanner</p>
              <p>❌ Data Encryption</p>
              <p>❌ Data Recovery</p>
              <p>❌ Backup Manager</p>
              <p>❌ Game Booster</p>
              <p>❌ Registry Cleaner</p>
              <p>❌ Registry Optimizer</p>
            </div>
            
        </div>
        
        <div className="w-[345px] h-[700px] flex flex-col shadow-2xl">
            <div className="bg-[#31BF5C] h-[5px]"></div>
            <div className="text-[24px] mt-[15px] ml-[15px] font-bold">Basic Defense</div>
            <div className="h-10 text-[50px] mt-[20px] mb-[50px] justify-center flex text-[#31BF5C]">{price[LiteD][LiteY]} ₹</div>

            <div className="flex justify-center items-center gap-10">
              <div className="flex gap-[5px]">
                <label for="DeviceL" className="text-[15px] font-semibold">Device :</label>

                <select name="DeviceL" id="DeviceL" className=" border-[2px] border-[#31BF5C] text-[15px] rounded-sm" value={LiteD} onChange={(event) => SetLiteD(event.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div  className="flex gap-[5px]">
                <label for="Year" className="text-[15px] font-semibold">Year :</label>

                <select name="Year" id="Year" className=" border-[2px] border-[#31BF5C] text-[15px] rounded-sm" value={LiteY} onChange={(event) => SetLiteY(event.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            
            
            </div>
            <div className="w-ful  flex justify-center items-center mt-[30px]">
                <button className="w-[305px] h-[55px] bg-[#31BF5C] rounded-sm text-white">BUY NOW</button>
            </div>
            <div className="text-[12px] flex flex-col ml-[20px] mt-[30px] gap-[5px] font-[200px]">
              <p>✔ Real Time Protection</p>
              <p>✔ Ransomware Protection</p>
              <p>✔ USB Protection</p>
              <p>✔ Temp Files Cleaner</p>
              <p>❌ Website Blocker</p>
              <p>❌ Webcam Protection</p>
              <p>❌ Advertise Blocker (Phishing and Malicious
                   Website</p>
              <p className="ml-[20px]">Protection)</p>
              <p>❌ Privacy Cleaner</p>
              <p>❌ Wifi Scanner</p>
              <p>❌ Data Encryption</p>
              <p>❌ Data Recovery</p>
              <p>❌ Backup Manager</p>
              <p>❌ Game Booster</p>
              <p>❌ Registry Cleaner</p>
              <p>❌ Registry Optimizer</p>
            </div>
            
        </div>
        

      </div>
     
        <image src="D:\web proj\subsriptionapp\Actipace\src\Price" alt="" className="h-[400px] w-[400px]" />
     
      
      {/* <div className="absolute bottom-4 right-4">
        <button className="w-10 h-10 flex items-center justify-center text-white">
          <img src={emogy}></img>
        </button>
      </div> */}
     
    </div>
  );
}

export default Price;
