import React from 'react'
import tree from '../graphics/tree.ico'
import plant from '../graphics/plant-pot-resized-nobg.png'

export class PageLink extends React.Component {
    
    render(){
    	let linkString = "#/"+this.props.link
    	return(
    	    
    	    <a href={linkString} className="page-link">
    	    <div className="page-link-button" onclick="location.href='{linkString}'">
    	    {this.props.name}
    	    </div>
    	    </a>
    	    
    	)
    }
}

export class PageNav extends React.Component {
    
    buildNavList(navList){
    	let navComponents = [];
    	for(let i=0; i<navList.length; i++){
    	    navComponents.push(
    	    	<PageLink name={navList[i].name} link={navList[i].link} key={i}/>
    	    );
    	}
    	return navComponents;
    }
    render() {
    	let navList = this.buildNavList(this.props.links);
        return(
    	    <div className="page-nav">
    		{navList}
    	    </div>
    	)
    }
	
}

export class Header extends React.Component {
    render(){
    	return(
	      <div className="site-header">
	      <div className="header-text-box">
	      
	      <div className="header-photo-box">
	      <img src={tree} alt="tree-logo" className="header-photo"/>
	      </div>
	      <div className="header-text">
	      Srinidhi's Garden
	      </div>
	      </div>
	      <PageNav 
	      	    links={[{name:"Home",link:"home"},
	      	    {name:"Gardener",link:"about"},
	      	    {name:"Plants",link:"projects"},
	     	    {name:"History",link:"resume"},
	     	    {name:"Debug",link:"debug"},
	      	    ]}
	      	/>
	      </div>
    	)
    }
}


class LinksRow extends React.Component {
    render(){
         return(
            <tr> 
            <td className="link-name">
            	{this.props.name}
            </td>
            <td>
            	<a className="link-url" href={this.props.url} target="_blank">{this.props.linkText}</a>
            </td>
            </tr> 
         )
    }
}

export class LinksTable extends React.Component {
    
    buildLinkList(linkList){
    	let linkComponents = [];
    	for(let i=0; i<linkList.length; i++){
    	    linkComponents.push(
    	    	<LinksRow 
    	    	  name={linkList[i].name} 
    	    	  url={linkList[i].url} 
    	    	  linkText={linkList[i].linkText}
    	    	  key={i}
    	  	/>
    	    );
    	}
    	return linkComponents;
    }
    render() {
    	let linkList = this.buildLinkList(this.props.links);
        return(
    	    <table className="links-table">
    	    <tbody>
    		{linkList}
    	    </tbody>
    	    </table>
    	)
    }
	
} 

export class ProjectFlower extends React.Component {
    render(){
    	// div with project overview information and clickability
    	return (
    		<div className="project-link">
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
        	<ProjectFlower project={this.props.project} />
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
    	
    	/*
    	for(let i=0; i<linkList.length; i++){
    	    linkComponents.push(
    	    	<LinksRow 
    	    	  name={linkList[i].name} 
    	    	  url={linkList[i].url} 
    	    	  linkText={linkList[i].linkText}
    	    	  key={i}
    	  	/>
    	    );
    	}
    	*/
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

