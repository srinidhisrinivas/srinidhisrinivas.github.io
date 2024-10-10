import React from 'react'
import { Header } from '../components/HeaderComps.js'
import { ProjectsBackButton, ImageScroller } from '../components/ProjectComps.js'
import '../App.css';


// Template for a project page that contains the option to scroll through images and have text about the project

// Still haven't figured out how to pass information to this or instantiate it.
export function ProjectPage(props) { 

   
    
    return(
    <div className="App">
      <Header />
      <div className="site-content">
      <div className="singleproj-container">
      <ProjectsBackButton />
      <h1 className="page-header"> {props.header} </h1>
      <div className="singleproj-info-container">
      <div className="proj-images-container">
          <ImageScroller images={props.images} />
      </div>
      <div className="proj-text-container">
      	<p className="proj-text"> {props.text} </p>
      </div>
      </div>
      </div>
      </div>      
    </div>
        );

}
