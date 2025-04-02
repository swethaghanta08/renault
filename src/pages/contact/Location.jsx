import React from 'react';

const VisitUsSection = () => {
  return (
    <div className="flex flex-col items-center gap-4 max-w-[1440px] mx-auto p-6">
      <p className="text-[#E4492E] font-[Monda] text-[20px] font-semibold">Our Location</p>
      <h1 className="text-black font-[Monda] text-[30px] md:text-[48px] font-bold leading-[60px]">Visit Us Anytime</h1>
      <p className="text-[#827E7D] font-[Manrope] text-[20px] font-normal leading-[28px] tracking-[0.4px] max-w-[928px]">
        Find us at our conveniently located office, designed to serve our clients with ease. Whether you're visiting for a consultation or partnership, our doors are always open to welcome you.
      </p>
      <div className="w-full h-[300px] mt-4 md:h-[600px] rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.8422718551333!2d78.37691589678954!3d17.51504120000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8dff8286dc57%3A0x4fea7112177b00ce!2sSri%20Surya&#39;s%20Vijaya%20Icon!5e0!3m2!1sen!2sin!4v1742808907561!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default VisitUsSection;
