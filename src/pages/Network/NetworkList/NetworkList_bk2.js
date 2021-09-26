import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

function NetworkList(props) { 
  let history = useHistory(); 
  const [data, setData] = useState([]);  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('https://gf0fe4d236bb4e8-db202109070944.adb.us-ashburn-1.oraclecloudapps.com/ords/leads/trupower/networks'); 
      //console.log(result);
      setData(result.data.items);  
    };  
    GetData(); 
    //console.log(data); 
  }, [data]);  
  const deletenetwork = (id) => {  
    debugger;  
           axios.delete('https://gf0fe4d236bb4e8-db202109070944.adb.us-ashburn-1.oraclecloudapps.com/ords/leads/trupower/networks/'+id)
      .then((result) => {  
        history.push('/networks')  
      });  
  };  
  const editnetwork = (id) => {  
    history.push({  
      pathname: '/networkedit/' + id  
    });  
  };  
  return (  
    <div className="animated fadeIn">  
      <Row>  
        <Col>  
          <Card>  
            <CardHeader>  
              <i className="fa fa-align-justify"></i> Employee List  
              </CardHeader>  
            <CardBody>  
              <Table hover bordered striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th>First Name</th>
                    <th>Last Name</th>  
                    <th>Birth Date</th>  
                    <th>Industry</th>
                    <th>Company</th>  
                    <th>City</th>  
                    <th>State</th>  
                    <th>Address</th>  
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>  
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      return <tr>  
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.birth_date}</td>
                        <td>{item.org}</td>  
                        <td>{item.company}</td>
                        <td>{item.city}</td>
                        <td>{item.state}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>  
                          <div class="btn-group">  
                            <button className="btn btn-warning" onClick={() => { editnetwork(item.id) }}>Edit</button>  
                            <button className="btn btn-warning" onClick={() => { deletenetwork(item.id) }}>Delete</button>  
                          </div>  
                        </td>  
                      </tr>  
                    })}  
                </tbody>  
              </Table>  
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
    </div>  
  )  
}  
export default NetworkList