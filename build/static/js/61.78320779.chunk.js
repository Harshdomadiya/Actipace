"use strict";(self.webpackChunkactipace=self.webpackChunkactipace||[]).push([[61],{957:(e,t,s)=>{s.r(t),s.d(t,{default:()=>w});var a=s(43);const n=s.p+"static/media/Section1.d9002040ad0ae5098cb5.png",i=s.p+"static/media/actipace-a.329f0339c8a5bd88b00b.png";var o=s(213),c=s(777),r=s(906),l=s(768);async function x(e,t){try{const a=l.Ay.loading("loading...");await(s="https://checkout.razorpay.com/v1/checkout.js",new Promise((e=>{const t=document.createElement("script");t.src=s,t.onload=()=>{e(!0)},t.onerror=()=>{e(!1)},document.body.appendChild(t)})))||l.Ay.error("Razorpay SDK failure");const n=await o.A.post(c.L.CAPTUREPAYMENT_API,e,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});n.data.success||l.Ay.error(n.data.reasponse.data.message);const i={key:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.RAZORPAY_KEY,currency:n.data.currency,amount:`${n.data.amount}`,order_id:n.data.payment_id,name:"Actipace",description:"Thank you for purchasing the software",prefill:{name:"harsh"},handler:function(e){console.log("hello"),async function(e,t){try{const s=l.Ay.loading("loading.."),a=await o.A.post(c.L.VERIFYSIGNATURE_API,e,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});if(!a.data.success)throw new Error(a.data.message);l.Ay.success("payment Successfull"),t("/extrapage"),l.Ay.dismiss(s)}catch(s){console.log("PAYMENT VERIFY ERROR....",s),l.Ay.error(s.response.data.message)}}(e,t)}};new window.Razorpay(i).open(),l.Ay.dismiss(a)}catch(a){l.Ay.error(a.response.data.message)}var s}var p=s(720),m=s(184),d=s(661);const u={general:{category:"General",questions:[{question:"Can I use multiple antivirus software on my computer?",answer:"Yes, you can but it is not advisable to run multiple antivirus software programs on a single computer as it slows down your system performance."},{question:"I set Password Protection in Actipace antivirus. But I have forgotten my password now. How can I retrieve my password?",answer:"Click settings within Actipace, and you will be prompted to enter your password. On the same dialog box, you will find a Forgot password? button. Click this button to initiate the password retrieval process. Password Reset ID received via email when first time enable Product Protection. You can also reach out to our technical support team at, https://actipace.com/support-ticket/"},{question:"I want to change my contact details that I provided at the time of registration. How can I do this?",answer:"To update your contact details, send an email to support@actipace.com, with your current details along with your purchase details. Actipace team will promptly address your request and assist with the necessary changes."},{question:"For technical support, where should I contact?",answer:"Contact Actipace through email support@actipace.com or call us."}]},installation_uninstallation:{category:"Installation & Uninstallation",questions:[{question:"How do I uninstall Actipace antivirus?",answer:"Removing Actipace antivirus may expose your computer to virus threats. However, if you need to uninstall it, follow these steps: Go to Start > Control Panel > Programs. Right-click Actipace antivirus and select Uninstall. After uninstallation, restart your system for changes to take effect. Note: Admin rights are needed to uninstall Actipace."},{question:"On which platforms can Actipace antivirus be installed?",answer:"Actipace antivirus is compatible with Windows 11, Windows 10, Windows 8.1, Windows 8, Windows 7, Windows Vista, and Windows XP."},{question:"Can I install Actipace antivirus on another computer?",answer:"Yes. To install Actipace antivirus on another computer, uninstall it from the current device, then install it on the new device. Remember, each Actipace Product Key is intended for use on a single system at a time."},{question:"Where will I find the Product Key of my Actipace antivirus?",answer:"Open Actipace antivirus. Go to Activation. The license details are displayed."},{question:"How do I know when my license is expiring?",answer:"Open Actipace antivirus. Go to Activation. The Days Remaining details are displayed."},{question:"How do I download and install Actipace antivirus?",answer:"Visit the following link https://actipace.com/download"},{question:"How can I identify whether my operating system is 32-bit or 64-bit?",answer:"Actipace automatically detects whether your computer operating system is 32-bit or 64-bit."}]},registration:{category:"Registration",questions:[{question:"How can I register Actipace antivirus?",answer:"You can register/activate Actipace antivirus through the following methods: Registering Actipace Online: Open Actipace Antivirus , Go to Activation. Registering Actipace offline: Visit https://actipace.com/activation."},{question:"I have reinstalled Actipace. Should I register it again?",answer:"Open Actipace Antivirus , Go to Activation. Enter License Key, Click Reactivate."},{question:"What is my Customer ID?",answer:"Your 20 Digit alphanumeric License Key of Actipace is your Customer ID. Please do mention your Serial Number in every communication with Actipace Team."},{question:"What to do if I lost my License Key?",answer:"You can retrieve your lost license key by visiting https://actipace.com/lost/ OR Contact Actipace through email support@actipace.com or call us at 09081114932."},{question:"How long can I use this registered copy?",answer:"You can use your registered copy until the subscription period of your Actipace copy expires. After the subscription period is over, you will be required to renew your Actipace subscription."},{question:"Are the upgrades free, if yes how long?",answer:"For registered users, all updates and upgrades are free of cost till the license key is active."},{question:"Where do I get License key of Actipace on my computer?",answer:"Open Actipace antivirus. Go to Activation. The license details are displayed."},{question:"Why registration wizard does not accept license key?",answer:"Ensure that you are entering the correct license key."},{question:"How do I Activate Actipace Product Key, if I do not have Internet Connection?",answer:"Visit https://actipace.com/activation/ from other PC, Enter details and get Activation Code."},{question:"Is it possible that I can register Actipace offline?",answer:"Visit https://actipace.com/activation/ from other PC, Enter details and get Activation Code."}]},renewal:{category:"Renewal",questions:[{question:"To renew Actipace, do I need a new product key or the same product key can be used?",answer:"Same product key used. For Renewal, Open Actipace antivirus > Activation. Click the Renew Now button and follow the on-screen instructions to complete the purchase transaction. If you have already purchased then you can click Renew Status. For more details reach out to renew@actipace.com or call us at 09081114932."},{question:"How can I renew my Actipace license?",answer:"You can renew Actipace through the application. Open Actipace antivirus > Activation. Click the Renew Now button and follow the on-screen instructions to complete the purchase transaction. If you have already purchased then you can click Renew Status. For more details reach out to renew@actipace.com or call us at 09081114932."},{question:"I renewed the license of Actipace antivirus, but my license details have not been updated?",answer:"Open Actipace antivirus > Activation. Click the Renew Status button."},{question:"I am using an older version of Actipace and want to renew its license.",answer:"If you are using an older version of Actipace antivirus, we recommend that you first upgrade it to the latest version and then renew your license. To upgrade to the latest version, Download the latest installer from https://actipace.com/download"},{question:"How will I get to know if I have made an online payment?",answer:"You can drop us an email at renew@actipace.com, with your banking transaction details. Actipace will get back to you with an update. Contact our renewal helpline on 09081114931."},{question:"How long does it take for a product to be renewed after the payment is made?",answer:"After we confirm the payment, your license is renewed within 2 mins. Open Actipace antivirus > Activation. Click the Renew Status button."},{question:"If I renew my license well before the expiry date, will my remaining period get extended?",answer:"Yes. The validity of your renewed license begins after the original expiry date. For example, if your license expires on 10th May 2024 and you renew it on 1st May 2024 for a year. Your new license validity will start from 10th May 2024. Hence, you do not lose the period between 1st and 10th May."},{question:"Will my product be upgraded automatically when I renew my Actipace license?",answer:"No. Only your existing version of Actipace antivirus will be renewed and not upgraded. To upgrade your product to the latest version, Download and install the latest installer from https://actipace.com/download"},{question:"What if my license expires before renewal?",answer:"If your Actipace antivirus license expires before renewal, your antivirus stops downloading updates, leaving your computer exposed to viruses and other security threats. Hence, renew your license in time and stay protected. It is recommended to renew your license one week before its expiry."}]},usingActipaceAntivirus:{category:"Using Actipace Antivirus",questions:[{question:"Ransomware attacks have been on the ramp for some time now. Does Actipace have any solution to this?",answer:"Yes. The Ransomware Protection feature of Actipace protects you from all ransomware attacks. It also backs up your data and will help you restore it in case there is any such attack. It is recommended that you always keep Ransomware Protection turned on."},{question:"I have lots of financial data on my computer. How can I secure them?",answer:"You are advised to always keep Ransomware Protection on. This feature regularly backs up your data, including Tally files. In case of a ransomware attack, you can easily recover all your backed-up data."},{question:"My children stream videos online and visit various websites. I am worried if they visit unwanted content.",answer:"Don\u2019t worry, Family Protection Mode feature automatically blocks all websites and videos that you feel are inappropriate for your children. Go to Family Protection Mode under Settings to turn it on."},{question:"My children spend too much time playing games. How can I restrict them?",answer:"The Application Blocker feature enables you to block any game or application. Open Actipace Antivirus, go to Tools >> Website Blocker >> Application Blocker."},{question:"How is my privacy protected?",answer:"To protect your privacy, follow these steps: Open Actipace Antivirus, go to Settings, and turn on Webcam Protection. This feature prevents malwares from accessing your device webcam and capturing your photos without consent to blackmail you."},{question:"Actipace antivirus found a virus, what will it do?",answer:"If you have turned on Virus Protection under Settings > Real Time Protection, Actipace antivirus will automatically clean any virus found in a file or document. By default, Virus Protection is turned on when you install Actipace."},{question:"How do I upgrade Actipace product?",answer:"To update the software, follow these steps: Open Actipace Antivirus, go to Update, and click on Update near Software Version."},{question:"Why am I getting incorrect license error?",answer:"You may get an error as Incorrect License if the same product key is activated/used on more than one system at a time. To resolve the issue, confirm in your network/premises if one product key is activated on one system only. If you find the same product key activated on two systems, then uninstall Actipace and use the product key on any one system only. If the issue persists, contact our technical support team at https://actipace.com/support/"}]},compatibility:{category:"Compatibility",questions:[{question:"While registering offline, I am using the activation license key that I created before. But it is not working.",answer:"It is because the offline activation license key is unique and for one-time use only. You need to create this key once again with a new OTP to register your device offline."}]},updatingActipace:{category:"Updating Actipace",questions:[{question:"I am using Actipace on a computer that has no Internet, but it is connected to an internal network. How can I update my product automatically?",answer:"Download offline update using another PC (connected with Internet) from https://actipace.com/download/offline-update/. Once the download is completed, copy the exe file to a USB. Connect the USB drive to the PC (with no Internet), open the USB, and double-click to run the downloaded exe file."}]},newlyIntroducedFeatures:{category:"Queries about newly introduced features",questions:[{question:"What is Family Protection Mode?",answer:"Family Protection Mode protects you from accessing websites with malicious content. It ensures that malicious websites are automatically blocked, and you have a safe browsing experience."},{question:"What does USB Protection do?",answer:"USB Protection secures your device against malwares that autorun themselves by blocking the Autorun feature of your device. To configure USB Protection, go to Settings > USB Protection on the product."},{question:"What is Wi-Fi Scanner?",answer:"Wi-Fi Scanner scans the Wi-Fi router that your computer connects to and helps you know if the router has security issues, and weak links that can get you in trouble."},{question:"What is Game Booster?",answer:"Game Booster allows you to enjoy playing games on your device faster and smoothly with no frame drops or lags."}]}};const h=s.p+"static/media/Group 79.2e62925827286706c0c489b7be1eb376.svg";var f=s(579);const w=function(){const e=(0,r.Zp)(),[t,s]=(0,a.useState)(1),[l,w]=(0,a.useState)(1),[y,g]=(0,a.useState)(1),[j,v]=(0,a.useState)(1),[N,b]=(0,a.useState)(1),[A,B]=(0,a.useState)(1),[C,k]=(0,a.useState)(0),[D,I]=(0,a.useState)(0),[P,F]=(0,a.useState)(0);function q(e,t){if(3===e)t(e+2);else if(5===e)t(e+5);else{if(10===e)return;t(e+1)}}function S(e,t){if(10===e)t(e-5);else if(5===e)t(e-2);else{if(1===e)return;t(e-1)}}function R(e,t){3!==e&&t(e+1)}function H(e,t){1!==e&&t(e-1)}(0,a.useEffect)((()=>{const e={device:t,year:l,id:3};(async()=>{try{const t=await o.A.post(c.L.GETPLAN_API,e);k(Number(t.data.amount.price))}catch(t){}})()}),[t,l]),(0,a.useEffect)((()=>{const e={device:y,year:j,id:1};(async()=>{try{const t=await o.A.post(c.L.GETPLAN_API,e);I(t.data.amount.price)}catch(t){}})()}),[y,j]),(0,a.useEffect)((()=>{const e={device:N,year:A,id:2};(async()=>{try{const t=await o.A.post(c.L.GETPLAN_API,e);F(t.data.amount.price)}catch(t){}})()}),[N,A]);const[M,T]=(0,a.useState)(null),[W,E]=(0,a.useState)(null);return(0,f.jsxs)("div",{className:"w-full",children:[(0,f.jsxs)("div",{className:"flex items-center justify-center container mt-[50px]",children:[(0,f.jsx)("img",{src:n,alt:"",className:"w-2/3"}),(0,f.jsx)("img",{src:i,alt:"",className:"w-1/6 absolute ml-[1260px]"})]}),(0,f.jsxs)("div",{className:"w-full h-[850px]  flex justify-center items-center gap-[40px] mt-[50px]",children:[(0,f.jsxs)("div",{className:"w-[320px] h-[790px] flex flex-col shadow-2xl",children:[(0,f.jsx)("div",{className:"bg-[#31BF5C] h-[5px]"}),(0,f.jsx)("div",{className:"text-[24px] mt-[15px] ml-[15px] font-bold",children:"Total Security"}),(0,f.jsxs)("div",{className:"h-10 text-[50px] mt-[20px] mb-[50px] justify-center flex text-[#31BF5C] font-inter",children:[D," \u20b9"]}),(0,f.jsxs)("div",{className:"flex justify-center items-center gap-10 mt-5",children:[(0,f.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2",children:[(0,f.jsxs)("div",{className:"flex gap-3 justify-center items-center",children:[(0,f.jsx)("button",{onClick:()=>S(y,g),className:"bg-[#9DA9B0] w-[25px] h-[25px] rounded-full text-white text-[30px] flex justify-center items-center font-[700px]",children:(0,f.jsx)(p.cXB,{className:"w-[25px]"})}),(0,f.jsx)("div",{className:"w-[35px] h-[30px] bg-[#e4e5e5] text-[#424D56] flex justify-center items-center text-[20px] rounded-[4px] font-normal",children:y}),(0,f.jsx)("button",{onClick:()=>q(y,g),className:"bg-[#31BF5C] w-[25px] h-[25px] rounded-full text-white text-[17px] flex justify-center items-center font-[700px]",children:(0,f.jsx)(m.OiG,{})})]}),(0,f.jsx)("div",{className:"font-bold text-[14px] text-[#424D56]",children:"DEVICES"})]}),(0,f.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2",children:[(0,f.jsxs)("div",{className:"flex gap-3 justify-center items-center",children:[(0,f.jsx)("button",{onClick:()=>H(j,v),className:"bg-[#9DA9B0] w-[25px] h-[25px] rounded-full text-white text-[30px] flex justify-center items-center font-[700px]",children:(0,f.jsx)(p.cXB,{className:"w-[25px]"})}),(0,f.jsx)("div",{className:"w-[35px] h-[30px] bg-[#e4e5e5] text-[#424D56] flex justify-center items-center text-[20px] rounded-[4px] font-normal",children:j}),(0,f.jsx)("button",{onClick:()=>R(j,v),className:"bg-[#31BF5C] w-[25px] h-[25px] rounded-full text-white text-[17px] flex justify-center items-center font-[700px]",children:(0,f.jsx)(m.OiG,{})})]}),(0,f.jsx)("div",{className:"font-bold text-[14px] text-[#424D56]",children:"YEAR"})]})]}),(0,f.jsx)("div",{className:"w-ful  flex justify-center items-center mt-[30px]",children:(0,f.jsx)("button",{className:"w-[280px] h-[55px] bg-[#31BF5C] rounded-sm text-white",onClick:()=>(async()=>{const t={device:y,year:j,id:1};await x(t,e)})(),children:"BUY NOW"})}),(0,f.jsxs)("div",{className:"text-[12px] flex flex-col ml-[20px] mt-[30px] gap-[5px] font-[200px]",children:[(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Real Time Protection"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Ransomware Protection"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," USB Protection"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Temp Files Cleaner"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Website Blocker"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Webcam Protection"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Advertise Blocker (Phishing and Malicious"]}),(0,f.jsx)("p",{className:"text-[#071D2B] text-[14px] font-normal ml-[20px]",children:"Website Protection)"}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Privacy Cleaner"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Wifi Scanner"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Data Encryption"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Data Recovery"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Backup Manager"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Game Booster"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Registry Cleaner"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Registry Optimizer"]})]})]}),(0,f.jsxs)("div",{className:"w-[320px] h-[790px] flex flex-col shadow-2xl",children:[(0,f.jsx)("div",{className:"bg-[#31BF5C] h-[5px]"}),(0,f.jsx)("div",{className:"text-[24px] mt-[15px] ml-[15px] font-bold",children:"Internet Security"}),(0,f.jsxs)("div",{className:"h-10 text-[50px] mt-[20px] mb-[50px] justify-center flex text-[#31BF5C] font-inter",children:[P," \u20b9"]}),(0,f.jsxs)("div",{className:"flex justify-center items-center gap-10 mt-5",children:[(0,f.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2",children:[(0,f.jsxs)("div",{className:"flex gap-3 justify-center items-center",children:[(0,f.jsx)("button",{onClick:()=>S(N,b),className:"bg-[#9DA9B0] w-[25px] h-[25px] rounded-full text-white text-[30px] flex justify-center items-center font-[700px]",children:(0,f.jsx)(p.cXB,{className:"w-[25px]"})}),(0,f.jsx)("div",{className:"w-[35px] h-[30px] bg-[#e4e5e5] text-[#424D56] flex justify-center items-center text-[20px] rounded-[4px] font-normal",children:N}),(0,f.jsx)("button",{onClick:()=>q(N,b),className:"bg-[#31BF5C] w-[25px] h-[25px] rounded-full text-white text-[17px] flex justify-center items-center font-[700px]",children:(0,f.jsx)(m.OiG,{})})]}),(0,f.jsx)("div",{className:"font-bold text-[14px] text-[#424D56]",children:"DEVICES"})]}),(0,f.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2",children:[(0,f.jsxs)("div",{className:"flex gap-3 justify-center items-center",children:[(0,f.jsx)("button",{onClick:()=>H(A,B),className:"bg-[#9DA9B0] w-[25px] h-[25px] rounded-full text-white text-[30px] flex justify-center items-center font-[700px]",children:(0,f.jsx)(p.cXB,{className:"w-[25px]"})}),(0,f.jsx)("div",{className:"w-[35px] h-[30px] bg-[#e4e5e5] text-[#424D56] flex justify-center items-center text-[20px] rounded-[4px] font-normal",children:A}),(0,f.jsx)("button",{onClick:()=>R(A,B),className:"bg-[#31BF5C] w-[25px] h-[25px] rounded-full text-white text-[17px] flex justify-center items-center font-[700px]",children:(0,f.jsx)(m.OiG,{})})]}),(0,f.jsx)("div",{className:"font-bold text-[14px] text-[#424D56]",children:"YEAR"})]})]}),(0,f.jsx)("div",{className:"w-ful  flex justify-center items-center mt-[30px]",children:(0,f.jsx)("button",{className:"w-[280px] h-[55px] bg-[#31BF5C] rounded-sm text-white",onClick:()=>(async()=>{const t={device:N,year:A,id:2};await x(t,e)})(),children:"BUY NOW"})}),(0,f.jsxs)("div",{className:"text-[12px] flex flex-col ml-[20px] mt-[30px] gap-[5px] font-[200px]",children:[(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Real Time Protection"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Ransomware Protection"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," USB Protection"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Temp Files Cleaner"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Website Blocker"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Webcam Protection"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Advertise Blocker (Phishing and Malicious"]}),(0,f.jsx)("p",{className:"text-[#071D2B] text-[14px] font-normal ml-[20px]",children:"Website Protection)"}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Privacy Cleaner"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Wifi Scanner"]}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Data Encryption"]}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Data Recovery"]}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Backup Manager"]}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Game Booster"]}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Registry Cleaner"]}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Registry Optimizer"]})]})]}),(0,f.jsxs)("div",{className:"w-[320px] h-[790px] flex flex-col shadow-2xl",children:[(0,f.jsx)("div",{className:"bg-[#31BF5C] h-[5px]"}),(0,f.jsx)("div",{className:"text-[24px] mt-[15px] ml-[15px] font-bold",children:"Basic Defense"}),(0,f.jsxs)("div",{className:"h-10 text-[50px] mt-[20px] mb-[50px] justify-center flex text-[#31BF5C] font-inter",children:[C," \u20b9"]}),(0,f.jsxs)("div",{className:"flex justify-center items-center gap-10 mt-5",children:[(0,f.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2",children:[(0,f.jsxs)("div",{className:"flex gap-3 justify-center items-center",children:[(0,f.jsx)("button",{onClick:()=>S(t,s),className:"bg-[#9DA9B0] w-[25px] h-[25px] rounded-full text-white text-[30px] flex justify-center items-center font-[700px]",children:(0,f.jsx)(p.cXB,{className:"w-[25px]"})}),(0,f.jsx)("div",{className:"w-[35px] h-[30px] bg-[#e4e5e5] text-[#424D56] flex justify-center items-center text-[20px] rounded-[4px] font-normal",children:t}),(0,f.jsx)("button",{onClick:()=>q(t,s),className:"bg-[#31BF5C] w-[25px] h-[25px] rounded-full text-white text-[17px] flex justify-center items-center font-[700px]",children:(0,f.jsx)(m.OiG,{})})]}),(0,f.jsx)("div",{className:"font-bold text-[14px] text-[#424D56]",children:"DEVICES"})]}),(0,f.jsxs)("div",{className:"flex flex-col justify-center items-center gap-2",children:[(0,f.jsxs)("div",{className:"flex gap-3 justify-center items-center",children:[(0,f.jsx)("button",{onClick:()=>H(l,w),className:"bg-[#9DA9B0] w-[25px] h-[25px] rounded-full text-white text-[30px] flex justify-center items-center font-[700px]",children:(0,f.jsx)(p.cXB,{className:"w-[25px]"})}),(0,f.jsx)("div",{className:"w-[35px] h-[30px] bg-[#e4e5e5] text-[#424D56] flex justify-center items-center text-[20px] rounded-[4px] font-normal",children:l}),(0,f.jsx)("button",{onClick:()=>R(l,w),className:"bg-[#31BF5C] w-[25px] h-[25px] rounded-full text-white text-[17px] flex justify-center items-center font-[700px]",children:(0,f.jsx)(m.OiG,{})})]}),(0,f.jsx)("div",{className:"font-bold text-[14px] text-[#424D56]",children:"YEAR"})]})]}),(0,f.jsx)("div",{className:"w-ful  flex justify-center items-center mt-[30px]",children:(0,f.jsx)("button",{className:"w-[280px] h-[55px] bg-[#31BF5C] rounded-sm text-white",onClick:()=>(async()=>{const s={device:t,year:l,id:3};await x(s,e)})(),children:"BUY NOW"})}),(0,f.jsxs)("div",{className:"text-[12px] flex flex-col ml-[20px] mt-[30px] gap-[5px] font-[200px]",children:[(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Real Time Protection"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Ransomware Protection"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," USB Protection"]}),(0,f.jsxs)("p",{className:"text-[#071D2B] text-[14px] font-normal flex items-center gap-2",children:[(0,f.jsx)(m.CMH,{className:"w-[12px] h-[12px] text-[#31BF5C]"})," Temp Files Cleaner"]}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Website Blocker"]}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Webcam Protection"]}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Advertise Blocker (Phishing and Malicious"]}),(0,f.jsx)("p",{className:"ml-[20px] text-[#9DA9B0] text-[14px] font-normal",children:"Website Protection)"}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Privacy Cleaner"]}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Wifi Scanner"]}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Data Encryption"]}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Data Recovery"]}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Backup Manager"]}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Game Booster"]}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Registry Cleaner"]}),(0,f.jsxs)("p",{className:"text-[#9DA9B0] text-[14px] font-normal flex items-center gap-3",children:[(0,f.jsx)(d.jZb,{className:"w-[8px] h-[8px]"})," Registry Optimizer"]})]})]})]}),(0,f.jsxs)("div",{className:"w-full flex mt-10 flex-col items-center gap-8 mb-20",children:[(0,f.jsx)("div",{className:"w-[1150px]",children:(0,f.jsx)("img",{src:h,alt:"",className:"h-[60px]"})}),(0,f.jsx)("div",{className:"text-[#374151] text-[14px] font-normal w-[1150px]",children:"Explore our FAQ section to discover detailed answers to the most frequently asked questions."}),(0,f.jsx)("div",{className:"w-full flex flex-col justify-center items-center text-[#374151] font-normal text-[16px]",children:Object.entries(u).map((e=>{let[t,{category:s,questions:a}]=e;return(0,f.jsxs)("div",{className:"mb-4 w-[1150px]",children:[(0,f.jsxs)("button",{onClick:()=>(e=>{T(M===e?null:e),console.log("category",e),E(null)})(s),className:"w-full text-left border p-4  rounded-md flex justify-between hover:bg-gray-100",children:[s,(0,f.jsx)("div",{className:"text-[#374151]",children:M===s?(0,f.jsx)(m.Ucs,{}):(0,f.jsx)(m.Vr3,{})})]}),M===s&&(0,f.jsx)("div",{className:"mt-2 border rounded-md bg-gray-50",children:a.map(((e,t)=>(0,f.jsxs)("div",{className:"border-b last:border-b-0",children:[(0,f.jsxs)("button",{onClick:()=>{var e;E(W===(e=t)?null:e)},className:"w-full text-left p-4  flex justify-between bg-white hover:bg-gray-100",children:[e.question,(0,f.jsx)("div",{className:"text-[#374151]",children:W===t?(0,f.jsx)(m.Ucs,{}):(0,f.jsx)(m.Vr3,{})})]}),W===t&&(0,f.jsx)("div",{className:"p-4 bg-gray-50 text-gray-700",children:e.answer})]},t)))})]},t)}))})]})]})}}}]);
//# sourceMappingURL=61.78320779.chunk.js.map