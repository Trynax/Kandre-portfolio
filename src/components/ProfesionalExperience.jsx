import React from 'react';

export default function ProfessionalExperience() {
  const experiences = [
    {
      period: "2022 - Present",
      title: "Senior UI/UX Designer",
      company: "DesignHub",
      description: "Led the redesign of the company's flagship product, resulting in a 40% increase in user engagement.",
      skills: ["Product Design", "User Research", "Design Systems", "Team Leadership"]
    },
    {
      period: "2021 - 2022",
      title: "UI Designer",
      company: "TechNest",
      description: "Created wireframes, prototypes, and high-fidelity designs for mobile and web applications.",
      skills: ["UI Design", "Prototyping", "Interaction Design", "Visual Design"]
    },
    {
      period: "2021",
      title: "UX Intern",
      company: "CreativeMinds",
      description: "Assisted in user research and creating user flows for various digital products.",
      skills: ["User Research", "Wireframing", "Usability Testing", "Documentation"]
    }
  ];

  return (
    <div className="px-6 md:px-20 py-20 flex flex-col gap-20">
      {/* Journey Header */}
      <div className="flex flex-col justify-center items-center">
        <span className=" px-3 py-2 rounded-full bg-bgGray">
          My Journey
        </span>
        <h1 className="text-4xl font-bold">Professional Experience</h1>
        <p className="text-gray text-center mt-4 max-w-2xl mx-auto">
          Over the past 2 years, I've had the privilege of working with 7 different platforms and 
          businesses, helping them create meaningful digital experiences that drive results.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray"></div>

        {experiences.map((experience, index) => (
          <div key={index} className="relative mb-16">
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-black z-10"></div>
            
            {/* Experience Card */}
            <div className={`relative ${index % 2 === 0 ? 'mr-auto pr-10' : 'ml-auto pl-10'} w-5/12`}>
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                {/* Period */}
                <div className="inline-flex items-center bg-gray-200 rounded-md px-3 py-1 text-sm text-gray-700 mb-4">
                  <span className="mr-1">📅</span> {experience.period}
                </div>
                
                {/* Job Title */}
                <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                
                {/* Company */}
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="mr-1">🏢</span> {experience.company}
                </div>
                
                {/* Description */}
                <p className="text-gray-600 mb-4 text-right">
                  {experience.description}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-end">
                  {experience.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="inline-flex items-center text-sm bg-gray-100 rounded-full px-3 py-1">
                      <span className="mr-1">⚪</span> {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}