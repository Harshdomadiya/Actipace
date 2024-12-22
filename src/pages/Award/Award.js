import React from "react";
import Frame from "./image/Frame 840.svg";

function Award() {
    return (
        <div className="h-[90vh]">

            <section
                className="relative h-1/2 md:h-1/2 bg-cover bg-center flex items-center justify-center text-center"
                style={{
                  backgroundImage: `url('${Frame}')`, // Dynamic URL 
                }}
            >
                <div className="bg-[#071D2B] bg-opacity-[20%] w-full h-full absolute top-0 left-0"></div>
                <div className="relative z-10 text-white px-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
                        Awards & Recognition
                    </h1>
                    <p className="font-normal text-l max-w-3xl mx-auto px-4 w-[670px]">
                        We know the importance of what we protect. That’s why we welcome outside
                        evaluations of all our products – so you don’t just have to take our word for it.
                    </p>
                </div>
            </section>


            <section className="py-16 sm:py-24 bg-white text-center flex flex-col items-center justify-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                    Top PC and Mac security awards
                </h2>
                <p className="font-normal text-l max-w-3xl mx-4 md:mx-auto">
                    Our flagship security software keeps getting faster and easier to use, while
                    still giving best-in-class protection that won’t slow you down.
                </p>
            </section>
        </div>
    );
}

export default Award;