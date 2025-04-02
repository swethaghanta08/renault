import React from "react";

const ExperienceSection = () => {
    return (
        <div className="flex flex-col items-center px-4 py-6 w-full max-w-full md:flex md:flex-col md:items-center md:px-14 md:py-10 md:max-w-[768px] md:mx-auto 
                        lg:flex lg:flex-row lg:px-10 lg:items-center lg:mx-auto lg:py-12 lg:max-w-[1024px] 
                        xl:flex xl:flex-row xl:px-16 xl:items-center xl:mx-auto xl:py-16 xl:max-w-[1440px]">

            {/* Left Content (Text Section) */}
            <div className="w-full mb-6  md:w-full md:mb-8 lg:w-[48%] lg:flex lg:flex-col lg:gap-4 xl:w-1/2 xl:flex xl:flex-col">
                <p className="w-full text-[18px] font-semibold text-[#E4492E] text-left  md:w-full md:text-[20px] md:font-semibold md:text-[#E4492E] md:text-left 
                              lg:text-left lg:text-[#E4492E] lg:font-[Monda] lg:text-[16px] lg:font-semibold 
                              xl:text-[#E4492E] font-[Monda] xl:text-[20px] xl:font-semibold">
                    About Renault Engineers
                </p>

                <h1 className="md:text-[36px] md:w-[463px] w-[288px]  text-black font-[Monda] text-[24px] font-bold leading-[32px] self-stretch
                               md:leading-[44px] md:font-bold md:text-black md:w-full md:text-left
                               lg:text-black lg:font-[Monda] lg:text-[28px] lg:w-[400px] lg:font-bold lg:leading-[38px] 
                               xl:text-black xl:font-[Monda] xl:w-[632px] xl:text-[48px] xl:font-bold xl:leading-[60px]">
                    Experienced & Quality More Than 30 Years
                </h1>

                <p className="paragraph paragraph1 md:text-[20px] text-[16px]  text-[#827E7D] md:leading-[28px] md:text-[#827E7D] md:mt-4 md:w-full md:text-left
                              lg:text-[#827E7D] lg:font-[Manrope] font-[Manrope] lg:text-[16px] lg:w-[450px] lg:leading-[24px] lg:mt-2 
                              xl:text-[#827E7D] xl:font-[Manrope] xl:text-[20px] xl:w-[632px] xl:leading-[28px] xl:mt-4">
                    Adverse environmental conditions, high rotational speed, and pressure levels
                    place demanding requirements on sealing technology employed in the process industry.
                    Sealmatc has proven itself with its heavy-duty mechanical seals with innovative and
                    tailor-made sealing solutions, guaranteeing longer service.
                </p>

                {/* Features (Expert Engineer & Quality Material) */}
                <div className="md:flex  md:mt-6 md:gap-6 md:w-full 
                                lg:flex lg:flex-row lg:mt-4 lg:gap-6 
                                xl:flex xl:flex-row xl:mt-6 xl:gap-12">

                    {/* Expert Engineer */}
                    <div className="flex mt-[10px] md:mt-[0px] md:flex md:items-start md:gap-4 md:w-full 
                                    lg:flex lg:items-start lg:gap-3 xl:flex xl:items-start xl:gap-4">
                        <img src="/assets/Homepage/Aboutrenalutengineers/Engineering.png"
                            alt="Expert Engineer"
                            className="md:w-[32px] md:h-[32px] w-[32px] h-[32px] lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                        <div>
                            <h3 className="text-[16px] font-bold font-[Manrope] md:text-[20px] md:font-bold lg:text-[16px] lg:font-bold xl:text-[20px] xl:font-bold">
                                Expert Engineer
                            </h3>
                            <p className="ml-[-30px] mt-[5px] text-[14px] font-[Manrope] text-[#827E7D] md:text-[16px] md:mt-[5px] md:ml-[-50px] xl:ml-[-50px] lg:ml-[-40px] md:text-[#827E7D] md:w-full 
                                          lg:w-[204px] xl:w-[238px] lg:text-[14px] xl:text-[14px]">
                                Experienced engineers committed to innovation, precision, and excellence in every project.
                            </p>
                        </div>
                    </div>

                    {/* Quality Material */}
                    <div className="flex mt-[10px] md:mt-[0px] md:flex md:items-start md:gap-4 md:w-full 
                                    lg:flex lg:items-start lg:gap-3 xl:flex xl:items-start xl:gap-4">
                        <img src="/assets/Homepage/Aboutrenalutengineers/Quality.png"
                            alt="Quality Material"
                            className="md:w-[32px] w-[32px] h-[32px] md:h-[32px] lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                        <div>
                            <h3 className="text-[16px] font-bold font-[Manrope] md:text-[20px] md:font-bold lg:text-[16px] lg:font-bold xl:text-[20px] xl:font-bold">
                                Quality Material
                            </h3>
                            <p className="ml-[-30px] mt-[5px] font-[Manrope]  text-[14px] text-[#827E7D] md:text-[16px] md:ml-[-40px] xl:ml-[-50px] md:mt-[5px] lg:ml-[-40px] md:text-[#827E7D] md:w-full 
                                          lg:w-[188px] xl:w-[238px] lg:text-[14px] xl:text-[14px]">
                                Committed to using high-quality materials for durability and excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Images */}
            <div className="flex md:flex  md:items-center gap-1 md:gap-2 md:w-full 
                            lg:flex lg:flex-row lg:w-[50%] lg:gap-2 lg:ml-10 
                            xl:flex xl:w-1/2 xl:gap-2 xl:ml-12 xl:justify-end">

                {/* Left Column (Stacked Images) */}
                <div className=" md:flex md:flex-col md:items-center md:gap-1 
                                lg:flex lg:flex-col lg:gap-2 
                                xl:flex xl:flex-col xl:gap-1">

                    {/* Experience Badge */}
                    <div className="image1 image11 yearsimage1   relative flex items-center justify-center text-white text-center p-4 
                                    bg-cover bg-center md:w-[336px] md:h-[203px]
                                    lg:h-[150px] lg:w-[220px] xl:h-[203px] xl:w-[312px]"
                        style={{ backgroundImage: "url('/assets/Homepage/Aboutrenalutengineers/1st iamge.png')" }}>

                        <div className="absolute inset-0 bg-[#E4492E] bg-opacity-80 backdrop-blur-sm"></div>

                        <div className="relative">
                            <h2 className="md:text-[36px] font-[Manrope] font-bold xl:text-[48px]">30</h2>
                            <p className="md:text-[16px] font-[Manrope] xl:text-[18px]">Years of Experience</p>
                        </div>
                    </div>

                    {/* Engineer Working Image */}
                    <img src="/assets/Homepage/Aboutrenalutengineers/2ndimage.png"
                        alt="Engineer Working"
                        className="object-cover image2 yearsimage2 image22 mt-[4px] md:w-[336px] md:h-[240px] 
                                    lg:w-[220px] lg:h-[220px] 
                                    xl:w-[312px] xl:h-[309px]" />
                </div>

                {/* Right Column (Large Image) */}
                <img src="/assets/Homepage/Aboutrenalutengineers/3rdimage.png"
                    alt="Industrial Worker"
                    className="image3 image33 yearsimage3 object-cover h-[244px]  md:w-[336px] md:h-[451px] 
                                lg:w-[220px] lg:h-[380px] 
                                xl:w-[312px] xl:h-[520px]" />
            </div>
        </div>
    );
};

export default ExperienceSection;