import React from 'react';


export default function Navbar(){
   return (
      <nav class="navbar navbar-expand-lg navbar-light fixed-top " style={{backgroundColor: "#393e46"}}>
      <div className="container">

      
   <a class="navbar-brand order-1 mr-0 text-white" href="/">JS Conf</a>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ">
   
      <a className="nav-link text-white" href="#home">Home <span class="sr-only">(current)</span></a>
      <a className="nav-link text-white" href="#about">About</a>
      <a className="nav-link text-white" href="#speakers">Speakers</a>
      <a className="nav-link text-white" href="#schedule">Scheduled</a>
     
    </div>
  </div>
  
  </div>
</nav>
   );
}