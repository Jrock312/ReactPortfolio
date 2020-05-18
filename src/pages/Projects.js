import React from 'react'


export default function Projects() {
    const style = {backgroundColor: "pink"}
    return (
        <div className="container" style ={style}>
            <h1>Projects Page</h1>
            <div class="row">
      <div class="col-md-4">
        <h2>Project 1 Leftovers</h2>
    <img id="bio-image" src="Assets/Images/Leftovers.jpg" alt="POS" style={{width: "100%"}}onclick="window.open('https://jrock312.github.io/leftovers/', '_blank');" />
    </div>    
        <div class="col-md-4">
            <h2>Gitbub</h2>
    <img id="bio-image" src="Assets/Images/git hub.jpg" alt="POS" style={{width: "100%"}}onclick="window.open('https://github.com/jrock312/', '_blank');" />
    </div>  

    <div class="col-md-4">
        <h2>Company Site</h2>
    <img id="bio-image" src="Assets/Images/Prudential.jpg" alt="POS" style={{width: "100%"}}onclick="window.open('https://www.shopprudentialuniforms.com/', '_blank');" />
    </div>    
    
    <div class="col-md-4">
        <h2>Scratch Game</h2>
    <img id="bio-image" src="Assets/Images/cat and mouse.jpg" alt="POS" style={{width: "100%"}}onclick="window.open('https://scratch.mit.edu/projects/350505173/', '_blank');" />
    </div>    
    <div class="col-md-4">
      <h2>Project 2</h2>
  <img id="bio-image" src="Assets/Images/first fantasy.jpg" alt="POS" style={{width: "100%"}}onclick="window.open('http://rocky-island-60367.herokuapp.com/members', '_blank');" />
  </div>    
    </div>
        </div>
    )
}
