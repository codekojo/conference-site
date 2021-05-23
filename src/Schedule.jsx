import React from 'react';
import scheduleContent from './scheduleContent';

function Schedule(){
   return(
      <>
      <h1  id = "schedule" className="display-4 text-center my-5 text-muted">schedule</h1>
      <ul className="list-group">
      {scheduleContent.map(schedule => {
         return(
         <> 
         {schedule && 
         <li className={`list-group-item ${schedule.success && schedule.success}`}>
         <div class="d-flex justify-content-between">
         <h5 class="mb-1">{schedule.topic}</h5>
         <span class="badge badge-dark p-2">{ schedule.time}</span>
          </div>
         <p className="mb-1">{schedule.name}</p>
         </li>
      }
         </>
         );
      })}
      </ul>

      </>
   );
}


export default Schedule;


