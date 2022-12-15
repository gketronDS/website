import React from 'react'
import ProjectItem from '../components/ProjectItem'
import Proj1 from '../assets/Kegg.png'
import Proj2 from '../assets/dogImage.png'
import Proj3 from '../assets/RNAseq.png'
import Proj4 from '../assets/truck.jpeg'
import Proj5 from '../assets/mouseneuron.jpeg'
import Proj6 from '../assets/data_at_uci_logo_transparent.png'
import "../styles/Projects.css"

function Projects() {
  return (
    <div className='projects'>
      <h1>Personal Projects</h1>
      <div className='projectList'>
        <ProjectItem name="Kegg API Project" image={Proj1} />
        <ProjectItem name="Stegenogaphy App" image={Proj2}/>
        <ProjectItem name="RNA Sequencing" image={Proj3}/>
        <ProjectItem name="Delivery Simulation" image={Proj4}/>
        <ProjectItem name="ImageJ Automation" image={Proj5}/>
        <ProjectItem name="Data Science Crash Course" image={Proj6}/>
      </div>
    </div>
  )
}

export default Projects