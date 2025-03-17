import React, {useState} from 'react'
import plant from '../graphics/plant-pot-resized-nobg.png'
import { useNavigate } from 'react-router-dom'
import { PageLink } from './HeaderComps.js'
const images = require.context('../graphics',true);
const PROJECT_TABLE_COLUMNS=3;

function ProjectFlower(props) {

	// div with project overview information and clickability
	
	let projectName = props.project.short_name;
	let projectRoute = props.project.route;
	let hashValue = projectName.charCodeAt(0);
	let color = hashValue % 2 == 0;
	
	const navigate = useNavigate();
	const handleClick = () => {
	    navigate("/"+projectRoute);
	}
	
	return (
		<div 
		className={"project-link" + " " + (color ? "odd" : "even")}
		onClick={handleClick}
		>
		{projectName}
		</div>
	);
}

export class ProjectPlant extends React.Component {
    render(){
        // Return an empty plant if the project is empty
        // TODO: Figure out a better way to do this
        if(!this.props.project.short_name){
           return (
           	
        	<div className="project-cell-container">
        	<img src={plant} className="plant-image"/>
        	</div>
        	
           )
        }
        return (
        	
        	<div className="project-cell-container">
        	<ProjectFlower project={this.props.project}/>
        	<img src={plant} className="plant-image"/>
        	</div>
        	
        );
    }
}

// Obsolete component
export class ProjectTableRow extends React.Component {
    render(){
    	// row of ProjectPlants
    	let rowProjects = this.props.projRow;
    	let rowCells = [];
    	rowProjects.forEach((cell,i) => {
    		rowCells.push((
    			<ProjectPlant project={cell} key={i} />
    		));
    	});
    	// Fill remaining row with empty plants
    	for(let i = rowCells.length;i < PROJECT_TABLE_COLUMNS; i++){
    		rowCells.push(<ProjectPlant project={{}} key={i} />);
    	}
    	return (
    		<tr className="project-row">
    		{rowCells}
    		</tr>
    	);
    }
}

export class ProjectsTable extends React.Component {
    
    buildProjectTable(projectList){
    	
		// Create a div for each project plant and style table using CSS
		let projTableComps = [];
		projectList.forEach((cell,i) => projTableComps.push(
			<ProjectPlant project={cell} key={i} />
		 ));
		
    	
    	return projTableComps;
    }
    
    render(){
    	let projTableComps = this.buildProjectTable(this.props.projectList);
    	return (
    		<div className="projects-table">
    		{projTableComps}
    		</div>
    	);
    }
}


export function ImageScroller(props) {
 	// Props:
 	// images = list of image names to load and scroll through
    let loadedImages = []
    let folderName=props.folder;
    let altClassName= props.altClassName ? props.altClassName : "project-image";
    props.images.forEach(fileName => loadedImages.push(images("./"+folderName+"/"+fileName)));
    const [imgIndex, setImgIndex] = useState(0);
    function handleClickNext() {
       setImgIndex((imgIndex + 1) % loadedImages.length)
    }
    function handleClickPrevious() {
       let newIndex = imgIndex - 1;
       newIndex = newIndex < 0 ? loadedImages.length-1 : newIndex;
       setImgIndex(newIndex)
    }
    return (
    	<div className="image-scroller-container">
    	  <div className="image-scroller-display">
    	  <img className={altClassName} src={loadedImages[imgIndex]} alt="Project Image"/>
    	  </div>
    	  <div className="image-scroller-button-container">
    	  <button className="image-scroller-button left" onClick={handleClickPrevious}> &lt; </button>
    	  <div className="page-counter"> {imgIndex+1}/{loadedImages.length}</div>
    	  <button className="image-scroller-button right" onClick={handleClickNext}> &gt; </button>
    	  </div>
    	</div>
    );
 	
}

export function ProjectsBackButton() { 
// Props: none
// Button to return back to projects page
    const navigate = useNavigate();
    const handleClick = () => navigate("/projects");
    return (
	<PageLink 
		name="< Back to Projects" 
		link="projects"
		addClass="projects-back"
	/> 
    );
	
}


