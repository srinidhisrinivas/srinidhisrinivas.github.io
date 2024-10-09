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
	     	    {name:"History",link:"resume"}
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
    		{linkList}
    	    </table>
    	)
    }
	
} 

