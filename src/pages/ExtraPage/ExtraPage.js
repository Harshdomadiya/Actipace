import React from 'react'
import section from './image/Frame 857.svg'
import comp from './image/comp.svg'
import actipace_a from "../home/image/actipace-a.png"


  

const handleTS = async(e)=>{
        e.preventDefault()
        const anchor = document.createElement("a");
        anchor.href="https://actipace.com/download/ActipaceTotalSecuritySetup.zip";
        anchor.download="file.zip";
        anchor.click();
}
const handleIS = async(e)=>{
        e.preventDefault()
        const anchor = document.createElement("a");
        anchor.href="https://actipace.com/download/ActipaceInternetSecuritySetup.zip";
        anchor.download="file.zip";
        anchor.click();
}
const handleBD = async(e)=>{
        e.preventDefault()
        const anchor = document.createElement("a");
        anchor.href="https://actipace.com/download/ActipaceBasicDefenseSetup.zip";
        anchor.download="file.zip";
        anchor.click();
}

function ExtraPage() {
        




    return (
        <div>
            <div className="w-full mt-10 flex flex-col items-center">
                <img src={actipace_a} alt="a" className="absolute ml-[1268px] w-[250px] h-[350px] mb-[60px]" />
                <div className="w-[700px] h-[150px]">
                    <img className="w-[700px]" src={section} alt="Section"/>
                </div>
                <div className="w-[600px] text-center text-[#071D2B] font-[400px] text-[16px]">
                    <p className="inline-block">
                        We believe everyone has the right to be safe online, which is why we offer our
                        award-winning free antivirus to millions of people around the world.
                    </p>
                </div>
            </div>

            <div className="w-full flex justify-center mt-10 gap-x-4">
                <div className="w-[450px] h-[800px] bg-[#F3F4F6] flex flex-col items-center pt-28 gap-8 rounded-[16px]">
                    <div className="w-[200px] text-center text-[28px] font-[400px]">
                        <h1>Antipace Total Security</h1>
                    </div>
                    <div className="h-[50px] w-[150px] bg-[#071D2B] flex justify-center rounded-[28px] font-[500px]">
                        <button className="text-white text-[15px]" onClick={(e)=>handleTS(e)}>Download</button>
                    </div>
                    <div>
                        <img className="w-[400px] h-[240px]" src={comp} alt=""/>
                    </div>
                </div>

                <div className="w-[450px] h-[800px]  flex flex-col justify-center gap-y-4">

                    <div className="h-[400px] w-full bg-[#F3F4F6] flex flex-col items-center justify-between rounded-[16px] p-4">
                        <div className="w-[200px] text-center">
                            <h1 className="text-2xl leading-snug break-words">
                                Actipace Internet Security
                            </h1>
                        </div>
                        <div className="h-[50px] w-[130px] bg-[#071D2B] flex items-center justify-center rounded-[28px]">
                        <button className="text-white text-[14px] font-[500px]" onClick={(e)=>handleIS(e)}>
                                Download
                            </button>
                        </div>
                        <div>
                            <img className="w-[300px] h-[200px]" src={comp} alt="Computer Display"/>
                        </div>
                    </div>

                    {/* Actipace Antivirus Basic Defense */}
                    <div className="h-[400px] w-full bg-[#F3F4F6] flex flex-col items-center justify-between rounded-[16px] p-4">
                        <div className="w-[200px] text-center">
                            <h1 className="text-2xl leading-snug break-words">
                                Actipace Antivirus Basic Defense
                            </h1>
                        </div>
                        <div className="h-[50px] w-[130px] bg-[#071D2B] flex items-center justify-center rounded-[28px]">
                         <button className="text-white text-[14px] font-[500px]" onClick={(e)=>handleBD(e)}>
                                Download
                            </button>
                        </div>
                        <div>
                            <img className="w-[300px] h-[200px]" src={comp} alt="Computer Display"/>
                        </div>
                    </div>
                </div>

            </div>


            <div className="flex flex-col justify-center items-center m-12 ">
                <div className="m-4">
                    <p className="text-[50px] font-[700px]">Hardware Requirement</p>
                </div>
                <div className="text-center space-y-2 font-normal text-[#9DA9B0] text-[20px]">
                <p>1GHz processer</p>
                <p>1GB RAM</p>
                <p>300 MB free space on HDD</p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mb-12">
                <div className="m-4">
                    <p className="text-[50px] font-[700px]">Software Requirement</p>
                </div>
                <div className="text-center space-y-2 font-normal text-[#9DA9B0] text-[20px]">
                    <p>Windows 11 (32-bit & 64-bit)</p>
                    <p>Windows 10 (32-bit & 64-bit)</p>
                    <p>Windows 8.1 (32-bit & 64-bit)</p>
                    <p>Windows 8 (32-bit & 64-bit)</p>
                    <p>Windows 7 (32-bit & 64-bit)</p>
                    <p>Windows XP (32-bit & 64-bit)</p>
                </div>
            </div>
           


        </div>
    )
}

export default ExtraPage;