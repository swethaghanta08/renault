import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="w-full flex justify-center"> 
    <div className="xl:max-w-[1440px] lg:max-w-[1024px] w-full flex flex-col items-center px-7 py-16">
      {/* Heading Section */}
      <div className="flex flex-col items-center  mb-12">
        <h3 className="text-[#E4492E] text-center font-['Monda'] text-[20px] font-semibold w-full">
          Why Choose Us
        </h3>
        <h2 className="text-black text-center font-['Monda'] text-[25px] lg:text-[48px] font-bold md:leading-[60px] w-full">
          Excellence You Can Trust
        </h2>
        <p className="text-[#827E7D] text-center font-['Manrope'] lg:text-[20px] font-normal leading-[28px] md:w-[680px] lg:w-[900px] xl:w-[1200px]  mt-4">
          We provide exceptional Financial services to a wide range of commercial and residential properties for over 35 years, including large corporate environments. Sealing tech for process industry Renault Engineers
        </p>
      </div>

      {/* Features Layout - Using grid instead of absolute positioning */}
      <div className="w-full md:ml-[30px] lg:ml-[50px] xl:ml-[0px]  max-w-[1300px]">
        {/* For medium screens - zigzag pattern */}
        <div className="hidden md:block lg:hidden">
          {/* Item 1 - Left */}
          <div className="relative mb-[-80px]">
            <img src="/assets/Homepage/whychooseus/lines.png" alt="Red Line" className="absolute left-0 mt-[-30px] w-[10px] h-[74px] z-10" />
            <div className="pl-4">
              <div className="w-[82px] h-[85px] bg-[#DFDFDF] flex items-center justify-center relative">
                <span className="text-black text-center font-['Lora'] text-[64px] mb-[100px] font-bold leading-[96px] relative z-20">01</span>
                <div className="absolute mr-[10px] right-[-8px] top-[0px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
              </div>
              <div className="ml-[50px] mt-[-55px] relative z-20">
                <h4 className="text-black font-['Manrope'] text-[18px] xl:text-[24px] font-bold uppercase">
                  GLOBAL SALES & SERVICE
                </h4>
                <p className="text-[#827E7D] w-[254px] font-['Manrope'] text-[16px] font-normal leading-normal">
                  Our aim at Sealmatic is to ensure utmost satisfaction of our customers
                </p>
              </div>
            </div>
          </div>

          {/* Item 2 - Right */}
          <div className="relative ml-auto mb-0" style={{maxWidth: "350px"}}>
            <img src="/assets/Homepage/whychooseus/lines (1).png" alt="Red Line" className="absolute left-0 top-[0px] w-[10px] h-[74px] z-10" />
            <div className="pl-4">
              <div className="w-[82px] h-[85px] bg-[#DFDFDF] flex items-center justify-center relative">
                <span className="text-black text-center font-['Lora'] text-[64px] font-bold mb-[100px] leading-[96px] relative z-20">02</span>
                <div className="absolute left-[1px] top-[75px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
              </div>
              <div className="mt-[-65px] relative z-20">
                <h4 className="max-w-[348px] ml-[60px] text-left font-['Manrope'] text-[18px] xl:text-[24px] font-bold uppercase text-[#E4492E]">
                  HIGH QUALITY MANUFACTURING
                </h4>
                <p className="text-[#827E7D] ml-[60px] font-['Manrope'] text-[16px] font-normal leading-normal w-[254px]">
                  Manufacturing high-quality sealing systems at down to mechanical precision.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 - Left */}
          <div className="relative mb-[-90px]">
            <div className="flex items-center gap-4">
              <img
                src="/assets/Homepage/whychooseus/lines (1).png"
                alt="Red Line"
                className="w-[10px] h-[74px] mt-[-90px] z-10"
              />
              <div className="w-[82px] h-[85px] bg-[#DFDFDF] flex items-center justify-center relative">
                <span className="text-black text-center font-['Lora'] mb-[100px] text-[64px] mr-[10px] font-bold leading-[96px] relative z-20">03</span>
                <div className="absolute left-[70px] top-[-0px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
              </div>
            </div>
            <div className="mt-[-60px] ml-[50px] relative z-20">
              <h4 className="text-black font-['Manrope'] text-[18px] xl:text-[24px] font-bold uppercase w-[230px]">
                CONTINUOUS TRAINING
              </h4>
              <p className="text-[#827E7D] font-['Manrope'] text-[16px] font-normal leading-normal w-[254px]">
                To maintain our position at the forefront of technological innovation
              </p>
            </div>
          </div>

          {/* Item 4 - Right */}
          <div className="relative ml-auto mb-[50px] " style={{maxWidth: "350px"}}>
            <img src="/assets/Homepage/whychooseus/lines.png" alt="Red Line" className="absolute left-0 mt-[10px] w-[10px] h-[74px] z-10" />
            <div className="pl-4">
              <div className="w-[82px] h-[85px] bg-[#DFDFDF] flex items-center justify-center relative">
                <span className="text-black text-center font-['Lora'] mr-[15px] text-[64px] mb-[100px] font-bold leading-[96px] relative z-20">04</span>
                <div className="absolute right-[-0px] top-[0px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
              </div>
              <div className="mt-[-55px] relative z-20">
                <h4 className="text-black font-['Manrope'] ml-[30px] text-[17px] xl:text-[24px] font-bold uppercase">
                  LONG STANDING EXPERIENCE
                </h4>
                <p className="text-[#827E7D] w-[254px] ml-[30px] font-['Manrope'] text-[16px] font-normal leading-normal">
                  A collected knowledge of many years in the sealing industry.
                </p>
              </div>
            </div>
          </div>

          {/* Item 5 - Left */}
          <div className="relative mb-[-70px]">
            <img src="/assets/Homepage/whychooseus/lines (1).png" alt="Red Line" className="absolute left-0 top-0 w-[10px] h-[74px] z-10" />
            <div className="pl-4">
              <div className="w-[82px] h-[85px] bg-[#DFDFDF] flex items-center justify-center relative">
                <span className="text-black text-center font-['Lora'] text-[64px] mb-[100px] font-bold leading-[96px] relative z-20">05</span>
                <div className="absolute left-[1px] top-[75px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
              </div>
              <div className="mt-[-60px] ml-[10px] relative z-20">
                <h4 className="text-black font-['Manrope'] text-[18px] xl:text-[24px] ml-[40px] font-bold uppercase max-w-[348px]">
                  SEALING TECHNOLOGY
                </h4>
                <p className="text-[#827E7D] ml-[40px] font-['Manrope'] text-[16px] font-normal leading-normal w-[254px]">
                  Sealmatic designs and manufactures seals and associated products.
                </p>
              </div>
            </div>
          </div>

          {/* Item 6 - Right */}
          <div className="relative ml-auto" style={{maxWidth: "350px"}}>
            <div className="flex items-center gap-4">
              <img
                src="/assets/Homepage/whychooseus/lines (1).png"
                alt="Red Line"
                className="w-[10px] h-[74px] mt-[-10px] z-10"
              />
              <div className="w-[82px] h-[85px] ml-[-10px] bg-[#DFDFDF] flex items-center justify-center relative">
                <span className="text-black text-center font-['Lora'] mb-[100px] text-[64px] mr-[10px] font-bold leading-[96px] relative z-20">06</span>
                <div className="absolute left-[70px] top-[-0px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
              </div>
            </div>
            <div className="mt-[-65px] ml-[50px] relative z-20">
              <h4 className="text-black font-['Manrope'] text-[18px] md:mt-[10px] lg:mt-[0px] xl:text-[24px] ml-[5px] font-bold uppercase w-[254px]">
                INTERNATIONAL STANDARDS
              </h4>
              <p className="text-[#827E7D] ml-[5px] font-['Manrope'] text-[16px] font-normal leading-normal w-[254px]">
                All critical raw material is brought in from the US, Germany and UK.
              </p>
            </div>
          </div>
        </div>

        {/* Original layout for large and extra-large screens */}
        <div className="grid grid-cols-1 hidden lg:block lg:grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="flex flex-col space-y-16">
            {/* Feature 1 */}
            <div className="relative">
              <img src="/assets/Homepage/whychooseus/lines.png" alt="Red Line" className="absolute left-0 mt-[-30px] w-[10px] h-[74px] z-10" />
              <div className="pl-4">
                <div className="w-[82px] h-[85px] bg-[#DFDFDF]  flex items-center justify-center relative">
                  <span className="text-black text-center font-['Lora'] text-[64px] mb-[100px] font-bold leading-[96px] relative z-20">01</span>
                  <div className="absolute mr-[10px] right-[-8px] top-[0px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
                </div>
                <div className="ml-[50px] mt-[-55px] relative z-20">
                  <h4 className="text-black font-['Manrope'] xl:text-[24px]  font-bold uppercase">
                    GLOBAL SALES & SERVICE
                  </h4>
                  <p className="text-[#827E7D]  font-['Manrope'] text-[16px] font-normal leading-normal">
                    Our aim at Sealmatic is to ensure utmost satisfaction of our customers
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="relative">
              <img src="/assets/Homepage/whychooseus/lines.png" alt="Red Line" className="absolute left-0 mt-[-30px] w-[10px] h-[74px] z-10" />
              <div className="pl-4">
                <div className="w-[82px] h-[85px] bg-[#DFDFDF] flex items-center justify-center relative">
                  <span className="text-black text-center font-['Lora'] mr-[15px] text-[64px] mb-[100px] font-bold leading-[96px] relative z-20">04</span>
                  <div className="absolute right-[-0px] top-[0px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
                </div>
                <div className="mt-[-55px] relative z-20">
                  <h4 className="text-black font-['Manrope'] ml-[30px] xl:text-[24px]  font-bold uppercase">
                    LONG STANDING EXPERIENCE
                  </h4>
                  <p className="text-[#827E7D]  ml-[30px] font-['Manrope'] text-[16px] font-normal leading-normal">
                    A collected knowledge of many years in the sealing industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col ml-[20px] space-y-16 mt-16">
            {/* Feature 2 */}
            <div className="relative">
              <img src="/assets/Homepage/whychooseus/lines (1).png" alt="Red Line" className="absolute left-0 top-0 w-[10px] h-[74px] z-10" />
              <div className="pl-4">
                <div className="w-[82px] h-[85px] bg-[#DFDFDF] flex items-center justify-center relative">
                  <span className="text-black text-center font-['Lora'] text-[64px] font-bold mb-[100px] leading-[96px] relative z-20">02</span>
                  <div className="absolute left-[1px] top-[75px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
                </div>
                <div className="mt-[-65px] relative z-20">
                  <h4 className="max-w-[348px] ml-[60px] text-left font-['Manrope'] xl:text-[24px] font-bold uppercase text-[#E4492E]">
                    HIGH QUALITY MANUFACTURING
                  </h4>
                  <p className="text-[#827E7D] ml-[60px] font-['Manrope'] text-[16px] font-normal leading-normal ">
                    Manufacturing high-quality sealing systems at down to mechanical precision.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="relative">
              <img src="/assets/Homepage/whychooseus/lines (1).png" alt="Red Line" className="absolute left-0 top-0 w-[10px] h-[74px] z-10" />
              <div className="pl-4">
                <div className="w-[82px] h-[85px] bg-[#DFDFDF] flex items-center justify-center relative">
                  <span className="text-black text-center font-['Lora'] text-[64px] mb-[100px] font-bold leading-[96px] relative z-20">05</span>
                  <div className="absolute left-[1px] top-[75px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
                </div>
                <div className="mt-[-60px] ml-[10px] relative z-20">
                  <h4 className="text-black font-['Manrope'] xl:text-[24px] ml-[40px]  font-bold uppercase max-w-[348px]">
                    SEALING TECHNOLOGY
                  </h4>
                  <p className="text-[#827E7D] ml-[40px] font-['Manrope'] text-[16px] font-normal leading-normal">
                    Sealmatic designs and manufactures seals and associated products.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex lg:flex-col md:flex-row  md:gap-[90px] lg:gap-[0px]   lg:ml-[20px] space-y-16 lg:mt-44">
            {/* Feature 3 */}
            <div className="relative">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/Homepage/whychooseus/lines (1).png"
                  alt="Red Line"
                  className="w-[10px] h-[74px] mt-[-90px] z-10"
                />
                <div className="w-[82px] h-[85px] ml-[-10px] bg-[#DFDFDF] flex items-center justify-center relative">
                  <span className="text-black text-center font-['Lora'] mb-[100px] text-[64px] mr-[10px] font-bold leading-[96px] relative z-20">03</span>
                  <div className="absolute left-[70px] top-[-0px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
                </div>
              </div>
              <div className="mt-[-60px] ml-[50px] relative z-20">
                <h4 className="text-black font-['Manrope'] xl:text-[24px]  font-bold uppercase md:w-[200px]  lg:max-w-[276px] xl:w-[300px]">
                  CONTINUOUS TRAINING
                </h4>
                <p className="text-[#827E7D] font-['Manrope'] text-[16px] font-normal leading-normal">
                  To maintain our position at the forefront of technological innovation
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="relative ">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/Homepage/whychooseus/lines (1).png"
                  alt="Red Line"
                  className="w-[10px] h-[74px]  mt-[-90px] z-10"
                />
                <div className="w-[82px] h-[85px] ml-[-10px] bg-[#DFDFDF] flex items-center justify-center relative">
                  <span className="text-black text-center font-['Lora'] mb-[100px] text-[64px] mr-[10px] font-bold leading-[96px] relative z-20">06</span>
                  <div className="absolute left-[70px] top-[-0px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
                </div>
              </div>
              <div className="mt-[-65px] ml-[50px] relative z-20">
                <h4 className="text-black font-['Manrope'] xl:text-[24px] md:text-[18px] md:ml-[5px] lg:ml-[0px] md:mt-[15px]  font-bold uppercase md:w-[254px] lg:w-[200px]   xl:w-[334px]">
                  INTERNATIONAL STANDARDS
                </h4>
                <p className="text-[#827E7D] ml-[5px] font-['Manrope'] text-[16px] font-normal leading-normal ">
                  All critical raw material is brought in from the US, Germany and UK.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Small screen layout (unchanged) */}
        <div className="block md:hidden">
          <div className="grid grid-cols-1 gap-12">
            {/* Feature 1 */}
            <div className="relative">
              <img src="/assets/Homepage/whychooseus/lines.png" alt="Red Line" className="absolute left-0 mt-[-30px] w-[10px] h-[74px] z-10" />
              <div className="pl-4">
                <div className="w-[82px] h-[85px] bg-[#DFDFDF]  flex items-center justify-center relative">
                  <span className="text-black text-center font-['Lora'] text-[64px] mb-[100px] font-bold leading-[96px] relative z-20">01</span>
                  <div className="absolute mr-[10px] right-[-8px] top-[0px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
                </div>
                <div className="ml-[50px] mt-[-55px] relative z-20">
                  <h4 className="text-black font-['Manrope'] text-[16px] font-bold uppercase">
                    GLOBAL SALES & SERVICE
                  </h4>
                  <p className="text-[#827E7D] font-['Manrope'] text-[14px] font-normal leading-normal">
                    Our aim at Sealmatic is to ensure utmost satisfaction of our customers
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="relative">
              <img src="/assets/Homepage/whychooseus/lines (1).png" alt="Red Line" className="absolute left-0 top-0 w-[10px] h-[74px] z-10" />
              <div className="pl-4">
                <div className="w-[82px] h-[85px] bg-[#DFDFDF] flex items-center justify-center relative">
                  <span className="text-black text-center font-['Lora'] text-[64px] font-bold mb-[100px] leading-[96px] relative z-20">02</span>
                  <div className="absolute left-[1px] top-[75px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
                </div>
                <div className="mt-[-65px] relative z-20">
                  <h4 className="ml-[60px] text-left font-['Manrope'] text-[16px] font-bold uppercase text-[#E4492E]">
                    HIGH QUALITY MANUFACTURING
                  </h4>
                  <p className="text-[#827E7D] ml-[60px] font-['Manrope'] text-[14px] font-normal leading-normal">
                    Manufacturing high-quality sealing systems at down to mechanical precision.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="relative">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/Homepage/whychooseus/lines (1).png"
                  alt="Red Line"
                  className="w-[10px] h-[74px] mt-[-90px] z-10"
                />
                <div className="w-[82px] h-[85px] bg-[#DFDFDF] flex items-center justify-center relative">
                  <span className="text-black text-center font-['Lora'] mb-[100px] text-[64px] mr-[10px] font-bold leading-[96px] relative z-20">03</span>
                  <div className="absolute left-[70px] top-[-0px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
                </div>
              </div>
              <div className="mt-[-60px] ml-[50px] relative z-20">
                <h4 className="text-black font-['Manrope'] text-[16px] font-bold uppercase">
                  CONTINUOUS TRAINING
                </h4>
                <p className="text-[#827E7D] font-['Manrope'] text-[14px] font-normal leading-normal">
                  To maintain our position at the forefront of technological innovation
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="relative">
              <img src="/assets/Homepage/whychooseus/lines.png" alt="Red Line" className="absolute left-0 mt-[-30px] w-[10px] h-[74px] z-10" />
              <div className="pl-4">
                <div className="w-[82px] h-[85px] bg-[#DFDFDF] flex items-center justify-center relative">
                  <span className="text-black text-center font-['Lora'] mr-[15px] text-[64px] mb-[100px] font-bold leading-[96px] relative z-20">04</span>
                  <div className="absolute right-[-0px] top-[0px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
                </div>
                <div className="mt-[-55px] relative z-20">
                  <h4 className="text-black font-['Manrope'] ml-[30px] text-[16px] font-bold uppercase">
                    LONG STANDING EXPERIENCE
                  </h4>
                  <p className="text-[#827E7D] ml-[30px] font-['Manrope'] text-[14px] font-normal leading-normal">
                    A collected knowledge of many years in the sealing industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="relative">
              <img src="/assets/Homepage/whychooseus/lines (1).png" alt="Red Line" className="absolute left-0 top-0 w-[10px] h-[74px] z-10" />
              <div className="pl-4">
                <div className="w-[82px] h-[85px] bg-[#DFDFDF] flex items-center justify-center relative">
                  <span className="text-black text-center font-['Lora'] text-[64px] mb-[100px] font-bold leading-[96px] relative z-20">05</span>
                  <div className="absolute left-[1px] top-[75px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
                </div>
                <div className="mt-[-60px] ml-[10px] relative z-20">
                  <h4 className="text-black font-['Manrope'] text-[16px] ml-[40px] font-bold uppercase">
                    SEALING TECHNOLOGY
                  </h4>
                  <p className="text-[#827E7D] ml-[40px] font-['Manrope'] text-[14px] font-normal leading-normal">
                    Sealmatic designs and manufactures seals and associated products.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="relative">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/Homepage/whychooseus/lines (1).png"
                  alt="Red Line"
                  className="w-[10px] h-[74px] mt-[-90px] z-10"
                />
                <div className="w-[82px] h-[85px] bg-[#DFDFDF] flex items-center justify-center relative">
                  <span className="text-black text-center font-['Lora'] mb-[100px] text-[64px] mr-[10px] font-bold leading-[96px] relative z-20">06</span>
                  <div className="absolute left-[70px] top-[-0px] w-[8px] h-[8px] bg-[#E4492E] z-20"></div>
                </div>
              </div>
              <div className="mt-[-65px] ml-[50px] relative z-20">
                <h4 className="text-black font-['Manrope'] text-[16px] ml-[5px] font-bold uppercase">
                  INTERNATIONAL STANDARDS
                </h4>
                <p className="text-[#827E7D] ml-[5px] font-['Manrope'] text-[14px] font-normal leading-normal">
                  All critical raw material is brought in from the US, Germany and UK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WhyChooseUs;