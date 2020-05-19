import React from 'react'


export default function Projects() {
    const style = {backgroundColor: "whitesmoke"}
    return (
        <div className="container" style ={style}>
            <div class="row">
        <div class="col-md-4">
        <a class="nav-link" href="https://github.com/jrock312"><h2>Git Hub</h2></a>
        <img src={ require('../Assets/git hub.jpg')} alt="Woops" style={{width: "100%"}} link to= {"https://github.com/jrock312"} />
    </div>  

    <div class="col-md-4">
    <a class="nav-link" href="https://shopprudentialuniforms.com"><h2>Company Site</h2></a>
        <img src={ require('../Assets/Prudential.jpg')} alt="Woops" style={{width: "100%"}} link to= {"https://shopprudentialuniforms.com"} />
    </div>    
    <div class="col-md-4">
    <a class="nav-link" href="https://scratch.mit.edu/projects/350505173/"><h2>Scratch Game</h2></a>
        <img src={ require('../Assets/cat and mouse.jpg')} alt="Woops" style={{width: "100%"}} link to= {"https://scratch.mit.edu/projects/350505173/https://scratch.mit.edu/projects/350505173/"} />
    </div>   
    <div class="col-md-4">
    <a class="nav-link" href="http://rocky-island-60367.herokuapp.com/members"><h2>First Fantasy</h2></a>
        <img src={ require('../Assets/first fantasy.jpg')} alt="Woops" style={{width: "100%"}} link to= {"http://rocky-island-60367.herokuapp.com/members"} />
    </div>    
    <div class="col-md-4">
      <a class="nav-link" href="https://jrock312.github.io/leftovers"><h2>Leftovers</h2></a>
    <img src={ require('../Assets/Leftovers.jpg')} alt="Woops" style={{width: "100%"}} link to= {"https://jrock312.github.io/leftovers"} />
    </div>    
    
    </div>
        </div>
    )
}
