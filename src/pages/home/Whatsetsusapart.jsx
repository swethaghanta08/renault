import React from 'react';

const WhatSetsUsApartSection = () => {
    return (
        <div className="flex flex-col items-center px-4 lg:h-[450px] xl:h-[504px] lg:mx-auto xl:mx-auto lg:mt-[50px] xl:mt-[180px] lg:w-full xl:w-full lg:max-w-[1024px] xl:max-w-[1440px] lg:px-4 xl:px-6 lg:bg-[#F4F4F4] xl:bg-[#F4F4F4] relative">
            
            {/* Content Section */}
            <div className="flex flex-col sm:flex-col md:flex-row md:items-center md:gap-4 lg:w-full xl:w-full lg:max-w-[900px] xl:max-w-[1300px] lg:items-center xl:items-center lg:gap-0 xl:gap-16">
                
                {/* Image - Moves to Top on Small Screens, Right Side on Larger Screens */}
                <div className="w-full md:w-[320px] h-[320px] w-[300px] lg:w-[400px] xl:mt-[-120px] xl:w-[568px] h-[250px] w-[250px] md:h-[300px] lg:h-[400px] xl:h-[548px] bg-cover bg-no-repeat mx-auto md:order-2"
                    style={{ backgroundImage: `url('/assets/Homepage/whatsetsusapart/menimage.png')` }}>
                </div>

                {/* Left Content - Stays Left on Medium & Large Screens */}
                <div className="flex flex-col md:mt-12 lg:mt-[100px] xl:mt-[120px] md:w-[350px] lg:w-[450px] xl:w-[600px] text-center md:text-left">
                    <h3 className="text-[#E4492E] font-['Monda'] text-[18px] md:text-[17px] lg:text-[18px] xl:text-[20px] font-semibold">
                        What Sets Us Apart
                    </h3>
                    <h2 className="text-black font-['Monda'] text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-[40px] md:leading-[36px] lg:leading-[40px] xl:leading-[50px] mt-2">
                        Why We Stand Out in the Industry
                    </h2>
                    <p className="text-[#827E7D] font-['Manrope'] md:w-[370px] lg:w-[420px] xl:w-[650px] text-[18px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-normal leading-6 md:leading-6 lg:leading-6 xl:leading-7 mt-3 md:mt-4">
                        We provide exceptional financial services to a wide range of commercial and residential
                        properties for over 35 years, including large corporate environments. Sealing tech for
                        process industry Renault Engineers.
                    </p>
                </div>
            </div>

            {/* Pink Stats Section */}
            <div className="w-full lg:max-w-[900px] xl:max-w-[1300px] md:max-w-[700px] mx-auto mt-2 md:mt-0 lg:mt-[0px] xl:mt-[0px] bg-[#F7C7BE] py-6 md:py-8 lg:py-10 
                grid grid-cols-2 sm:grid-cols-2 md:flex md:flex-wrap md:justify-center md:gap-10 lg:gap-12 rounded-lg shadow-md">
                
                {/* Stat Items */}
                {[
                    { src: "/assets/Homepage/whatsetsusapart/client.png", label: "Satisfied Clients", count: "10+" },
                    { src: "/assets/Homepage/whatsetsusapart/team.png", label: "Expert Team", count: "06+" },
                    { src: "/assets/Homepage/whatsetsusapart/project.png", label: "Active Projects", count: "06+" },
                    { src: "/assets/Homepage/whatsetsusapart/awards.png", label: "Awards Winning", count: "06+" }
                ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="w-[60px] md:w-[50px] lg:w-[60px] xl:w-[68px] h-[60px] md:h-[50px] lg:h-[60px] xl:h-[68px] flex justify-center items-center bg-[#CF422A] rounded-full">
                            <img src={item.src} alt={item.label} className="w-[38px] md:w-[32px] lg:w-[38px] xl:w-[42px] h-[38px] md:h-[32px] lg:h-[38px] xl:h-[42px]" />
                        </div>
                        <h3 className="text-black font-['Monda'] text-[30px] md:text-[24px] lg:text-[30px] xl:text-[36px] font-bold leading-[40px] md:leading-[32px] lg:leading-[40px] xl:leading-[50px] mt-2">
                            {item.count}
                        </h3>
                        <p className="text-black font-['Manrope'] text-[16px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold leading-6 md:leading-5 lg:leading-6 xl:leading-7 text-center mt-2 w-[160px] md:w-[130px] lg:w-[160px] xl:w-[180px]">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatSetsUsApartSection;
