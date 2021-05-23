import React, {Fragment, useState} from 'react';
import ConferenceInfo from './ConferenceInfo';
import {aboutContent, speakerContent, topicContent } from './content';
import About from './About';
import Navbar from './Navbar';import Jumbotron from './Jumbron';
import Footer from './Footer';
import Speaker from './Speakers';
import Schedule from './Schedule';
import RegistrationModal from './RegisterModal';
import {Button} from 'react-bootstrap';






function App() {

  const [modalShow, setModalShow] = useState(false);

  function toggleModal(){
    setModalShow(true);
  }


  return(
    <Fragment>
    <Navbar />
    <Jumbotron modal={toggleModal} />
    <div className="container pt-4" id="home"> 
    <ConferenceInfo about={aboutContent} speaker={speakerContent}  topic={topicContent}/>
    
    <Speaker/>

    <Schedule />


    <button type="button" class="btn btn-outline-dark btn-lg mx-auto my-5 d-block" onClick={toggleModal}>Don't Miss Out, Register Now</button>
    <hr/>
    <About />
    <hr/>

      <RegistrationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    <Footer />

    </div>
    
    </Fragment>
  );
}

export default App;