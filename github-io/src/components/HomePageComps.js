import React from 'react'
import tree from '../graphics/tree.ico'
import plant from '../graphics/plant-pot-resized-nobg.png'

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
