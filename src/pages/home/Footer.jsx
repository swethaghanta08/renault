"use client"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Footer = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState({ show: false, message: "", type: "" })

  // Function to show notification
  const showNotification = (message, type) => {
    setNotification({ show: true, message, type })

    // Auto hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" })
    }, 3000)
  }

  // Function to handle newsletter subscription
  const handleSubscribe = async () => {
    if (!email) {
      showNotification("Please enter your email address.", "error")
      return
    }

    setLoading(true)

    const formData = new FormData()
    formData.append("emailId", email)
    formData.append("subject", "NewsLetter")
    formData.append("toEmail", "renaultengineers@gmail.com")
    formData.append("message", "I am the new subscriber")
    formData.append("heading", "I want to contact for new product purchase")

    try {
      const response = await axios.post("https://api.smartaihr.com/api/users/sendingEmail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      showNotification("Subscription successful!", "success")
      setEmail("")
    } catch (error) {
      showNotification("Subscription failed. Please try again later.", "error")
    } finally {
      setLoading(false)
    }
  }

  // Function to handle navigation and scroll to top
  const handleNavigation = (path) => {
    navigate(path)
    window.scrollTo(0, 0)
  }

  // Function to handle product dropdown navigation
  const handleProductsNavigation = () => {
    navigate("/")
    window.scrollTo(0, 0)
    // Add a small delay to ensure the page has loaded before trying to open the dropdown
    setTimeout(() => {
      // Find the products dropdown element and trigger a click
      const productsDropdown = document.querySelector(
        ".lg\\:flex.lg\\:items-center.lg\\:gap-2.relative:nth-of-type(2) .flex.items-center.gap-2.cursor-pointer",
      )
      if (productsDropdown) {
        productsDropdown.click()
      }
    }, 100)
  }

  // Function to handle industry dropdown navigation
  const handleIndustryNavigation = () => {
    navigate("/")
    window.scrollTo(0, 0)
    // Add a small delay to ensure the page has loaded before trying to open the dropdown
    setTimeout(() => {
      // Find the industry dropdown element and trigger a click
      const industryDropdown = document.querySelector(
        ".lg\\:flex.lg\\:items-center.lg\\:gap-2.relative:nth-of-type(1) .flex.items-center.gap-2.cursor-pointer",
      )
      if (industryDropdown) {
        industryDropdown.click()
      }
    }, 100)
  }

  return (
    <div className="flex flex-col w-full relative">
      {/* Toast Notification */}
      {notification.show && (
        <div
          className={`fixed top-5 right-5 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform translate-y-0 ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <div className="flex items-center">
            {notification.type === "success" ? (
              <svg
                className="w-6 h-6 text-white mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            )}
            <p className="text-white font-medium">{notification.message}</p>
          </div>
        </div>
      )}

      <div className="flex flex-col bg-[#F4F4F4] w-full py-8 lg:py-16 mt-[50px] lg:mt-[80px]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6 w-full">
          {/* Red Subscription Box */}
          <div className="flex justify-center max-w-[1312px] mx-auto rounded-[16px] bg-[#CF422A] py-5 lg:py-7 px-4 lg:px-6 mt-[-80px] lg:mt-[-120px]">
            <div className="flex flex-col lg:flex-row w-full max-w-[1312px] justify-between items-center gap-4">
              <div className="flex flex-col text-center lg:text-left">
                <span className="text-white font-[Monda] text-sm font-semibold">Stay Updated</span>
                <span className="text-white text-[18px] lg:text-2xl font-[Monda] font-bold leading-7 lg:leading-9">
                  Subscribe to Our Newsletter
                </span>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row items-left md:items-center gap-3 lg:gap-4 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full lg:w-[350px] xl:w-[400px] px-4 py-3 rounded-3xl border font-[Manrope] border-white bg-transparent text-white placeholder-white text-base lg:text-lg"
                />
                <button
                  className="w-[150px] md:w-[300px] font-[Manrope] lg:w-auto px-6 py-3 rounded-3xl bg-black text-white text-base lg:text-lg font-bold transition-all duration-300 hover:bg-gray-800"
                  onClick={handleSubscribe}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Subscribing...
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row flex-wrap max-w-[1312px] mx-auto px-4 lg:ml-[50px] justify-between mt-8 lg:mt-12 gap-8 lg:gap-0">
            {/* Mobile Layout - Logo First */}
            <div className="w-full lg:hidden flex flex-col items-center">
              <div
                className="w-[240px] h-[50px] bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url('/assets/logo/Logo.png')` }}
              ></div>
            </div>

            {/* Mobile/Medium Layout - Quick Links and Timings */}
            <div className="w-full lg:hidden flex flex-col md:flex-row md:justify-between md:gap-8">
              {/* Quick Links - Left on medium, top on small */}
              <div className="w-full md:w-1/2 order-1 md:order-1 mb-6 md:mb-0">
                <h3 className="text-black text-xl font-bold">Quick Links</h3>
                <ul className="mt-3 space-y-2">
                  <li
                    className="text-black text-sm font-[Manrope] font-medium cursor-pointer"
                    onClick={() => handleNavigation("/")}
                  >
                    Home
                  </li>
                  <li
                    className="text-black text-sm font-[Manrope] font-medium cursor-pointer"
                    onClick={() => handleNavigation("/about")}
                  >
                    About
                  </li>
                  <li
                    className="text-black text-sm font-[Manrope] font-medium cursor-pointer"
                    onClick={handleIndustryNavigation}
                  >
                    Industry
                  </li>
                  <li
                    className="text-black font-[Manrope] text-sm font-medium cursor-pointer"
                    onClick={handleProductsNavigation}
                  >
                    Our Products
                  </li>
                  <li
                    className="text-black text-sm font-[Manrope] font-medium cursor-pointer"
                    onClick={() => handleNavigation("/contact")}
                  >
                    Contact
                  </li>
                </ul>
              </div>

              {/* Timings - Right on medium, middle on small */}
              <div className="w-full md:w-1/2 order-2 md:order-2">
                <h3 className="text-black text-xl font-[Manrope] font-bold">Timings:</h3>
                <div className="mt-2">
                  <p className="text-black text-sm font-[Manrope] font-medium">Mon - Sat: 10.00am to 6.00pm</p>
                  <p className="text-black text-sm font-[Manrope] font-medium">Sunday: Closed</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex mt-4 gap-4">
                  {["facebook", "instagram", "twitter", "linkedin"].map((platform, index) => (
                    <img
                      key={index}
                      src={`/assets/Homepage/footer/${platform}.png`}
                      alt={platform}
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Layout - Contact Details */}
            <div className="w-full lg:hidden mt-6 md:mt-8">
              <h3 className="text-black text-xl font-[Manrope] font-bold">Contact Details</h3>
              <div className="mt-3 space-y-3">
                <div className="flex items-start">
                  <img src="/assets/Homepage/footer/location .png" alt="Location" className="w-5 h-5 mr-2 mt-1" />
                  <p className="text-black text-sm font-[Manrope] font-medium">
                    Flat No-101, Plot No. 42-43-44, Sri Suraya Vijayas Icon, Balaji Nagar Village - Nizampet, Nizampet,
                    Hyderabad, Telangana, India - 500090
                  </p>
                </div>
                <div className="flex items-start">
                  <img src="/assets/Homepage/footer/phone .png" alt="Phone" className="w-5 h-5 mr-2 mt-1" />
                  <p className="text-black text-sm font-[Manrope] font-medium">
                    +91-9948832220
                    <br />
                    +91-8019545220
                  </p>
                </div>
                <div className="flex items-start">
                  <img src="/assets/Homepage/footer/image.png" alt="Email" className="w-5 h-5 mr-2 mt-1" />
                  <p className="text-black text-sm font-[Manrope] font-medium">
                    <span className="block">renaultengineers@gmail.com</span>
                    <span className="block">sales@renaultengineers.com</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Contact Details */}
            <div className="hidden lg:block lg:w-1/3 xl:w-1/4">
              <h3 className="text-black text-2xl font-[Manrope] font-bold">Contact Details</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <img src="/assets/Homepage/footer/location .png" alt="Location" className="w-6 h-6 mr-3" />
                  <p className="text-black font-[Manrope] text-base font-medium">
                    Flat No-101, Plot No. 42-43-44, Sri Suraya Vijayas Icon, Balaji Nagar, Nizampet, Hyderabad,
                    Telangana, India - 500090
                  </p>
                </div>
                <div className="flex items-start">
                  <img src="/assets/Homepage/footer/phone .png" alt="Phone" className="w-6 h-6 mr-3" />
                  <p className="text-black font-[Manrope] text-base font-medium">
                    +91-9948832220
                    <br />
                    +91-8019545220
                  </p>
                </div>
                <div className="flex items-start">
                  <img src="/assets/Homepage/footer/image.png" alt="Email" className="w-6 h-6 mr-3" />
                  <p className="text-black font-[Manrope] text-base font-medium">
                    <span className="block">renaultengineers@gmail.com</span>
                    <span className="block">sales@renaultengineers.com</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Layout - Quick Links */}
            <div className="hidden lg:block lg:w-1/4 xl:ml-[20px] xl:w-1/4">
              <h3 className="text-black text-2xl font-bold">Quick Links</h3>
              <ul className="mt-4 space-y-5">
                <li
                  className="text-black font-[Manrope] text-base font-medium cursor-pointer"
                  onClick={() => handleNavigation("/")}
                >
                  Home
                </li>
                <li
                  className="text-black font-[Manrope] text-base font-medium cursor-pointer"
                  onClick={() => handleNavigation("/about")}
                >
                  About
                </li>
                <li
                  className="text-black font-[Manrope] text-base font-medium cursor-pointer"
                  onClick={handleIndustryNavigation}
                >
                  Industry
                </li>
                <li
                  className="text-black font-[Manrope] text-base font-medium cursor-pointer"
                  onClick={handleProductsNavigation}
                >
                  Our Products
                </li>
                <li
                  className="text-black font-[Manrope] text-base font-medium cursor-pointer"
                  onClick={() => handleNavigation("/contact")}
                >
                  Contact
                </li>
              </ul>
            </div>

            {/* Desktop Layout - Logo and Timings */}
            <div className="hidden lg:block lg:w-1/3 xl:mr-[70px] xl:w-1/4">
              <div
                className="xl:w-[362px] lg:w-[270px] xl:h-[74px] lg:h-[70px] bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/logo/Logo.png')` }}
              ></div>
              <h3 className="text-black font-[Manrope] text-2xl font-bold mt-6">Timings:</h3>
              <div className="mt-2 grid grid-cols-[90px_auto] ">
                <p className="text-black font-[Manrope] text-base font-medium text-left pr-2">Mon - Sat :</p>
                <p className="text-black font-[Manrope] text-base font-medium">10.00am to 6.00pm</p>

                <p className="text-black font-[Manrope] text-base font-medium text-left pr-2">Sunday :</p>
                <p className="text-black font-[Manrope] text-base font-medium">Closed</p>
              </div>

              <div className="flex mt-4 gap-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/Homepage/footer/facebook.png" alt="Facebook" className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/Homepage/footer/instagram.png" alt="Instagram" className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/Homepage/footer/twitter.png" alt="Twitter" className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src="/assets/Homepage/footer/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex justify-center py-4 w-full">
        <p className="text-[#CF422A] text-sm lg:text-base font-normal">Copyright © 2023. All Rights Reserved.</p>
      </div>

      {/* Designed By Techpixe Section - Centered */}
      <div className="w-full bg-[#E4492E]">
        <div className="max-w-[1440px] mx-auto flex justify-center items-center px-4 md:px-16 py-4">
          <p className="text-white font-[Manrope] text-base md:text-xl font-bold capitalize">Designed By Techpixe</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

