import React from 'react';
import myProjects from '../Data/projects.json'


class Projects extends React.Component {
    render() {
       return(
        <div className="wrapper">
            {myProjects.projects.map((project) => {
                return(
                    <div className="card">
                    <img
                      className="card-img-top"
                      src={project.projectImage}
                      alt="projects"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{project.projectName}</h5>
                      <p className="card-text">{project.projectDescription}</p>
                      <a href={project.projectLink} class="btn btn-primary">
                        View Repo
                      </a>
                    </div>
                  </div>
                )
            })}
        </div>
       )
    }
}

export default Projects;