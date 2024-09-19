import React from 'react'


export class PageLink extends React.Component {
    
    render(){
    	let linkString = "#/"+this.props.link
    	return(
    	    <a href={linkString} className="page-link">
    	    {this.props.name}
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
    	console.log("we out here");
    	console.log(this.props.links);
    	let navList = this.buildNavList(this.props.links);
    	console.log(navList)
        return(
    	    <div className="page-nav">
    		{navList}
    	    </div>
    	)
    }
	
}
