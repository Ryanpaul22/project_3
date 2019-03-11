import React from 'react';
import 'whatwg-fetch';

// const {
//   partnerFirstName,
//   partnerLastName,
//   partnerEmail,
//   partnerPhone
// } = this.state;


const NewPartner = () => (
  <div align='center'>
  <br></br>
    <h3>New Partner</h3>
    <input 
              type="text" 
              placeholder="First Name"/>
              <br />

              <input 
              type="text" 
              placeholder="Last Name"/>
              <br />

              <input 
              type="email" 
              placeholder="Email"/>
              <br />

              <input 
              type="text"
              placeholder="Phone #"/>
              <br />
              <br></br>

              
              <button>Add New</button>
              <button>Submit</button>
  </div>
);

export default NewPartner;