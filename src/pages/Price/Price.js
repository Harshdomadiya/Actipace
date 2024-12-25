import React, { useEffect, useState } from "react";

import sec1 from "./image/Section1.png";

import actipace_a from "./image/actipace-a.png";
import axios from "axios";
import { categories } from "../../services/Api";
import { useNavigate } from "react-router-dom";

import { buycourse } from "../../services/FeaturePayment";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im"; 
import { FaCheck } from "react-icons/fa";
// import toast from "react-hot-toast";
// import head from "./image/Group 79.svg"
import faq from "./faq"
import head from "./image/Group 79.svg"
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function Price() {

  // i need token here
    const navigate  = useNavigate();

    // const [ft,setft] = useState("");
    // const [fI,setfI] = useState("");
    // const [fL,setfL] = useState("");

    const [LiteD,SetLiteD] = useState(1);
    const [LiteY,SetLiteY] = useState(1);
    const [TotalD,SetTotalD] = useState(1);
    const [TotalY,SetTotalY] = useState(1);
    const [InterD,SetInterD] = useState(1);
    const [InterY,SetInterY] = useState(1);
    const [amountA,setamountA] = useState(0)
    const [amountB,setamountB] = useState(0)
    const [amountC,setamountC] = useState(0)

    // let checkplanA = useRef();
    // let checkplanB = useRef();
    // let checkplanC = useRef();

  //   useEffect(()=>{
        
  //          checkplanA.current = async () =>{
  //           try{
  //               const payload = {
  //                 software_id:1
  //               }

  //               const data = await axios.post(categories.CHECKPLAN,payload,{
  //                                             headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  //                                             });
  //                                             //console.log("data",data)
  //               if (data.data.success) {
  //                 const expirationTimeInIST = new Date(data.data.response.expiresAt).getTime();
  //                 //console.log(data.data.response.expiresAt);
  //                 const IST_OFFSET = 5.5 * 60 * 60 * 1000;  // 5 hours 30 minutes in milliseconds
  //                 const expirationTimeInUTC = expirationTimeInIST - IST_OFFSET; 
  //                 //console.log("exp",expirationTimeInUTC)
  //                 if(data.data.success &&  expirationTimeInUTC > Date.now() )
  //                 {
  //                     setft(data.data.response.software.description)
  //                 }
  //                 else{
  //                   setft("");
  //                 }
                  
  //               }
  //             }catch(e){
                
  //           }
                
  //         }

  //         checkplanA.current();
  //   },[])


  //   useEffect(()=>{
      
  //      checkplanB.current = async () =>{
  //         try{
  //               const payload = {
  //                 software_id:2
  //               }

  //               const data = await axios.post(categories.CHECKPLAN,payload,{
  //                                           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  //                                           });
  //                 //console.log("data2",data);
  //                 if (data.data.success) {
  //                   const expirationTimeInIST = new Date(data.data.response.expiresAt).getTime();

  //                   const IST_OFFSET = 5.5 * 60 * 60 * 1000;  // 5 hours 30 minutes in milliseconds
  //                   const expirationTimeInUTC = expirationTimeInIST - IST_OFFSET; 

  //                 if(data.data.success &&  expirationTimeInUTC > Date.now())
  //                 {
  //                     setfI(data.data.response.software.description)
  //                 }
  //                 else{
  //                   setfI("")
  //                 }
  //               //toast.error(data.data.message)
  //             }   
            
  //         }catch(e){
  //             //console.log(e);
  //         }

  //     }
  //     checkplanB.current();
  // },[])

  //   useEffect(()=>{
      
  //       checkplanC.current = async () =>{
  //         try{
  //             const payload = {
  //               software_id:3
  //             }

  //             const data = await axios.post(categories.CHECKPLAN,payload,{
  //                                           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  //                                           });

  //             if (data.data.success) {
  //               const expirationTimeInIST = new Date(data.data.response.expiresAt).getTime();
  //               //console.log(data.data.response.expiresAt)
  //               const IST_OFFSET = 5.5 * 60 * 60 * 1000;  // 5 hours 30 minutes in milliseconds
  //               const expirationTimeInUTC = expirationTimeInIST - IST_OFFSET; 
  //               //console.log("exp",expirationTimeInUTC)
  //               if(data.data.success &&  expirationTimeInUTC > Date.now())
  //               {
  //                   setfL(data.data.response.software.description)
  //               }
  //               else{
  //                 setfL("");
  //               }
  //             }  
  //           }catch(e){
  //             //console.log(e);
  //         }
         
  //       }

  //       checkplanC.current();
      
  //   },[])
  //const [currency, setCurrency] = useState("INR");

  // async function getExchangeRate() {
  //   const apiKey = '526d1b2a015cacdbfeba76ee'; // Replace with your API key
  //   const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/INR`;
  
  //   try {
  //     const response = await axios.get(url);
  //     const usdRate = response.data.conversion_rates.USD;
  //     //console.log(typeof(usdRate));
  //     return usdRate;
  //   } catch (error) {
  //     toast.error('Error fetching exchange rates:', error.message);
  //   }
  // }

  // const handleCurrencyChange = (event) => {
  //   setCurrency(event.target.value);
  //   console.log("Selected currency:", event.target.value);
  // };

    useEffect(()=>{
      const data = {
        device:LiteD,
        year:LiteY,
        id:3
      }
      const amountfetch = async ()=>{
        try{
        const amount = await axios.post(categories.GETPLAN_API,data)
          // if(currency === "USD")
          // {
          //     const value=getExchangeRate();
          //     setamountA(Number(amount.data.amount.price)*value)
          // }else{
            setamountA(Number(amount.data.amount.price))
         // }
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
    const handleBuyB = async()=>{
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
    const handleBuyC = async()=>{
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

    
    // const handleDL = async(e)=>{
    //   checkplanC.current();
    //   if(fL){

      
    //     const anchor = document.createElement("a");
    //     anchor.href=fL;
    //     anchor.download="file.zip";
    //     anchor.click();
    //   }
    // }

   function DeviceSetP(Device,SetDevice) {
      if(Device === 3){
          SetDevice(Device+2);
        }
        else if(Device === 5){
          SetDevice(Device+5);
        }
        else if(Device === 10)
        {
            return;
        }
        else{
          SetDevice(Device+1);
        }
  }
  
  function DeviceSetM(Device,SetDevice) {
      if(Device === 10){
          SetDevice(Device-5);
        }
        else if(Device === 5){
          SetDevice(Device-2);
        }
        else if(Device === 1)
        {
            return;
        }
        else{
          SetDevice(Device-1);
        }
  }
  
  function YearSetP(Year,SetYear) {
      if(Year === 3)
      {
          return;
      }
      SetYear(Year+1);
      
  }
  
  function YearSetM(Year,SetYear) {
      if(Year === 1)
      {
          return;
      }
      SetYear(Year-1);
  }

  const [openCategory, setOpenCategory] = useState(null);
          
          const [openQuestion, setOpenQuestion] = useState(null);
  
          const toggleCategory = (category) => {
              setOpenCategory(openCategory === category ? null : category);
              console.log("category", category);
              setOpenQuestion(null);
          };
  
          const toggleQuestion = (questionIndex) => {
              setOpenQuestion(openQuestion === questionIndex ? null : questionIndex);
          };
  

  return (
    <div className="w-full">
      <div className="flex items-center justify-center container mt-[50px]">
        <img src={sec1} alt="" className="w-2/3" />
        <img src={actipace_a} alt="" className="w-1/6 absolute ml-[1260px]" />
      </div>

      {/* <div className="currency-selector">
      {/* <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
        Select Currency
      </label> */}
      {/* <select
        id="currency"
        value={currency}
        onChange={handleCurrencyChange}
        className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="INR">INR - Indian Rupee</option>
        <option value="USD">USD - US Dollar</option>
      </select> */}
    {/* </div> */} 
      <div className="w-full h-[850px]  flex justify-center items-center gap-[40px] mt-[50px]">
        <div className="w-[320px] h-[790px] flex flex-col shadow-2xl">
            <div className="bg-[#31BF5C] h-[5px]"></div>
            <div className="text-[24px] mt-[15px] ml-[15px] font-bold">Total Security</div>
            <div className="h-10 text-[50px] mt-[20px] mb-[50px] justify-center flex text-[#31BF5C] font-inter">{amountB} ₹</div>

            <div className="flex justify-center items-center gap-10 mt-5">
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="flex gap-3 justify-center items-center">
                  <button onClick={()=>DeviceSetM(TotalD,SetTotalD)} className="bg-[#9DA9B0] w-[25px] h-[25px] rounded-full text-white text-[30px] flex justify-center items-center font-[700px]"><MdOutlineHorizontalRule className="w-[25px]"/></button>
                  <div className="w-[35px] h-[30px] bg-[#e4e5e5] text-[#424D56] flex justify-center items-center text-[20px] rounded-[4px] font-normal">{TotalD}</div> 
                  <button onClick={()=>DeviceSetP(TotalD,SetTotalD)} className="bg-[#31BF5C] w-[25px] h-[25px] rounded-full text-white text-[17px] flex justify-center items-center font-[700px]"><FaPlus /></button>
                </div>
                <div className="font-bold text-[14px] text-[#424D56]">DEVICES</div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="flex gap-3 justify-center items-center">
                  <button onClick={()=>YearSetM(TotalY,SetTotalY)} className="bg-[#9DA9B0] w-[25px] h-[25px] rounded-full text-white text-[30px] flex justify-center items-center font-[700px]"><MdOutlineHorizontalRule className="w-[25px]"/></button>
                  <div className="w-[35px] h-[30px] bg-[#e4e5e5] text-[#424D56] flex justify-center items-center text-[20px] rounded-[4px] font-normal">{TotalY}</div> 
                  <button onClick={()=>YearSetP(TotalY,SetTotalY)} className="bg-[#31BF5C] w-[25px] h-[25px] rounded-full text-white text-[17px] flex justify-center items-center font-[700px]"><FaPlus /></button>
                </div>
                <div className="font-bold text-[14px] text-[#424D56]">YEAR</div>
              </div>
            
            
            </div>
            <div className="w-ful  flex justify-center items-center mt-[30px]">
                <button className="w-[280px] h-[55px] bg-[#31BF5C] rounded-sm text-white" onClick={()=>handleBuyA()}>BUY NOW</button>
              </div>
            
            <div className="text-[12px] flex flex-col ml-[20px] mt-[30px] gap-[5px] font-[200px]">
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Real Time Protection</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Ransomware Protection</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> USB Protection</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Temp Files Cleaner</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Website Blocker</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Webcam Protection</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Advertise Blocker (Phishing and Malicious</p>
              <p className="text-[#071D2B] text-[14px] font-normal ml-[20px]">Website Protection)</p> 
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Privacy Cleaner</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Wifi Scanner</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Data Encryption</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Data Recovery</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Backup Manager</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Game Booster</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Registry Cleaner</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Registry Optimizer</p>
            </div>
            
        </div>
        
        
        <div className="w-[320px] h-[790px] flex flex-col shadow-2xl">
            <div className="bg-[#31BF5C] h-[5px]"></div>
            <div className="text-[24px] mt-[15px] ml-[15px] font-bold">Internet Security</div>
            <div className="h-10 text-[50px] mt-[20px] mb-[50px] justify-center flex text-[#31BF5C] font-inter">{amountC} ₹</div>

            <div className="flex justify-center items-center gap-10 mt-5">
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="flex gap-3 justify-center items-center">
                  <button onClick={()=>DeviceSetM(InterD,SetInterD)} className="bg-[#9DA9B0] w-[25px] h-[25px] rounded-full text-white text-[30px] flex justify-center items-center font-[700px]"><MdOutlineHorizontalRule className="w-[25px]"/></button>
                  <div className="w-[35px] h-[30px] bg-[#e4e5e5] text-[#424D56] flex justify-center items-center text-[20px] rounded-[4px] font-normal">{InterD}</div> 
                  <button onClick={()=>DeviceSetP(InterD,SetInterD)} className="bg-[#31BF5C] w-[25px] h-[25px] rounded-full text-white text-[17px] flex justify-center items-center font-[700px]"><FaPlus /></button>
                </div>
                <div className="font-bold text-[14px] text-[#424D56]">DEVICES</div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="flex gap-3 justify-center items-center">
                  <button onClick={()=>YearSetM(InterY,SetInterY)} className="bg-[#9DA9B0] w-[25px] h-[25px] rounded-full text-white text-[30px] flex justify-center items-center font-[700px]"><MdOutlineHorizontalRule className="w-[25px]"/></button>
                  <div className="w-[35px] h-[30px] bg-[#e4e5e5] text-[#424D56] flex justify-center items-center text-[20px] rounded-[4px] font-normal">{InterY}</div> 
                  <button onClick={()=>YearSetP(InterY,SetInterY)} className="bg-[#31BF5C] w-[25px] h-[25px] rounded-full text-white text-[17px] flex justify-center items-center font-[700px]"><FaPlus /></button>
                </div>
                <div className="font-bold text-[14px] text-[#424D56]">YEAR</div>
              </div>
            
            
            
            
            </div>
           <div className="w-ful  flex justify-center items-center mt-[30px]">
                <button className="w-[280px] h-[55px] bg-[#31BF5C] rounded-sm text-white" onClick={()=>handleBuyB()}>BUY NOW</button>
              </div>
            <div className="text-[12px] flex flex-col ml-[20px] mt-[30px] gap-[5px] font-[200px]">
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Real Time Protection</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Ransomware Protection</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> USB Protection</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Temp Files Cleaner</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Website Blocker</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Webcam Protection</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Advertise Blocker (Phishing and Malicious</p>
              <p className="text-[#071D2B] text-[14px] font-normal ml-[20px]">Website Protection)</p> 
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Privacy Cleaner</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Wifi Scanner</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Data Encryption</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Data Recovery</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Backup Manager</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Game Booster</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Registry Cleaner</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Registry Optimizer</p>
            </div>
            
        </div>
        
        <div className="w-[320px] h-[790px] flex flex-col shadow-2xl">
            <div className="bg-[#31BF5C] h-[5px]"></div>
            <div className="text-[24px] mt-[15px] ml-[15px] font-bold">Basic Defense</div>
            <div className="h-10 text-[50px] mt-[20px] mb-[50px] justify-center flex text-[#31BF5C] font-inter">{amountA} ₹</div>

            <div className="flex justify-center items-center gap-10 mt-5">
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="flex gap-3 justify-center items-center">
                  <button onClick={()=>DeviceSetM(LiteD,SetLiteD)} className="bg-[#9DA9B0] w-[25px] h-[25px] rounded-full text-white text-[30px] flex justify-center items-center font-[700px]"><MdOutlineHorizontalRule className="w-[25px]"/></button>
                  <div className="w-[35px] h-[30px] bg-[#e4e5e5] text-[#424D56] flex justify-center items-center text-[20px] rounded-[4px] font-normal">{LiteD}</div> 
                  <button onClick={()=>DeviceSetP(LiteD,SetLiteD)} className="bg-[#31BF5C] w-[25px] h-[25px] rounded-full text-white text-[17px] flex justify-center items-center font-[700px]"><FaPlus /></button>
                </div>
                <div className="font-bold text-[14px] text-[#424D56]">DEVICES</div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="flex gap-3 justify-center items-center">
                  <button onClick={()=>YearSetM(LiteY,SetLiteY)} className="bg-[#9DA9B0] w-[25px] h-[25px] rounded-full text-white text-[30px] flex justify-center items-center font-[700px]"><MdOutlineHorizontalRule className="w-[25px]"/></button>
                  <div className="w-[35px] h-[30px] bg-[#e4e5e5] text-[#424D56] flex justify-center items-center text-[20px] rounded-[4px] font-normal">{LiteY}</div> 
                  <button onClick={()=>YearSetP(LiteY,SetLiteY)} className="bg-[#31BF5C] w-[25px] h-[25px] rounded-full text-white text-[17px] flex justify-center items-center font-[700px]"><FaPlus /></button>
                </div>
                <div className="font-bold text-[14px] text-[#424D56]">YEAR</div>
              </div>
            
            
            </div>
           <div className="w-ful  flex justify-center items-center mt-[30px]">
                <button className="w-[280px] h-[55px] bg-[#31BF5C] rounded-sm text-white" onClick={()=>handleBuyC()}>BUY NOW</button>
              </div>
           
            <div className="text-[12px] flex flex-col ml-[20px] mt-[30px] gap-[5px] font-[200px]">
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Real Time Protection</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Ransomware Protection</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> USB Protection</p>
              <p className="text-[#071D2B] text-[14px] font-normal flex items-center gap-2"><FaCheck className="w-[12px] h-[12px] text-[#31BF5C]"/> Temp Files Cleaner</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Website Blocker</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Webcam Protection</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Advertise Blocker (Phishing and Malicious</p>
              <p className="ml-[20px] text-[#9DA9B0] text-[14px] font-normal">Website Protection)</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Privacy Cleaner</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Wifi Scanner</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Data Encryption</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Data Recovery</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Backup Manager</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Game Booster</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Registry Cleaner</p>
              <p className="text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3"><ImCross className="w-[8px] h-[8px]"/> Registry Optimizer</p>
            </div>
            
        </div>
        

      </div>
     
      <div className="w-full flex mt-10 flex-col items-center gap-8 mb-20">
          <div className="w-[1150px]">
                      <img src={head} alt="" className="h-[60px]"/>
          </div>
          <div className="text-[#374151] text-[14px] font-normal w-[1150px]">Explore our FAQ section to discover detailed answers to the most frequently asked questions.</div>
     
      <div className="w-full flex flex-col justify-center items-center text-[#374151] font-normal text-[16px]">
                        {Object.entries(faq).map(([key, {category, questions}]) => (
                            <div key={key} className="mb-4 w-[1150px]">
                                {/* Category */}
                                <button
                                    onClick={() => toggleCategory(category)}
                                    className="w-full text-left border p-4  rounded-md flex justify-between hover:bg-gray-100"
                                >
                                    {category}
                                    <div className="text-[#374151]">{openCategory === category ? <FaChevronUp /> : <FaChevronDown />}</div>
                                </button>

                                {/* Questions*/}
                                {openCategory === category && (
                                    <div className="mt-2 border rounded-md bg-gray-50">
                                        {questions.map((q, index) => (
                                            <div key={index} className="border-b last:border-b-0">
                                                <button
                                                    onClick={() => toggleQuestion(index)}
                                                    className="w-full text-left p-4  flex justify-between bg-white hover:bg-gray-100"
                                                >
                                                    {q.question}
                                                    <div className="text-[#374151]">{openQuestion === index ? <FaChevronUp /> : <FaChevronDown />}</div>
                                                </button>

                                                {/* Answer */}
                                                {openQuestion === index && (
                                                    <div className="p-4 bg-gray-50 text-gray-700">
                                                        {q.answer}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
          </div> 
     
    </div>
  );
}

export default Price;
