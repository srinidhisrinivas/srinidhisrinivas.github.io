import React from 'react'
import Parser from 'html-react-parser'
import { Header } from '../components/HeaderComps.js'
import { ProjectsBackButton, ImageScroller } from '../components/ProjectComps.js'
import '../App.css';


// Template for a project page that contains the option to scroll through images and have text about the project

// Still haven't figured out how to pass information to this or instantiate it.
export default function ProjectTemplate(props) { 
    
    let repoLinks = props.project.repository_url;
    let repoLinksElements = [];
    if(repoLinks.length == 0) {
    	repoLinksElements = [<div> </div>]
    } else {
    	repoLinksElements.push(<b>Links to Repositories: </b>);
    	repoLinks.forEach((link, i) => {
    		repoLinksElements.push(<a href={link} target="_blank" className="link-url" key={i}>{i+1}</a>);
 	});
    }
    return(
    <div className="App">
      <Header />
      <div className="site-content">
      <div className="singleproj-container">
      <ProjectsBackButton />
      <h1 className="project-header"> {props.project.header} </h1>
      <div className="singleproj-info-container">
      <div className="proj-images-container"> 
          <ImageScroller images={props.project.images} folder="project_images"/>
         
      </div>
      <div className="proj-text-container">
        <div className="proj-info-text">
        <p className="proj-duration">
        <b>Project Duration:</b> {props.project.project_duration}
        </p>
      	<p className="proj-text"> {Parser(props.project.text)} </p>
      	</div>
      	<div className="proj-competencies-info">
      	<b>Competencies: </b> {props.project.tech_text} <br/><br/>
      	</div>
      	<div className="repo-links-container">
      	{repoLinksElements}
      	</div>
      </div>
      </div>
      </div>
      </div>      
    </div>
        );

}
