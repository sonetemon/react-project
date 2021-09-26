import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./NetworkList.css";


export default function NetworkList() {
  const [status, setStatus] = useState(null);
    const [nets, setData] = useState([]); //table data
    console.log(nets);

  useEffect(() => { 
    fetch("https://gf0fe4d236bb4e8-db202109070944.adb.us-ashburn-1.oraclecloudapps.com/ords/leads/trupower/networks")
        .then(res => res.json())
        .then(res => setData(res.items)) 
         })


            
  const handleDelete = (id) => {
           console.log(id);
           axios.delete('https://gf0fe4d236bb4e8-db202109070944.adb.us-ashburn-1.oraclecloudapps.com/ords/leads/trupower/networks/'+id)
           .then(() => setStatus('Delete successful'));
         };

  const columns = [

    { field: "first_name", headerName: "First Name", width: 150 },
    {
      field: "last_name",
      headerName: "Last Name",
      width: 150,
    },
    {
      field: "org",
      headerName: "Industry",
      width: 130,
    },
    {
        field: "company",
        headerName: "Company",
        width: 140,
      },
      {
        field: "address",
        headerName: "Address",
        width: 160,
      },  
      {
        field: "city",
        headerName: "City",
        width: 110,
      },
      {
        field: "state",
        headerName: "State",
        width: 110,
      },         
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/network/" + params.row.id}>
              <button className="networkListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="networkListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    
    <div className="networkList">
       <h3>Status: {status} </h3>
      <Link to="/newnetwork" className="link">
              <button>
                Create Network
      </button>
      </Link>
      <DataGrid
        rows={nets}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}