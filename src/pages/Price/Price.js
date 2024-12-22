import React, { useEffect, useRef, useState } from "react";

import sec1 from "./image/Section1.png";

import actipace_a from "./image/actipace-a.png";
import axios from "axios";
import { categories } from "../../services/Api";
import { useNavigate } from "react-router-dom";

import { buycourse } from "../../services/FeaturePayment";


function Price() {

  // i need token here
    const navigate  = useNavigate();

    const [ft,setft] = useState("");
    const [fI,setfI] = useState("");
    const [fL,setfL] = useState("");

    const [LiteD,SetLiteD] = useState(1);
    const [LiteY,SetLiteY] = useState(1);
    const [TotalD,SetTotalD] = useState(1);
    const [TotalY,SetTotalY] = useState(1);
    const [InterD,SetInterD] = useState(1);
    const [InterY,SetInterY] = useState(1);
    const [amountA,setamountA] = useState()
    const [amountB,setamountB] = useState()
    const [amountC,setamountC] = useState()

    let checkplanA = useRef();
    let checkplanB = useRef();
    let checkplanC = useRef();

    useEffect(()=>{
        
           checkplanA.current = async () =>{
            try{
                const payload = {
                  software_id:1
                }

                const data = await axios.post(categories.CHECKPLAN,payload,{
                                              headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                                              });
                                              //console.log("data",data)
                if (data.data.success) {
                  const expirationTimeInIST = new Date(data.data.response.expiresAt).getTime();
                  //console.log(data.data.response.expiresAt);
                  const IST_OFFSET = 5.5 * 60 * 60 * 1000;  // 5 hours 30 minutes in milliseconds
                  const expirationTimeInUTC = expirationTimeInIST - IST_OFFSET; 
                  //console.log("exp",expirationTimeInUTC)
                  if(data.data.success &&  expirationTimeInUTC > Date.now() )
                  {
                      setft(data.data.response.software.description)
                  }
                  else{
                    setft("");
                  }
                  
                }
              }catch(e){
                
            }
                
          }

          checkplanA.current();
    },[])


    useEffect(()=>{
      
       checkplanB.current = async () =>{
          try{
                const payload = {
                  software_id:2
                }

                const data = await axios.post(categories.CHECKPLAN,payload,{
                                            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                                            });
                  //console.log("data2",data);
                  if (data.data.success) {
                    const expirationTimeInIST = new Date(data.data.response.expiresAt).getTime();

                    const IST_OFFSET = 5.5 * 60 * 60 * 1000;  // 5 hours 30 minutes in milliseconds
                    const expirationTimeInUTC = expirationTimeInIST - IST_OFFSET; 

                  if(data.data.success &&  expirationTimeInUTC > Date.now())
                  {
                      setfI(data.data.response.software.description)
                  }
                  else{
                    setfI("")
                  }
                //toast.error(data.data.message)
              }   
            
          }catch(e){
              //console.log(e);
          }

        checkplanB.current();

      }
  },[])

    useEffect(()=>{
      
        checkplanC.current = async () =>{
          try{
              const payload = {
                software_id:3
              }

              const data = await axios.post(categories.CHECKPLAN,payload,{
                                            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                                            });

              if (data.data.success) {
                const expirationTimeInIST = new Date(data.data.response.expiresAt).getTime();
                //console.log(data.data.response.expiresAt)
                const IST_OFFSET = 5.5 * 60 * 60 * 1000;  // 5 hours 30 minutes in milliseconds
                const expirationTimeInUTC = expirationTimeInIST - IST_OFFSET; 
                //console.log("exp",expirationTimeInUTC)
                if(data.data.success &&  expirationTimeInUTC > Date.now())
                {
                    setfL(data.data.response.software.description)
                }
                else{
                  setfL("");
                }
              }  
            }catch(e){
              //console.log(e);
          }
         
        }

        checkplanC.current();
      
    },[])

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
          //console.log(e);
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
          //console.log(e);
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
          //console.log(e);
        }
      }
      amountfetch();
      
    },[InterD,InterY]);

    const handleBuyA = async()=>{
        const data = {
          device:TotalD,
          year:TotalY,
          id:1,
          //token:localStorage.getItem("token")
        }
        // console.log("price page",data.token);
        await buycourse(data,navigate);
       // window.location.reload();
    }
    const handleBuyB = async(e)=>{
      const data = {
        device:InterD,
        year:InterY,
        id:2,
        //token:localStorage.getItem("token")
      }
      // console.log("price page",data.token);
      await buycourse(data,navigate);
      //window.location.reload();
    }
    const handleBuyC = async(e)=>{
      const data = {
        device:LiteD,
        year:LiteY,
        id:3,
        //token:localStorage.getItem("token")
      }
      // console.log("price page",data.token);
      await buycourse(data,navigate);
      //window.location.reload();
    }


    const handleDT = async(e)=>{
        checkplanA.current();
        if(ft){

        const anchor = document.createElement("a");
        anchor.href=ft;
        anchor.download="file.zip";
        anchor.click();
      } 
    }
    
    const handleDI = async(e)=>{
      checkplanB.current();
      if(fI){
      const anchor = document.createElement("a");
        anchor.href=fI;
        anchor.download="file.zip";
        anchor.click();
      }
    }
    
    const handleDL = async(e)=>{
      checkplanC.current();
      if(fL){

      
        const anchor = document.createElement("a");
        anchor.href=fL;
        anchor.download="file.zip";
        anchor.click();
      }
    }


  return (
    <div className="w-full">
      <div className="flex items-center justify-center container mt-[50px]">
        <img src={sec1} alt="" className="w-2/3" />
        <img src={actipace_a} alt="" className="w-1/6 absolute ml-[1260px]" />
      </div>


      <div className="w-full h-[800px]  flex justify-center items-center gap-[40px] mt-[20px]">
        <div className="w-[345px] h-[700px] flex flex-col shadow-2xl">
            <div className="bg-[#31BF5C] h-[5px]"></div>
            <div className="text-[24px] mt-[15px] ml-[15px] font-bold">Total Security</div>
            <div className="h-10 text-[50px] mt-[20px] mb-[50px] justify-center flex text-[#31BF5C]">{amountB} ₹</div>

            <div className="flex justify-center items-center gap-10">
              <div className="flex gap-[5px]">
                <label htmlFor="DeviceL" className="text-[15px] font-semibold">Device :</label>

                <select name="DeviceL" id="DeviceL" className=" border-[2px] border-[#31BF5C] text-[15px] rounded-sm" value={TotalD} onChange={(event) => SetTotalD(event.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div  className="flex gap-[5px]">
                <label htmlFor="Year" className="text-[15px] font-semibold">Year :</label>

                <select name="Year" id="Year" className=" border-[2px] border-[#31BF5C] text-[15px] rounded-sm" value={TotalY} onChange={(event) => SetTotalY(event.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            
            
            </div>
            {
               (ft === "")?<div className="w-ful  flex justify-center items-center mt-[30px]">
                <button className="w-[305px] h-[55px] bg-[#31BF5C] rounded-sm text-white" onClick={handleBuyA}>BUY NOW</button>
              </div>:<div className="w-ful  flex justify-center items-center mt-[30px]">
                <button className="w-[305px] h-[55px] bg-[#31BF5C] rounded-sm text-white" onClick={handleDT}>Download</button>
            </div>
            }
            
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
                <label htmlFor="DeviceL" className="text-[15px] font-semibold">Device :</label>

                <select name="DeviceL" id="DeviceL" className=" border-[2px] border-[#31BF5C] text-[15px] rounded-sm" value={InterD} onChange={(event) => SetInterD(event.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select> 
              </div>
              <div  className="flex gap-[5px]">
                <label htmlFor="Year" className="text-[15px] font-semibold">Year :</label>

                <select name="Year" id="Year" className=" border-[2px] border-[#31BF5C] text-[15px] rounded-sm" value={InterY} onChange={(event) => SetInterY(event.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            
            
            </div>
            {
               (fI === "")?<div className="w-ful  flex justify-center items-center mt-[30px]">
                <button className="w-[305px] h-[55px] bg-[#31BF5C] rounded-sm text-white" onClick={handleBuyB}>BUY NOW</button>
              </div>:<div className="w-ful  flex justify-center items-center mt-[30px]">
                <button className="w-[305px] h-[55px] bg-[#31BF5C] rounded-sm text-white" onClick={handleDI}>Download</button>
            </div>
            }
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
                <label htmlFor="DeviceL" className="text-[15px] font-semibold">Device :</label>

                <select name="DeviceL" id="DeviceL" className=" border-[2px] border-[#31BF5C] text-[15px] rounded-sm" value={LiteD} onChange={(event) => SetLiteD(event.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div  className="flex gap-[5px]">
                <label htmlFor="Year" className="text-[15px] font-semibold">Year :</label>

                <select name="Year" id="Year" className=" border-[2px] border-[#31BF5C] text-[15px] rounded-sm" value={LiteY} onChange={(event) => SetLiteY(event.target.value)}>
                  <option value="1" >1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            
            
            </div>
            {
               (fL === "")?<div className="w-ful  flex justify-center items-center mt-[30px]">
                <button className="w-[305px] h-[55px] bg-[#31BF5C] rounded-sm text-white" onClick={handleBuyC}>BUY NOW</button>
              </div>:<div className="w-ful  flex justify-center items-center mt-[30px]">
                <button className="w-[305px] h-[55px] bg-[#31BF5C] rounded-sm text-white" onClick={handleDL}>Download</button>
            </div>
            }
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
     
       
     
      
      {/* <div className="absolute bottom-4 right-4">
        <button className="w-10 h-10 flex items-center justify-center text-white">
          <img src={emogy}></img>
        </button>
      </div> */}
     
    </div>
  );
}

export default Price;
