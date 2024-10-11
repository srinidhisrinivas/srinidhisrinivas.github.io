import React from 'react'
import Parser from 'html-react-parser'
import { Header } from '../components/HeaderComps.js'
import { ProjectsBackButton, ImageScroller } from '../components/ProjectComps.js'
import '../App.css';


// Template for a project page that contains the option to scroll through images and have text about the project

// Still haven't figured out how to pass information to this or instantiate it.
export default function ProjectTemplate(props) { 
    
    return(
    <div className="App">
      <Header />
      <div className="site-content">
      <div className="singleproj-container">
      <ProjectsBackButton />
      <h1 className="project-header"> {props.project.header} </h1>
      <div className="singleproj-info-container">
      <div className="proj-images-container">
          <ImageScroller images={props.project.images} />
      </div>
      <div className="proj-text-container">
        <div className="proj-info-text">
      	<p className="proj-text"> {Parser(props.project.text)} </p>
      	</div>
      	<div className="proj-text-info">
      	<b>Tech Stack: </b> {props.project.tech_text} <br/><br/>
      	<a href={props.project.repository_url} className="repo-url" target="_blank"> 
      	Link to Repository
      	</a>
      	</div>
      </div>
      </div>
      </div>
      </div>      
    </div>
        );

}
