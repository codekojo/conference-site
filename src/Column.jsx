import React from 'react';


function Column ({about, topic, bgimg, order}) {
   return (
      <div className={`col-lg ${order && order}`}>
         {about && about.map(({header}) => {
            return (
               <>
               {header && <h3 className="mb-4">{header}</h3>}
               </>
            );
         })}
         {bgimg && <img className="rounded mb-4 img-fluid d-none d-sm-block" src={bgimg} alt="oregon conf centre"/>}
         

         {about && about.map(({content}) => {
            return (
               content.map(s => {
                 return (<p>{s}</p>)
               })
            );
         })}

         {topic && topic.map(({header}) => {
            return (
               <>
               {header && <h3 className="mb-4">{header}</h3>}
               </>
            );
         })}

         <div class="list-group">
         {topic && topic.map(({content}) => {
            return (
               content.map(s => {
                 return (
                    <>
                   {s.Language && <a href="#" class="list-group-item list-group-item-action list-group-item-secondary"><strong>{s.Language}</strong>: {s.Desc && s.Desc}
                   </a>}
                   </>
                 )
               })
            );
         })}
         </div>


         
      </div>
   )
}

export default Column;

