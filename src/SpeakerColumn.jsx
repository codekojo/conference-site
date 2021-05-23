import React from 'react';

export default function SpeakerColumn({speakers}){
   return ( 
      <>
      
      {speakers.map(speaker => {
          return (
      <div className="col-md-6 col-lg-4">
      <div class="card mb-3">
      {speaker.img && <img class="card-img-top" alt="..." src={speaker.img} />}

      <div class="card-body">
      {speaker.name &&  <h5 class="card-title">{speaker.name} </h5> }

      {speaker.desc && <p class="card-text">{speaker.desc}</p>}

      </div>
      </div>
      </div>
     

   )})}
            </>
   );}