import React from 'react';
import './Projects.css';
import img2 from './assets/2.jpg'; // Import your image
import img6 from './assets/6.jpg'; 
import img7 from './assets/7.jpg'; 
import img8 from './assets/8.jpg'; 
import img9 from './assets/9.jpg'; 

const projectsData = [
  {
    title: 'Assignment Writing / Research Proposals / Research Projects',
    description: 'Professionally crafted academic content customized to meet your specific requirements.',
    image: img2, // Assign img2 for the first project
  },
  {
    title: 'Data Analysis:',
    description: 'Data Analysis using R,Excel, Python, SPSS, Jamovi, SQL, JASP .',
    image: img6, // Assign img6 for the second project
  },
  {
    title: 'Thesis Writing: ',
    description: 'Expertly written theses with a clear structure and in-depth research.',
    image: img7, // Assign img7 for the third project
  },
  {
    title: 'Medical Research / Infographics / Presentations',
    description: 'Comprehensive support for medical research, along with visually engaging infographics and presentations.',
    image: img8, // Assign img8 for the fourth project
  },
  {
    title: 'Support for Resits and Failed Assignments:',
    description: ' Assistance in improving and resubmitting assignments to achieve passing grades.',
    image: img9, // Assign img9 for the fifth project
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h1 className="section-titlep">Our Services</h1>
      <p className="section-descriptionp">
        
      </p>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
