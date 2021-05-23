import React from 'react';

export default function Footer(){
   return(
      <div className="row py-3">
         <div className="col-md-7">

         <nav class="nav">
  <a class="nav-link" href="#">Community</a>
  <a class="nav-link" href="#">Tracks</a>
  
<div class="btn-group dropup">
  <button type="button" class="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Other Confs
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">CSS Conf</a>
    <a class="dropdown-item" href="#">Python Conf</a>
    <a class="dropdown-item" href="#">Java Conf</a>
    <a class="dropdown-item" href="#">Swift Conf</a>
  </div>
</div>
  
</nav>
         </div>

         <div className="col-md text-md-right">
            <small>&copy; 2021 Full Stack Conf &amp;</small>
         </div>

      </div>
   );
}