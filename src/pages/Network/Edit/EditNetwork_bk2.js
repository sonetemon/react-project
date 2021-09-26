import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';
import "./Edit.css";

function EditNetwork(props) {  
       let history = useHistory(); 
        const [net, setData]= useState([{id:0,first_name: '',last_name: '', org: '', company: '', city: '',
        state: '',email: '',phone: '', address: ''}]);

        const { id } = useParams();


        useEffect(() => {
          const GetData = async () => { 
            const result = await axios("https://gf0fe4d236bb4e8-db202109070944.adb.us-ashburn-1.oraclecloudapps.com/ords/leads/trupower/networks/"+ id);
            console.log(result.data.items[0]);
            setData(result.data.items[0]);

          };
          GetData();
        }, [id]);


        const UpdateNetwork = (e) => {
          e.preventDefault();
          const data = {id:net.id, first_name:net.first_name, last_name:net.last_name, birth_date: net.birth_date, org:net.org, company:net.company, city:net.city, state: net.state, phone: net.phone, email: net.email};
          console.log(data);
          axios.put('https://gf0fe4d236bb4e8-db202109070944.adb.us-ashburn-1.oraclecloudapps.com/ords/leads/trupower/editnetwork', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
          })
            .then((result) => { 
              console.log(result);
              history.push('/networks') 
            });  
        };
        const onChange = (e) => {  
          e.persist();  
          setData({...net, [e.target.name]: e.target.value});  
        }
        return (  
                <div className="editNetwork">  
                <Container>  
                  <Row >  
                    <Col md="12" lg="10" xl="8"> 
                      <Card>  
                        <CardBody>  
                          <Form onSubmit={UpdateNetwork}>  
                            <h1>Update Network</h1>
                            <InputGroup className="mb-4">              
                              <Input type="text" name="first_name" id="first_name" placeholder="First Name" value={net.first_name} onChange={ onChange }  />  
                            </InputGroup> 
                            <InputGroup className="mb-4">              
                              <Input type="text" name="last_name" id="last_name" placeholder="Last Name" value={net.last_name} onChange={ onChange }  />  
                            </InputGroup>  
                             <InputGroup className="mb-3">
                              <Input type="date" placeholder="Birthdate" name="birth_date" id="birth_date" value={net.birth_date} onChange={ onChange }/>
                            </InputGroup>  
                            
                            <InputGroup className="mb-3">
                              <Input type="text" placeholder="Industry" name="org" id="org" value={net.org} onChange={ onChange }/>
                            </InputGroup>  
                            
                            <InputGroup className="mb-3">
                              <Input type="test" placeholder="Company" name="company" id="company" value={net.company} onChange={ onChange }/>
                            </InputGroup>  
                            
                            <InputGroup className="mb-3"> 
                              <Input type="text" placeholder="City" name="city" id="city"  value={net.city} onChange={ onChange }  />  
                            </InputGroup>                              <InputGroup className="mb-4">  
                              <Input type="text" placeholder="state" name="state" id="state" value={net.state} onChange={ onChange }  />  
                            </InputGroup> 
                            <InputGroup className="mb-4">  
                              <Input type="text" placeholder="address" name="address" id="address" value={net.address} onChange={ onChange } />  
                            </InputGroup>  
                            <InputGroup className="mb-4">   
                               <Input type="text" placeholder="phone" name="phone" id= "phone" value={net.phone} onChange={ onChange } />  
                            </InputGroup>
                            <InputGroup className="mb-4">   
                               <Input type="text" placeholder="email" name="email" id= "email" value={net.email} onChange={ onChange } />  
                            </InputGroup>  
                      <CardFooter className="p-4">  
                          <Row>  
                            <Col xs="12" sm="6">  
                              <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>  
                            </Col>  
                            <Col xs="12" sm="6">  
                              <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>  
                            </Col>  
                          </Row>  
                        </CardFooter>  
                          </Form>  
                        </CardBody>                 
                      </Card>  
                    </Col>
                  </Row>
                </Container>
              </div>
        )
} 
export default EditNetwork