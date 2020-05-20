import React from 'react'


export default function Navbar() {
    return (
        <div>
          <h1>Joel Guevarra</h1>
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/ReactPortfolio">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href={["/Projects"]}>Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.linkedin.com/in/joel-guevarra/">Linkedin</a>
      </li>    
    </ul>
  </div>  
</nav>
        </div>
    )
}
