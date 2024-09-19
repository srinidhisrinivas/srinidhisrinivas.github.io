import logo from '../graphics/logo.svg';
import profile from '../graphics/Profile-Full.jpg'
import { PageNav } from '../components/Components.js'
import React from 'react'
import '../App.css';

class TestComponent extends React.Component {
    render() {
        return (
            <p>
               Text {this.props.text}
            </p>
        )
    }
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <p>
          Hello! I am Srinidhi Srinivas.
        </p>
        
        <div>
      This div appears
      <TestComponent text="hehe" />
      
      	<PageNav 
      	    links={[{name:"Home",link:"home"},{name:"Projects",link:"projects"}]}
      	/>
      	 
      </div>
      </header>
      
    </div>
  );
}

export default Home;
