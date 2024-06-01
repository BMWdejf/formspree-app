import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://django-tutorial-one.vercel.app/projects/') // Zde nahraďte 'URL_API' skutečnou URL vaší API
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      {projects.length > 0 ? (
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h2>{project.name}</h2>
              <p><strong>Start Date:</strong> {project.start_date}</p>
              <p><strong>End Date:</strong> {project.end_date}</p>
              <p><strong>Comments:</strong> {project.comments}</p>
              <p><strong>Status:</strong> {project.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading projects...</p>
      )}
    </div>
  );
};

export default ProjectList;
