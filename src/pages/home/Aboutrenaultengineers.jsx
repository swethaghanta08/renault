import React from "react";

const ExperienceSection = () => {
    return (
        <div className="w-full py-6 px-4 md:py-10 lg:mt-[-30px] md:px-6 lg:py-12 lg:px-8 xl:py-16 xl:px-16">
            <div className="flex flex-col items-start  mx-auto max-w-full md:max-w-4xl lg:max-w-6xl lg:flex-row xl:max-w-7xl">
                {/* Left Content (Text Section) */}
                <div className="w-full mb-6 md:mb-8  lg:pr-8 xl:pr-12">
                    <p className="font-semibold text-[#E4492E] text-[18px] md:text-[20px] lg:text-[16px] xl:text-[20px] font-['Monda']">
                        About Renault Engineers
                    </p>

                    <h2 className="font-bold text-black text-[24px] leading-[32px] md:text-[36px] md:leading-[44px] lg:text-[28px] lg:leading-[38px] xl:text-[48px] xl:leading-[60px] mt-2 font-['Monda']">
                        Experienced & Quality More Than 20 Years
                    </h2>

                    <p className="text-[#827E7D]    text-[16px] leading-[24px] md:text-[20px] md:leading-[28px] lg:text-[16px] lg:leading-[24px] xl:text-[20px] xl:leading-[28px] mt-3 md:mt-4 font-['Manrope']">
                      Adverse environmental conditions, high rotational speed and pressure levels place demanding requirements on sealing technology employed in the process industry. 
                         Reanault Engineers has proven itself with its heavy-duty mechanical seals with innovative and tailor made sealing solutions guaranteeing longer service
                    </p>

                    {/* Features (Expert Engineer & Quality Material) */}
                    <div className="flex flex-col md:flex-row justify-start  mt-6 md:gap-6 lg:gap-4 xl:gap-12">
                        {/* Expert Engineer */}
                        <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-0">
                            <img src="/assets/Homepage/Aboutrenalutengineers/Engineering.png"
                                alt="Expert Engineer"
                                className="w-8 h-8 mt-1" />
                            <div>
                                <h3 className="text-[16px] font-bold md:text-[20px] lg:text-[16px] xl:text-[20px] font-['Manrope']">
                                    Expert Engineer
                                </h3>
                                <p className="text-[14px] text-[#827E7D] mt-1 md:text-[16px] lg:text-[14px] xl:text-[14px] max-w-[240px] font-['Manrope']">
                                    Experienced engineers committed to innovation, precision, and excellence in every project.
                                </p>
                            </div>
                        </div>

                        {/* Quality Material */}
                        <div className="flex items-start gap-3 md:gap-4">
                            <img src="/assets/Homepage/Aboutrenalutengineers/Quality.png"
                                alt="Quality Material"
                                className="w-8 h-8 mt-1" />
                            <div>
                                <h3 className="text-[16px] font-bold md:text-[20px] lg:text-[16px] xl:text-[20px] font-['Manrope']">
                                    Quality Material
                                </h3>
                                <p className="text-[14px] text-[#827E7D] mt-1 md:text-[16px] lg:text-[14px] xl:text-[14px] max-w-[240px] font-['Manrope']">
                                    Committed to using high-quality materials for durability and excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Images */}
                {/* <div className="flex w-full gap-1 md:gap-2 lg:w-1/2 lg:gap-2 xl:gap-2"> */}
                    {/* Left Column (Stacked Images) */}
                    {/* <div className="flex flex-col gap-1 w-1/2"> */}
                        {/* Experience Badge */}
                        {/* <div className="relative flex items-center justify-center text-white text-center bg-cover bg-center h-[120px] md:h-[203px] lg:h-[150px] xl:h-[203px]"
                            style={{ backgroundImage: "url('/assets/Homepage/Aboutrenalutengineers/1st iamge.png')" }}>
                            <div className="absolute inset-0 bg-[#E4492E] bg-opacity-80 backdrop-blur-sm"></div>
                            <div className="relative z-10">
                                <h2 className="text-[36px] font-bold md:text-[36px] lg:text-[36px] xl:text-[48px] font-['Manrope']">20</h2>
                                <p className="text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] font-['Manrope']">Years of Experience</p>
                            </div>
                        </div> */}

                        {/* Engineer Working Image */}
                        {/* <img src="/assets/Homepage/Aboutrenalutengineers/2ndimage.png"
                            alt="Engineer Working"
                            className="object-cover w-full h-[120px] md:h-[240px] lg:h-[220px] xl:h-[309px]" />
                    </div> */}

                    {/* Right Column (Large Image) */}
                    {/* <div className="w-1/2">
                        <img src="/assets/Homepage/Aboutrenalutengineers/3rdimage.png"
                            alt="Industrial Worker"
                            className="object-cover w-full h-[244px] md:h-[451px] lg:h-[380px] xl:h-[520px]" />
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default ExperienceSection;   