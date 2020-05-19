import React from 'react'

export default function home() {
    const style = {backgroundColor: "whitesmoke"}
    return (
        <div className="container" style ={style}>
        <div class="row">
    <div class="col-md-3">
    <h2>About Me</h2>
    <img src={ require('../Assets/porfolioImage.jpg')} alt="Woops" style={{width: "100%"}} />
</div>  

<div class="col-md-6">
<p>I am Joel Guevrra and worked as a system support specialist for many years and have recently moved to working with my companies Direct Sales website and IT support. 
      I am a husband and father of two children, which is my inspiration to want to continue to learn an grow. In my spare time I like to drink and "try" to make craft beer as well as watch Warriors and niner games.    
    </p>
</div>    

</div>
    </div>
    )
}

