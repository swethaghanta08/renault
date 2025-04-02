"use client"

import { useState } from "react"
import axios from "axios"

const Letsconnect = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    const formData = new FormData()
    formData.append("name", name)
    formData.append("mobile", phone)
    formData.append("email", email)
    formData.append("toEmail", "renaultengineers@gmail.com")
    formData.append("heading", "Inquiry from Renault Engineers website")
    formData.append("subject", message)

    try {
      const response = await axios.post("https://api.smartaihr.com/api/users/sendingEmail", formData)
      console.log(response.data)
      setSuccess(true)
      setName("")
      setEmail("")
      setPhone("")
      setMessage("")
    } catch (error) {
      console.error("Error sending email", error)
      setError("There was an issue sending the email. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col lg:flex-row items-center xl:ml-[140px] gap-6 max-w-[1440px] mx-auto p-4 md:p-8 lg:p-12">
      {/* Left Side - Contact Info */}
      <div className="flex flex-col gap-6 w-full lg:w-auto">
        <p className="text-[#E4492E] font-[Monda] text-[16px]  md:text-[18px] lg:text-[20px] font-semibold">
          Let's Connect
        </p>
        <h1 className="text-black font-[Monda] text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight lg:leading-[60px]">
          Connect with Us Anytime
        </h1>
        <p className="text-[#827E7D] font-[Manrope] text-[16px] md:text-[18px] lg:text-[20px] xl:w-[632px] font-normal leading-relaxed tracking-[0.4px]">
          Reach out to us for any inquiries, support, or collaboration. Visit our location, give us a call, or drop us an email-we're always ready to assist you with the best solutions.
        </p>
        {/* Visit Us */}
        <div className="flex flex-col md:flex-row mt-[20px] items-start md:items-center gap-4 md:gap-2">
          <div className="flex items-center gap-2 bg-[#F7C7BE] p-2">
            <img src="/assets/Contactpage/Letsconnect/location.png" alt="Location" className="w-8 h-8 md:w-12 md:h-10" />
          </div>
          <div className="flex flex-col">
            <p className="text-black font-bold font-[Manrope] text-[16px] leading-normal">Visit Us</p>
            <p className="text-[#827E7D] text-sm xl:w-[632px] font-[Manrope] md:text-base">
              No. Flat No. - 101, Plot No. 42-43-44, Sri Surays Vijayas Icon, Balaji Nagar, Village - Nizampet, Hyderabad. Telangana, India - 500090
            </p>
          </div>
        </div>
        {/* Call Us */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-2">
          <div className="flex items-center gap-2 bg-[#F7C7BE] p-2">
            <img src="/assets/Contactpage/Letsconnect/phone.png" alt="Phone" className="w-8 h-8 md:w-9 md:h-9" />
          </div>
          <div className="flex flex-col">
            <p className="text-black font-bold font-[Manrope] text-[16px] leading-normal">Call Us</p>
            <p className="text-[#827E7D] text-sm font-[Manrope] md:text-base">
              (+91) 994 883 2220 <br /> (+91) 801 954 5220
            </p>
          </div>
        </div>
        {/* Message Us */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-2">
          <div className="flex items-center gap-2 bg-[#F7C7BE] p-2">
            <img src="/assets/Contactpage/Letsconnect/navigation.png" alt="Message" className="w-8 h-8 md:w-9 md:h-9" />
          </div>
          <div className="flex flex-col">
            <p className="text-black font-bold font-[Manrope] text-[16px] leading-normal">Message Us</p>
            <p className="text-[#827E7D] font-[Manrope] text-sm md:text-base">
              renaultengineers@gmail.com <br /> sales@renaultengineers.com
            </p>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex items-center gap-4 mt-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#F7C7BE] flex items-center justify-center">
            <img src="/assets/Contactpage/Letsconnect/facebook.png" alt="Facebook" className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#F7C7BE] flex items-center justify-center">
            <img src="/assets/Contactpage/Letsconnect/instagram.png" alt="Instagram" className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#F7C7BE] flex items-center justify-center">
            <img src="/assets/Contactpage/Letsconnect/linkedin.png" alt="LinkedIn" className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#F7C7BE] flex items-center justify-center">
            <img src="/assets/Contactpage/Letsconnect/twitter.png" alt="Twitter" className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>
      {/* Right Side - Contact Form */}
      <div className="bg-white shadow-lg p-6 md:p-8 lg:p-10 rounded-md w-full lg:w-[632px] mt-8 lg:mt-0">
        <h2 className="text-black font-[Monda] text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight lg:leading-[60px]">
          Send A Message
        </h2>
        <p className="text-[#827E7D] font-[Manrope] mt-4 text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-relaxed tracking-[0.4px] mb-6">
          Let's start a conversation - message us today!
        </p>
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Email sent successfully! We'll get back to you soon.
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
        )}
        <form className="flex flex-col gap-4 md:gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-black rounded-lg px-4 md:px-5 py-2 md:py-3 text-[#6D6D6D] font-[Manrope] text-[16px] md:text-[20px] font-normal leading-relaxed tracking-[0.4px] w-full"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-black rounded-lg px-4 md:px-5 py-2 md:py-3 text-[#6D6D6D] font-[Manrope] text-[16px] md:text-[20px] font-normal leading-relaxed tracking-[0.4px] w-full"
          />
          <input
            type="tel"
            placeholder="Phone No"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="border border-black rounded-lg px-4 md:px-5 py-2 md:py-3 text-[#6D6D6D] font-[Manrope] text-[16px] md:text-[20px] font-normal leading-relaxed tracking-[0.4px] w-full"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="border border-black rounded-lg px-4 md:px-5 py-2 md:py-3 text-[#6D6D6D] font-[Manrope] text-[16px] md:text-[20px] font-normal leading-relaxed tracking-[0.4px] w-full h-[150px] md:h-[195px]"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#CF422A] text-white font-[Monda] text-[20px] md:text-[24px] font-bold leading-tight md:leading-[32px] py-3 md:py-4 rounded-lg w-full disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Letsconnect