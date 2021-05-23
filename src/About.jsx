import React from 'react';

export default function About(){
   return (
      <div id="about" class="row py-2 text-muted">
    <div class="col-md-6 col-xl-5">
      <p><strong>About Treehouse</strong></p>
      <p>Treehouse brings affordable technology education to people everywhere to help them achieve their dreams and change the world.</p>
    </div>
  <div class="col-md-6 col-xl-5 offset-xl-2">
    <p><strong>Stay up-to-date on Full Stack Conf</strong></p>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Email" />
        <span class="input-group-btn">
          <button class="btn btn-primary" type="button">Sign up</button>
        </span>
      </div>
    </div>
  </div>
   );
}