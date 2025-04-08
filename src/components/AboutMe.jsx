import { useState } from 'react';

import honor from '../icons/honor.svg';

export default function AboutMe() {
  const [skills] = useState([
    { name: 'UI Design', percentage: 85 },
    { name: 'UX Research', percentage: 90 },
    { name: 'Prototyping', percentage: 88 },
    { name: 'Wireframing', percentage: 92 },
    { name: 'User Testing', percentage: 85 },
    { name: 'Visual Design', percentage: 90 }
  ]);

  const [tools] = useState([
    'Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 
    'InVision', 'Zeplin', 'Principle', 'Framer', 'After Effects'
  ]);

  return (
    <section className="px-6 md:px-20 flex flex-col gap-20">
   
      <div className="flex flex-col mb-6">
        <div className="flex justify-center  items-center flex-col gap-3">
          <span className="text-base   p-3  bg-bgGray rounded-full">About Me</span>
          <h1 className="text-3xl md:text-4xl font-bold font-playfair">Creating Digital Experiences with Purpose</h1>
        </div>
      </div>

    
      <div className="flex flex-col md:flex-row gap-40">
        
        <div className="md:w-1/2">
          <div className="mb-8">
            <p className="mb-4">
              <span className="font-semibold">Hi, I'm Adewuyi Quadri</span>, a passionate UI/UX designer with 2 years of 
              experience creating beautiful, intuitive, and functional digital 
              experiences. My design philosophy centers on user-centered design 
              principles, ensuring that every product I create not only looks good but 
              also provides exceptional usability.
            </p>
            <p className="mb-4 text-gray">
              Throughout my career, I've collaborated with 7 different platforms, across 
              various industries, helping them transform their digital products and achieve 
              their business goals through thoughtful design.
            </p>
            <p className="text-gray">
              When I'm not designing, you can find me exploring new design trends, learning 
              new tools, or contributing to design communities. I believe that continuous 
              learning and staying curious are essential for growth as a designer.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 grid md:grid-cols-2 gap-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-bgGray rounded-full flex items-center justify-center">
              <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <div className="font-medium">Location</div>
                <div className="text-gray">Nigeria</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-bgGray rounded-full flex items-center justify-center">
              <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <div className="font-medium">Phone</div>
                <div className="text-gray">+234 905 999 5284</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-bgGray rounded-full flex items-center justify-center">
              <i class="fa-solid fa-envelope"></i>
              </div>
              <div>
                <div className="font-medium">Email</div>
                <div className="text-gray">acoewuyi22@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-bgGray rounded-full flex items-center justify-center">
                <img src={honor} alt="" />
              </div>
              <div>
                <div className="font-medium">Experience</div>
                <div className="text-gray">2 years</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Skills */}
        <div className="md:w-1/2 mt-[-60px]">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Design Skills</h2>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-bgGray rounded-full h-2.5">
                    <div 
                      className="bg-[#18181B] h-2.5 rounded-full" 
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Tools I Use</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <div key={tool} className="bg-bgGray px-4 py-2 rounded-md">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}