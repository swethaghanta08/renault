"use client"
import { useNavigate } from "react-router-dom"

const ContactSection = () => {
  const navigate = useNavigate()

  const handleSendRequest = () => {
    console.log("Send Request clicked! Navigating to /contact with letsconnect section") // Debug log
    navigate("/contact?section=letsconnect") // Navigate to contact page with query parameter
  }

  return (
    <div className="flex flex-col items-center py-12 md:px-8 px-6 lg:px-6 md:py-14 lg:py-20 xl:py-24 bg-white">
      <h3 className="text-[#E4492E] font-['Monda'] text-xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center w-full">
        Get in Touch
      </h3>
      <h2 className="text-black font-['Monda'] px-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[40px] md:leading-[48px] lg:leading-[60px] xl:leading-[72px] text-center w-full mt-3 md:mt-3 lg:mt-4 xl:mt-6">
        Contact Us for Expert Assistance
      </h2>

      <div className="flex flex-col md:flex-row justify-center mt-8 md:mt-10 lg:mt-12 xl:mt-16 gap-0 md:gap-4 lg:gap-6 xl:gap-8">
        {/* Left Card (Call Us) */}
        <div className="flex flex-col items-center gap-3 md:gap-3 lg:gap-4 xl:gap-6 bg-[#F4F4F4] mt-[20px] md:mt-[20px] w-full md:w-[200px] lg:w-[320px] xl:w-[380px] h-[260px] md:h-[280px] lg:h-[302px] xl:h-[340px] p-6 md:p-6 lg:p-8 xl:p-10 transition-all duration-300 hover:bg-[#EDEDED] hover:scale-105">
          <img
            src="/assets/Homepage/getintouch/phoneimage.png"
            alt="Phone"
            className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] lg:w-[64px] lg:h-[64px] xl:w-[72px] xl:h-[72px]"
          />
          <h3 className="text-[#252B42] font-['Manrope'] text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold capitalize">
            Call Us
          </h3>
          <p className="text-black font-['Manrope'] text-xs md:text-sm lg:text-sm xl:text-base font-medium">
            +91-9948832220
          </p>
          <button
            onClick={handleSendRequest}
            className="flex items-center justify-center px-4 py-2 md:px-4 md:py-2 lg:px-5 lg:py-2 xl:px-6 xl:py-3 border border-[#CF422A] rounded-md  hover:text-white transition-colors duration-300"
          >
            <span className="text-[#E4492E] font-['Manrope'] text-xs md:text-xs lg:text-sm xl:text-base font-semibold tracking-wider leading-6">
              Send Request
            </span>
          </button>
        </div>

        {/* Middle Card (Visit Us) */}
        <div className="flex flex-col items-center gap-3 md:gap-3 lg:gap-4 xl:gap-6 bg-[#E4492E] w-full md:w-[280px] lg:w-[320px] xl:w-[380px] h-[320px] md:h-[340px] lg:h-[388px] xl:h-[440px] p-6 md:p-8 lg:p-10 xl:p-12 my-6 md:my-0 transition-all duration-300 hover:bg-[#CF422A] hover:scale-105">
          <img
            src="/assets/Homepage/getintouch/locationimage.png"
            alt="Location"
            className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] lg:w-[64px] lg:h-[64px] xl:w-[72px] xl:h-[72px]"
          />
          <h3 className="text-white font-['Manrope'] text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold capitalize">
            Visit Us
          </h3>
          <p className="text-white w-full md:w-[240px] lg:w-[288px] xl:w-[320px] font-['Manrope'] text-xs md:text-xs lg:text-sm xl:text-base font-medium text-center">
            Flat No-101, Plot No. 42-43-44. Sri Surayas Vijayas Icon, Balaji Nagar Village Nizampet. Nizampet,
            Hyderabad. Telangana. India -500090.
          </p>
          <button
            onClick={handleSendRequest}
            className="flex items-center justify-center px-4 py-2 md:px-4 md:py-2 lg:px-5 lg:py-2 xl:px-6 xl:py-3 border border-white rounded-md  hover:text-[#E4492E] transition-colors duration-300"
          >
            <span className="text-white font-['Manrope'] text-xs md:text-xs lg:text-sm xl:text-base font-semibold tracking-wider leading-6">
              Send Request
            </span>
          </button>
        </div>

        {/* Right Card (Mail Us) */}
        <div className="flex flex-col items-center gap-3 md:gap-3 lg:gap-4 xl:gap-6 bg-[#F4F4F4] mt-[0px] md:mt-[20px] w-full md:w-[200px] lg:w-[320px] xl:w-[380px] h-[260px] md:h-[280px] lg:h-[302px] xl:h-[340px] p-6 md:p-6 lg:p-8 xl:p-10 transition-all duration-300 hover:bg-[#EDEDED] hover:scale-105">
          <img
            src="/assets/Homepage/getintouch/navigationimmage.png"
            alt="Mail"
            className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] lg:w-[64px] lg:h-[64px] xl:w-[72px] xl:h-[72px]"
          />
          <h3 className="text-[#252B42] font-['Manrope'] text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold capitalize">
            Mail Us
          </h3>
          <p className="text-[#252B42] font-['Manrope'] text-xs md:text-xs lg:text-sm xl:text-base font-medium tracking-wider">
            renaultengineers@gmail.com
          </p>
          <button
            onClick={handleSendRequest}
            className="flex items-center justify-center px-4 py-2 md:px-4 md:py-2 lg:px-5 lg:py-2 xl:px-6 xl:py-3 border border-[#CF422A] rounded-md hover:text-white transition-colors duration-300"
          >
            <span className="text-[#E4492E] font-['Manrope'] text-xs md:text-xs lg:text-sm xl:text-base font-semibold tracking-wider leading-6">
              Send Request
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactSection

