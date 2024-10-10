import React from 'react'
import tree from '../graphics/tree.ico'
import plant from '../graphics/plant-pot-resized-nobg.png'
import { useNavigate } from 'react-router-dom'


class PageLinkOld extends React.Component {
    
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

// Functional component for page link using navigate function
export function PageLink(props){
   let linkString = "#/"+ props.link
   const navigate = useNavigate();
   const handleClick = () => navigate(linkString);
   return(
       <a href={linkString} className="page-link">
       <div className="page-link-button" onClick={handleClick}>
        {props.name}
       </div>
       </a>
   )
}


class PageNav extends React.Component {
    
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
