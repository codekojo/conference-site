import React, {useState} from 'react';
import {Modal, Button, Form} from "react-bootstrap";


export default function RegistrationModal(props) {

   const [userDetails, setUserDetails] = useState({email: "", password:""});
   
   function handleChange(e){
      const {value, name} = e.target;
      

   }

   return (
     <Modal
       {...props}
       aria-labelledby="contained-modal-title-vcenter"
       centered
     >
       <Modal.Header closeButton>
         <Modal.Title id="contained-modal-title-vcenter">
           JS Conf Registration
         </Modal.Title>
       </Modal.Header>
       <Modal.Body>

       <form action="/" method="post">
       <h5 className="mb-4">Basic Info</h5>
      
       <div class="form-group">
       <label>Name</label>
      <input type="text" className="form-control" placeholder="Enter name" />
      </div>

         <div class="form-group">
            <label>Email address</label>
            <input onChange={handleChange} type="email" placeholder="Enter email"  name="email" className="form-control"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
         </div>

         <div class="form-group">
         <label for="exampleFormControlSelect1">Example select</label>
         <select class="form-control custom-select" id="exampleFormControlSelect1">
                     <option selected disabled>Roles</option>
                     <option value="full-stack">Full Stack JavaScript Developer</option>
                     <option value="frontend">Front End Developer</option>
                     <option value="backend">Back End Developer</option>
                     <option value="designer">Designer</option>
                     <option value="student">Student</option>
               </select>
           </div>
         
         <hr className="my-4"/>

         <h5 className="mb-4">Which Topics interest you most </h5>
         <div class="form-check custom-control custom-checkbox ">
  <input type="checkbox" class="custom-control-input" id="customCheck1" />
  <label class="custom-control-label" for="customCheck1">JavaScript Topics</label>
      </div>
      <div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck2" />
  <label class="custom-control-label" for="customCheck2">JavaScript Libraries</label>
      </div>
      <div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck3" />
  <label class="custom-control-label" for="customCheck3">Node JS</label>
      </div>
      <div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck4" />
  <label class="custom-control-label" for="customCheck4">Build Tools</label>
      </div>
      <div class="custom-control custom-checkbox mb-4">
  <input type="checkbox" class="custom-control-input" id="customCheck5" />
  <label class="custom-control-label" for="customCheck5">ES2015</label>
      </div>


       

         <Button variant="primary" type="submit" className="d-block mx-auto">
            Submit
         </Button>


         </form>
       </Modal.Body>
       <Modal.Footer>
         <Button onClick={props.onHide}>Close</Button>
       </Modal.Footer>
     </Modal>
   );
 }
 