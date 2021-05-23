import React from 'react';
import SpeakerColumn from './SpeakerColumn';
import speakersContent from './speakersContent';

export default function Speaker(){
   return (
      <>
      <h1 id="speakers" className="display-4 text-center my-5 text-muted">Speaker</h1>
      <div className="row">
      <SpeakerColumn speakers={speakersContent}/>
      </div>
      </>
   )
}