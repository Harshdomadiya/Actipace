import logo from "./Layer_1.svg";
import dash from "./Vector (1).svg"
import a from "./Frame 904.svg"
import comp from "./Group 76.svg"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { categories } from "../../services/Api";
import Subscription from "./Subscription";
import Devices from "./Devices";
import { useLocation, useNavigate } from "react-router-dom";

function UserDashboard() {
    const location = useLocation();
    const data = location.state; // Received data from navigation state
    console.log(data);

    const [Data, setData] = useState([]);
    const [time, setTime] = useState("");
    const [dev, setDev] = useState([]);

    useEffect(() => {
        // Initialize state only when `data` is available
        if (data) {
            setData(data.data || []); // Ensure it’s an array
            setTime(data.data?.[0]?.expiresAt ?? null); // Safeguard against missing data
            setDev(data.jsonResult?.licenses || []);
        }
    }, [data]); 
  

    return (
        <div className="flex bg-gray-200 w-[100vw] h-[100vh]">
            <div className="hidden lg:block w-[15%] bg-[#071D2B]  lg:flex-col items-center ">                               
                <div className="flex mt-10 gap-x-2 ml-6">
                    <div className="flex justify-center items-center">
                        <img className="h-[15px]" alt="dash" src={dash}/>
                    </div>
                    <p className="text-white">Dashboard</p>
                </div>
            </div>


            <div className="w-full mb-16">
                <div className="flex-col m-10">
                    {Data.length > 0 && (
                    <>
                    <div>
                        <h1 className="font-bold text-2xl">My Subscriptions</h1>
                    </div>
                    </>
                    )}
                    {
                        Data.map((data,items)=>(
                            <Subscription  expiresAt={data.expiresAt} name ={data.software.name} devices={data.softwarePlan.devices} />
                        ))
                    }

                    <div className="my-10">
                        <h1 className="font-bold text-2xl ">My Devices</h1>
                    </div>

                    {/* {/map/} */}
                    <div className="flex flex-wrap gap-5">
                    {
                        dev.map((data,items)=>(
                            <Devices expiresAt={time} licenseKey={data.licenseKey} computerName={data.computerName} expiry={data.expiry}/>
                        ))
                    }
                    </div>
                   
                    </div>
                </div>

        </div>
    )
}

export default UserDashboard;