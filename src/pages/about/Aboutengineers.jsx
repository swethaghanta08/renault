
const AboutEngineersSection = () => {
    return (
        <div className="flex flex-col lg:mt-[100px] md:mt-[50px] mt-[30px]  lg:flex-row items-center gap-[48px] justify-center max-w-[1440px] mx-auto py-[20px] px-[16px] xl:px-[36px]">
            {/* Content - Moves to top on small and medium screens */}
            <div className="order-1 lg:order-2 text-center sm:text-left xl:max-w-[660px] lg:max-w-[500px] md:max-w-[680px] lg:mt-[-40px] xl:mt-[0px] lg:ml-[100px] xl:ml-[170px]">
                <p className="text-[#E4492E] font-[Monda] text-[18px] sm:text-[20px] font-semibold">
                    About Renault Engineers
                </p>
                <h1 className="text-black font-[Monda]   text-[28px] sm:text-[36px] lg:text-[30px] xl:text-[48px] font-bold leading-[34px] sm:leading-[42px] lg:leading-[40px] xl:leading-[60px] mt-2">
                    Engineering Solutions That Make a Difference
                </h1>
                <p className="text-[#827E7D] font-[Manrope] text-start mt-2 text-[16px] lg:text-[16px] xl:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] sm:mt-4 lg:mt-1 xl:mt-4">
                  Renault engineers  mechanical seals are used on a variety of rotating equipment, including pumps, compressors, mixers, steam turbines and other speciality equipment, primarily in the oil and gas, pharmaceutical, chemical processing, mineral and ore processing and general industries. mechanical seal spare parts Mechanical Seal Support System
                </p>
                <p className="text-[#827E7D] font-[Manrope] text-start text-[16px] lg:text-[16px] xl:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] mt-4 lg:mt-1 xl:mt-4">
                    Our legacy of 20 years has driven us constantly to grow with the
                    challenging needs of superior{" "}
                    <span className="text-[#E4492E]">renault engineers</span>.
                </p>
                <p className="text-[#827E7D] font-[Manrope] text-start text-[16px] lg:text-[16px] xl:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] mt-4 lg:mt-1 xl:mt-4">
                    At <span className="text-[#E4492E]">Renault engineers</span>, our engineering
                    specialists possess extensive experience in application expertise and
                    troubleshooting.
                </p>
                <p className="text-[#827E7D] font-[Manrope] text-start text-[16px] lg:text-[16px] xl:text-[20px] font-normal leading-[24px] sm:leading-[28px] tracking-[0.4px] :mt-4 lg:mt-1 xl:mt-4">
                    Products guarantee highest quality standards & application know-how with full service to its customers.
                </p>
            </div>

            {/* Images - Moves below content on small and medium screens */}
            <div className="order-2 lg:order-1 aboutmarginleft relative flex flex-col sm:items-center ml-[-70px] md:ml-[-140px] lg:ml-[0px] lg:flex-row gap-4">
                {/* Main Large Image */}
                <img
                    src="/assets/Aboutpage/Aboutrenaultengineers/image1.png"
                    alt="Main Image"
                    className="w-[220px] width h-[300px]  sm:w-[323px] sm:h-[361px] md:w-[536px] md:h-[544px] lg:w-[350px] lg:h-[381px] xl:w-[486px] xl:h-[554px] flex-[1_0_0]"
                />

                {/* Top Right Image (Absolute Positioning) */}
                <img
                    src="/assets/Aboutpage/Aboutrenaultengineers/image2.png"
                    alt="Top Right Image"
                    className="w-[120px] xl:mr-[20px] image2 image22 width1 h-[120px] ml-[32px] sm:w-[220px] sm:h-[215px] md:w-[346px] md:h-[329px] lg:w-[250px] lg:h-[247px] xl:w-[332px] xl:h-[329px] absolute top-[-25px] sm:top-[-45px] left-[140px] sm:left-[160px] md:left-auto md:right-[-130px] lg:right-[-115px] xl:right-[-145px]"
                />

                {/* Bottom Box - 30 Years Experience */}
                <div
                    className="flex left-[160px] image33 image3 sm:left-[205px] md:left-auto justify-center items-center 
                       bg-[#E4492E] backdrop-blur-sm w-[80px] h-[150px] ml-[50px] 
                        sm:h-[190px] sm:ml-[125px] md:w-[120px] md:h-[260px] lg:w-[104px] lg:h-[180px] 
                        xl:h-[270px] width2 absolute bottom-0 md:right-[-125px] lg:right-[-110px] 
                        overflow-hidden"
                    style={{
                        backgroundImage: "url('/assets/Homepage/Aboutrenalutengineers/1st iamge.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundBlendMode: 'overlay'
                    }}
                >
                    <div className="absolute transform -rotate-90 flex flex-col items-center">
                        <p className="text-white text-center font-[Manrope] text-[28px] sm:text-[36px] italic font-bold leading-[28px] sm:leading-[36px]">
                            20
                        </p>
                        <p className="text-white text-center font-[Manrope] text-[14px] sm:text-[16px] w-[100px] sm:w-[149px] italic font-bold leading-[20px] sm:leading-[24px] mt-1">
                            Years of Experience
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutEngineersSection;