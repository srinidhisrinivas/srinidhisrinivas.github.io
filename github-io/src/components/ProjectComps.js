import React, {useState} from 'react'
import plant from '../graphics/plant-pot-resized-nobg.png'
import { useNavigate } from 'react-router-dom'
import { PageLink } from './HeaderComps.js'
const images = require.context('../graphics/project_images',true);

export class ProjectFlower extends React.Component {
    render(){
    	// div with project overview information and clickability
    	// TODO: OnClick link to the appropriate project page
    	let projectName = this.props.project;
    	let hashValue = projectName.charCodeAt(0);
    	let color = hashValue % 2 == 0;
    	return (
    		<div className={"project-link" + " " + (color ? "odd" : "even")}>
    		{this.props.project}
    		</div>
    	);
    }
}

export class ProjectPlant extends React.Component {
    render(){
        // div containing background picture and overlain project button
        return (
        	<td className="project-cell">
        	<div className="project-cell-container">
        	<ProjectFlower project={this.props.project}/>
        	<img src={plant} className="plant-image"/>
        	</div>
        	</td>
        );
    }
}

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
    	return (
    		<tr className="project-row">
    		{rowCells}
    		</tr>
    	);
    }
}

export class ProjectsTable extends React.Component {
    
    buildProjectTable(projectList){
    	let projRows = [];
    	
    	// Divide the single list into 2d list of table rows
    	let maxRows=3;
    	let rowsTaken = 0;
    	let remainingRows = projectList.length;
    	while(remainingRows > 0){
    	    let numInRow = remainingRows > maxRows ? maxRows : remainingRows;
    	    projRows.push(projectList.slice(rowsTaken, rowsTaken+numInRow));
    	    rowsTaken += numInRow;
    	    remainingRows -= numInRow;
    	}
    	
    	// Create a row component for each row
    	let projTableComps = [];
        projRows.forEach((row,i) => projTableComps.push(
           <ProjectTableRow projRow={row} key={i}/>
        ));
    	
    	console.log(projTableComps);
    	
    	return projTableComps;
    }
    
    render(){
    	let projTableComps = this.buildProjectTable(this.props.projectList);
    	return (
    		<table className="projects-table">
    		<tbody>
    		{projTableComps}
    		</tbody>
    		</table>
    	);
    }
}


export function ImageScroller(props) {
 	// Props:
 	// images = list of image names to load and scroll through
    let image="TestImage1.jpg";
    let loadedImages = []
    props.images.forEach(fileName => loadedImages.push(images("./"+fileName)));
    const [imgIndex, setImgIndex] = useState(0);
    function handleClick() {
       setImgIndex((imgIndex + 1) % loadedImages.length)
    }
    return (
    	<div className="image-scroller-container">
    	  <div className="image-scroller-display">
    	  <img className="project-image" src={loadedImages[imgIndex]} alt="Project Image"/>
    	  </div>
    	  <div className="image-scroller-button-container">
    	  <button className="image-scroller-button" onClick={handleClick}> Next Image </button>
    	  </div>
    	</div>
    );
 	
}

export function ProjectsBackButton() { 
	// Props: none
	// Button to return back to projects page
    const navigate = useNavigate()
    const handleClick = () => navigate("/projects");
    return (
	<PageLink name="< Back to Projects" link="projects"/> 
    );
	
}


