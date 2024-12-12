import React, { useEffect, useState } from "react";
import bg1 from "./image/Bg-1.png";
import bg2 from "./image/Bg-2.png";
import bg3 from "./image/Bg-3.png";
import sec1 from "./image/Section1.png";
import sec2 from "./image/Section.png";
import emogy from "./image/emogy.png";
import actipace_a from "./image/actipace-a.png";
import List from "./List.jpg";
import axios from "axios";
import { categories } from "../../services/Api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { buycourse } from "../../services/FeaturePayment";

function Price() {

    const {token} = useSelector((state)=>(state.auth));
    const navigate  = useNavigate();

    const [LiteD,SetLiteD] = useState(1);
    const [LiteY,SetLiteY] = useState(1);
    const [TotalD,SetTotalD] = useState(1);
    const [TotalY,SetTotalY] = useState(1);
    const [InterD,SetInterD] = useState(1);
    const [InterY,SetInterY] = useState(1);
    const [amountA,setamountA] = useState()
    const [amountB,setamountB] = useState()
    const [amountC,setamountC] = useState()
    useEffect(()=>{
      const data = {
        device:LiteD,
        year:LiteY,
        id:3
      }
      const amountfetch = async ()=>{
        try{
        const amount = await axios.post(categories.GETPLAN_API,data)
        setamountA(amount.data.amount.price)
        }catch(e){
          console.log(e);
        }
      }
      amountfetch();

    },[LiteD,LiteY]);

    useEffect(()=>{
      const data = {
        device:TotalD,
        year:TotalY,
        id:1
      }
      const amountfetch = async ()=>{
        try{
        const amount = await axios.post(categories.GETPLAN_API,data)
        setamountB(amount.data.amount.price)
        }catch(e){
          console.log(e);
        }
      }
      amountfetch();
      
    },[TotalD,TotalY]);

    useEffect(()=>{
      const data = {
        device:InterD,
        year:InterY,
        id:2
      }
      const amountfetch = async ()=>{
        try{
        const amount = await axios.post(categories.GETPLAN_API,data)
        setamountC(amount.data.amount.price)
        }catch(e){
          console.log(e);
        }
      }
      amountfetch();
      
    },[InterD,InterY]);


    const handleBuyA = async()=>{

      if(!token){
          toast.error("you are not LoggedIn")
          navigate("/login");
      }
      
      const data = {
        device:TotalD,
        year:TotalY,
        id:1,
        token:localStorage.getItem("token")
      }
      console.log("price page",data.token);
      buycourse(data,token);
    }


    const handleBuyB = async(e)=>{
      e.preventdefault();

      if(!token){
          toast.error("you are not LoggedIn")
          navigate("/login");
      }


    }
    const handleBuyC = async(e)=>{
      e.preventdefault();

      if(!token){
          toast.error("you are not LoggedIn")
          navigate("/login");
      }


    }




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
            <div className="h-10 text-[50px] mt-[20px] mb-[50px] justify-center flex text-[#31BF5C]">{amountB} ₹</div>

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
                <button className="w-[305px] h-[55px] bg-[#31BF5C] rounded-sm text-white" onClick={handleBuyA}>BUY NOW</button>
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
            <div className="h-10 text-[50px] mt-[20px] mb-[50px] justify-center flex text-[#31BF5C]">{amountC} ₹</div>

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
                <button className="w-[305px] h-[55px] bg-[#31BF5C] rounded-sm text-white" onClick={handleBuyB}>BUY NOW</button>
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
            <div className="h-10 text-[50px] mt-[20px] mb-[50px] justify-center flex text-[#31BF5C]">{amountA} ₹</div>

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
                  <option value="1" >1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            
            
            </div>
            <div className="w-ful  flex justify-center items-center mt-[30px]">
                <button className="w-[305px] h-[55px] bg-[#31BF5C] rounded-sm text-white" onClick={handleBuyC}>BUY NOW</button>
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
