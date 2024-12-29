import React, { useState } from "react";
import Card from "../slider/Card";
import Data from "../slider/Data";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

const WhyChooseUs = ({t1,t2}) => {

    const [currentIndex, setCurrentIndex] = useState(0);


    const totalGroups = Math.ceil(Data.length / 3);

    const prevHandler = () => {
        setCurrentIndex(
            (currentIndex - 3 + Data.length) % Data.length
        );
    };

    const nextHandler = () => {
        setCurrentIndex(
            (currentIndex + 3) % Data.length
        );
    };

    const visibleCards = [
        Data[currentIndex],
        Data[(currentIndex + 1) % Data.length],
        Data[(currentIndex + 2) % Data.length],
    ];


    const activeGroupIndex = Math.floor(currentIndex / 3);

    return (
        <div className="flex flex-col items-center justify-between mt-14 relative h-[700px] w-[970px] ">
            <div className="flex w-full justify-between item-center">
            <h1 className="text-[40px] font-semibold mb-6 text-[#151C26] font-roboto "><span className="text-[#31BF5C]">{t1} </span>{t2}</h1>

            <div className="flex gap-4">
                <button
                    onClick={prevHandler}
                    className="w-[50px] h-[50px] bg-[#31BF5C] flex justify-center items-center text-[#FFFFFF]"
                >
                   <FiArrowLeft className="w-[30px] h-[30px]"/>
                </button>
                <button
                    onClick={nextHandler}
                    className="w-[50px] h-[50px] bg-[#31BF5C] flex justify-center items-center text-[#FFFFFF]"
                >
                    <FiArrowRight className="w-[30px] h-[30px]"/>
                </button>
            </div>

            </div>

            <div className="flex mt-8 gap-7">
                {visibleCards.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>


            <div className="flex space-x-2 mt-6 mb-4">
                {Array.from({ length: totalGroups }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-10 h-1 rounded-lg ${
                            index === activeGroupIndex ? "bg-green-500" : "bg-gray-500"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;