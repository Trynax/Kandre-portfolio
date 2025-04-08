import React, { useState } from 'react';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form or show success message
    alert('Thanks for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="px-6 md:px-20 py-20 bg-bgGray">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-10 flex flex-col items-center gap-4">
          <span className="text-base px-4 py-1 bg-bgGray rounded-full font-semibold">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Let's Work Together</h2>
          <p className="text-gray max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'm just a 
            message away. Let's create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Column */}
          <div className='flex flex-col gap-4'>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            {/* Email */}
            <div className="flex items-start mb-8">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a href="mailto:alex@example.com" className="text-gray-600 hover:text-black transition-colors block mb-1">
                  alex@example.com
                </a>
                <p className="text-sm text-gray-500">Replies within 24-48 hours</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="flex items-start mb-8">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3747C21.0391 21.7498 20.5099 21.9605 19.96 21.96C16.4289 21.7383 13.0142 20.5756 10.07 18.57C7.32126 16.7393 5.0186 14.4367 3.18799 11.688C1.17999 8.74196 0.0172987 5.32623 -0.0400127 1.79297C-0.0395671 1.24342 0.171011 0.714682 0.545538 0.33966C0.920065 -0.0353624 1.44874 -0.046822 1.998 0.0429687H4.998C6.04204 0.0317452 6.76363 0.935073 6.998 1.93297C7.14681 2.81093 7.40236 3.66873 7.75799 4.48797C8.08432 5.22311 7.89351 6.08477 7.34799 6.63797L6.238 7.74797C7.93003 10.5759 10.2322 12.878 13.06 14.57L14.17 13.46C14.7232 12.9145 15.5848 12.7237 16.32 13.05C17.1393 13.4056 17.9971 13.6612 18.875 13.81C19.891 14.0493 20.7888 14.776 20.77 15.84L22 16.92Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a href="tel:+11234567890" className="text-gray-600 hover:text-black transition-colors block mb-1">
                  +1 (234) 567-890
                </a>
                <p className="text-sm text-gray-500">Available Mon-Fri, 9am-5pm PST</p>
              </div>
            </div>
            
            {/* Location */}
            <div className="flex items-start mb-8">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-600 mb-1">San Francisco, California</p>
                <p className="text-sm text-gray-500">Available for remote work worldwide</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 6.5H17.51M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form Column */}
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
               <div className='flex w-full justify-between gap-6'>
               <div className='w-[50%]'>
                  <label htmlFor="name" className="block text-sm font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 bg-white border border-bgGray rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                    required
                  />
                </div>
                
                {/* Email Field */}
                <div className='w-[50%]'>
                  <label htmlFor="email" className="block text-sm font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-bgGray bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                    required
                  />
                </div>
               </div>
                
                {/* Subject Field */}
                <div className=''>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-2 border border-bgGray bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                    required
                  />
                </div>
                
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="9"
                    className="w-full px-4 bg-white py-2 border border-bgGray rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                    required
                  />
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-md   transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}