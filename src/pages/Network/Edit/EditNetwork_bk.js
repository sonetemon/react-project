import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./Edit.css";

export default function EditNetwork() {
    const [net, setData] = useState([{id:'',first_name: '',last_name: '', org: '', company: '', city: '',
     state: '',email: '',phone: ''}]); //table data
    //console.log(net[0].first_name);
    const { id } = useParams();


  useEffect(() => {
    const GetData = async () => { 
      const result = await axios("https://gf0fe4d236bb4e8-db202109070944.adb.us-ashburn-1.oraclecloudapps.com/ords/leads/trupower/networks/"+ id);
      setData(result.data.items);
    };
    GetData();
  }, [id]);

  const editNetwork = (e) => {
    e.preventDefault();
    setData({...net, [e.target.name]: e.target.value});
  };
  return (
    <div className="edit">
      <Form>
        <Form.Group>
          <Form.Label>
            <h1>ID NO: {net[0].id}</h1>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            value={net[0].first_name}
           // onChange={editNetwork}
            
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            value={net[0].last_name}
            onChange={editNetwork}
            placeholder={net[0].last_name}
          />
        </Form.Group>      

         <Form.Group>
          <Form.Label>Industry</Form.Label>
          <Form.Control
            type="text"
            name="org"
            value={net[0].org}
            onChange={editNetwork}
            placeholder={net[0].org}
          />
        </Form.Group> 

        <Form.Group>
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            name="company"
            value={net[0].company}
            onChange={editNetwork}
            placeholder={net[0].company}
          />
        </Form.Group> 

        <Form.Group>
          <Form.Label>city</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={net[0].city}
            onChange={editNetwork}
            placeholder={net[0].city}
          />
        </Form.Group> 

        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            name="state"
            value={net[0].state}
            onChange={editNetwork}
            placeholder={net[0].state}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={net[0].address}
            onChange={editNetwork}
            placeholder={net[0].address}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={net[0].phone}
            onChange={editNetwork}
            placeholder={net[0].phone}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={net[0].email}
            onChange={editNetwork}
            placeholder={net[0].email}
          />
        </Form.Group>

        <Link to="/">
          <Button onSubmit={()=>editNetwork} variant="primary" type="submit">
            Edit Network
          </Button>
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};