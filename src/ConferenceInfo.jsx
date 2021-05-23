import React from 'react';
import Column from './Column';
import bgimage from './img/pdx.jpg'




function ConferenceInfo(props) {
   // I can receive it as an array
   return (
      <div className="row">
      <Column about={props.about} bgimg={bgimage} order="order-lg-2"/>
      <Column about={props.speaker} order="order-lg-1"/>
      <Column topic={props.topic} order="order-lg-3"/>
     

      
       
      </div>
   )
}





export default ConferenceInfo;