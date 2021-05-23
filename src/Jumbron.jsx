import React from 'react';

const jumboStyle = {
   backgroundColor: "#2b2e4a",
};

export default function Jumbotron(props){
   return (
      <div class="jumbotron jumbotron-fluid text-white" style={jumboStyle}>
   <div class="container text-sm-center pt-5">
    <h1 class="display-1">JS Conf</h1>
    <p class="lead">A One-day COnference About All Things JavaScript</p>
    <div class="btn-group mt-4" role="group" aria-label="Callout buttons">
  <button type="button" class="btn btn-dark btn-lg" onClick={props.modal}>Register Now</button>
  <a href="#speakers" class="btn btn-light btn-lg">See Speakers</a>
</div>
  </div> 
  
</div>
   );
}