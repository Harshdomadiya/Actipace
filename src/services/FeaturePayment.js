import toast from "react-hot-toast";
import { apiConnector } from "./Apiconnector";
import { categories } from "./Api";
import axios from "axios";
import rzp from "../services/rzp.webp"


function loadScript(src){
    return new Promise((resolve)=>{
        const script = document.createElement("script");
        script.src = src;
        script.onload = () =>{
            resolve(true);
        }
        script.onerror = () =>{
            resolve(false)
        }
        document.body.appendChild(script);
    })  
}

export async function buycourse(data,token) {
    const toastId = toast.loading("loading...")
    try{
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        if(!res){
            toast.error("Razorpay SDK failure")
        }

        const orderResponse = await axios.post(categories.CAPTUREPAYMENT_API,data);
        console.log(orderResponse)
        if(!orderResponse){
            throw new Error(orderResponse.data.message)
        }

        const options = {
            key:process.env.RAZORPAY_KEY,
            currency:orderResponse.data.currency,
            amount:`${orderResponse.data.amount}`,
            order_id:orderResponse.data.payment_id,
            name:"Actipace",
            description:"Thank you for purchasing the software",
            prefill:{
                name:"harsh"
            },
            handler: function(response){
                //verifypayment
                console.log("hello");
                verifyPayment(response,token);
            }

        }

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        
    }catch(e){
        console.log("PAYMENT IN ERROR....",e);
        console.log("could not make payment")

    } 
    toast.dismiss(toastId)
}

async function verifyPayment(response,token) {
    const toastId = toast.loading("loading..")
    try{
        console.log("verify")
        console.log(response);
        const reasponse = await axios.post(categories.VERIFYSIGNATURE_API,response);
        console.log(reasponse);

        if(!reasponse.data.success){
            throw new Error(reasponse.data.message);
        }
        toast.success("payment Successfull")

    }catch(e){
        console.log("PAYMENT VERIFY ERROR....",e);
        console.log("could not verify paymnet")
    }
    toast.dismiss(toastId)
}