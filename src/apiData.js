import { Component } from "react";

export default class apiData extends Component{
  state = {
    emps:[]
  };
componentDidMount(){
  fetch("https://gf0fe4d236bb4e8-db202109070944.adb.us-ashburn-1.oraclecloudapps.com/ords/leads/trupower/networks")
  .then(res => res.json())
  .then(json => {this.setState({emps:json.items});});
}
}