import React, { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Mobile App', 'Web Design', 'Web & Mobile', 'Dashboard', 'Web App'];
  
  const projects = [
    {
      id: 1,
      image: "/api/placeholder/400/320",
      title: "Dashboard Analytics",
      category: "Dashboard",
      description: "An interactive analytics dashboard with data visualization",
      tags: ["Dashboard", "Web App"]
    },
    {
      id: 2,
      image: "/api/placeholder/400/320",
      title: "Sneaker Showcase",
      category: "Mobile App",
      description: "Product visualization for a sneaker brand",
      tags: ["Mobile App", "Web & Mobile"]
    },
    {
      id: 3,
      image: "/api/placeholder/400/320",
      title: "Digital Experience",
      category: "Web Design",
      description: "Interactive user experience design",
      tags: ["Web Design", "Web App"]
    },
    {
      id: 4,
      image: "/api/placeholder/400/320",
      title: "Nature Explorer",
      category: "Web & Mobile",
      description: "Travel application for nature destinations",
      tags: ["Web & Mobile", "Web App"]
    },
    {
      id: 5,
      image: "/api/placeholder/400/320",
      title: "Education Portal",
      category: "Web App",
      description: "Learning platform for students",
      tags: ["Web App", "Dashboard"]
    },
    {
      id: 6,
      image: "/api/placeholder/400/320",
      title: "Education Portal",
      category: "Web App",
      description: "Learning platform for students",
      tags: ["Web App", "Dashboard"]
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="px-6 md:px-20 py-20">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="px-3 py-1 bg-bgGray text-black text-base font-semibold rounded-full inline-block mb-4">
            My Portfolio
          </span>
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray max-w-2xl mx-auto">
            Explore my recent design projects showcasing my skills in UI/UX design, 
            interaction design, and creative problem-solving.
          </p>
        </div>
        
        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeFilter === filter 
                  ? 'bg-black text-white' 
                  : 'bg-bgGray text-gray hover:bg-gray-400'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.category}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call-to-Action Button */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-gray-800 transition-colors">
            Let's Work Together
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}