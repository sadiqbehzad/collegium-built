import "./projects.css";
import Button from "./Button";
import residential from "./residential.png";
import office from "./office.png";
import school from "./school.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className="title">
        <h1>PROJECTS PANORAMA</h1>
        <p>A Visual Odyssey Through Our Diverse Creations</p>
      </div>
      <div className="project-button">
        {/* <Button label="Browse More Projects" height="3vw" /> */}
      </div>
      <div className="projects-preview">
        <div className="project1-container">
          <div className="project1">
            <img src={residential} alt="project1" />
          </div>
          <p>SkyRise Residence</p>
        </div>
        <div className="project2-container">
          <div className="project2">
            <div className="project2">
              <img src={office} alt="project2" />
            </div>
          </div>
          <p>HarborView Office Complex</p>
        </div>
        <div className="project3-container">
          <div className="project3">
            <div className="project3">
              <img src={school} alt="project3" />
            </div>
          </div>
          <p>Horizon Heights High School</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
