import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import "./NewNetwork.css";

export default function NewNetwork() {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [org, setIndustry] = useState('');
    const [company, setCompany] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    let history = useHistory();

    function postData()
    {
      let data={first_name,last_name,org,company,state,city,phone,email,address}
     console.warn(data);
    fetch('https://gf0fe4d236bb4e8-db202109070944.adb.us-ashburn-1.oraclecloudapps.com/ords/leads/trupower/networks', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
      }).then((resp)=>{
         console.warn("resp",resp);
      })
      history.push('/networks')
    }



    
    
        



  return (
    <div className="newNetwork">
      <h1 className="addNetworkTitle">Add Network</h1>
      <form className="addNetworkForm">

        <div className="addNetworkItem">
          <label>First Name</label>
          <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className="addNetworkItem">
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
        </div>   
        <div className="addNetworkItem">
          <label>Industry</label>
          <input type="text" placeholder="Industry" onChange={(e) => setIndustry(e.target.value)}/>
        </div>   
        <div className="addNetworkItem">
          <label>Company</label>
          <input type="text" placeholder="Industry" onChange={(e) => setCompany(e.target.value)}/>
        </div>       
        <div className="addNetworkItem">
          <label>City</label>
          <input type="text" placeholder="City" onChange={(e) => setCity(e.target.value)}/>
        </div>
        <div className="addNetworkItem">
          <label>State</label>
          <input type="text" placeholder="City" onChange={(e) => setState(e.target.value)}/>
        </div>     
        <div className="addNetworkItem">
          <label>Phone</label>
          <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
        </div>       
        <div className="addNetworkItem">
          <label>Email</label>
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        </div>     
        <div className="addNetworkItem">
          <label>Address</label>
          <input type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
        </div> 
        <button onClick={postData} className="addNetworkButton">Create</button>
      </form>
    </div>
  );
}