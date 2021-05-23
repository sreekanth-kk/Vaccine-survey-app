import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Forms() {
  const initialProfileState = {
    name: "",
    age: "",
    bloodGroup: "",
    email: "",
    vaccine: "",
    city: "",
    hospital: "",
    pincode: "",
    phone: "",
    donatePlasma: false,
    dose1: false,
    dose2: false
  };
  const [profile, setProfile] = useState(initialProfileState);
  
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    console.log(profile)
    create();
    alert("Sucessfully Submitted Details");
    window.location.reload(false);

  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // console.log(event.target.name, event.target.value);
    setProfile({ ...profile, [name]: value });
    console.log(profile);
  };
  const handleCheckChange = (event) => {
    const { name, checked } = event.target;
    // console.log(event.target.name, event.target.value);
    setProfile({ ...profile, [name]: checked });
    console.log(profile);
  };

  const create = (e) => {
    // e.preventDefault();
    fetch(process.env.REACT_APP_API_URL+"/add", {
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify(profile)
    })
      .then(response => response.json())
      .then(response => {
        // console.log(response)) 
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="user-page">
      <h3>Hello Everyone ! </h3>
      <p> As the world is suffering from the Global Pandemic, we are here to play our part and make our presence count.
      This is a Vaccine Report program that will help us to keep track of the specific count of the
      individual who is vaccinated. As we know that the raw facts & figures will never help us to get rid
      of the global pandemic. So we will be using technology to make things better for our country.</p>
      <div className="form">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-elements">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="name" name="name" value={profile.name} onChange={handleInputChange} placeholder="Enter your name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" name="age" value={profile.age} onChange={handleInputChange} placeholder="Enter your age" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridBloodGroup">
            <Form.Label>Blood group</Form.Label>
            <Form.Control type="name" name="bloodGroup" value={profile.bloodGroup} onChange={handleInputChange} placeholder="Enter your Blood group" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={profile.email} onChange={handleInputChange} placeholder="Enter Email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" name="phone" value={profile.phone} onChange={handleInputChange} placeholder="Enter Phone number" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="name" name="city" value={profile.city} onChange={handleInputChange} placeholder="Enter City" />
          </Form.Group>
        </Form.Row>


        <Form.Row>
          <Form.Group as={Col} controlId="formGridVaccine">
            <Form.Label>Name of Vaccine</Form.Label>
            <Form.Control as="select" name="vaccine" value={profile.vaccine} onChange={handleInputChange} defaultValue="Select...">
              <option>Select...</option>
              <option>Covishield</option>
              <option>Covaxin</option>
              <option>Sputnik</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridHospital">
            <Form.Label>Hospital Name</Form.Label>
            <Form.Control type="name" name="hospital" value={profile.hospital} onChange={handleInputChange} placeholder="Enter Hospital name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPincode">
            <Form.Label>Pin code</Form.Label>
            <Form.Control type="number" name="pincode" value={profile.pincode} onChange={handleInputChange} placeholder="Enter Pincode" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Please check the Vaccine doses you have taken</Form.Label><br />
            <Form.Check inline type="checkbox" name="dose1" checked={profile.dose1} onChange={handleCheckChange} label="Dose1" />
            <Form.Check inline type="checkbox" name="dose2" checked={profile.dose2} onChange={handleCheckChange} label="Dose2" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group controlId="formBasicRadio">
            <Form.Label>Are you willing to donate Plasma ?</Form.Label><br />

            <Form.Check inline label="Yes" name="donatePlasma" value="true" onChange={handleInputChange} type="radio" />
            <Form.Check inline label="No " name="donatePlasma" value="false" onChange={handleInputChange} type="radio" />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
  </Button>
  </div>
      </Form>
      </div>
    </div>
  )
 

 
}

export default Forms
