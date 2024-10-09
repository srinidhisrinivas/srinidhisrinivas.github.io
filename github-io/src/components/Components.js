import React from 'react'
import tree from '../graphics/tree.ico'

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
    	    console.log("buildNavList " + i);
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
	      	    {name:"Plants",link:"projects"}
	      	    ]}
	      	/>
	      </div>
    	)
    }
}
