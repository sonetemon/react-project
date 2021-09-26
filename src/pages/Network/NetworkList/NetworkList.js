import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NetworkService from '../../../services/NetworkService';

class NetworkList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            networks: []
        }
        this.addNetwork = this.addNetwork.bind(this);
        this.editNetwork = this.editNetwork.bind(this);
        this.deleteNetwork = this.deleteNetwork.bind(this);
    }

    deleteNetwork(id){
        NetworkService.deleteNetwork(id).then( res => {
            this.setState({networks: this.state.networks.filter(network => network.id !== id)});
        });
    }
    viewNetwork(id){
        this.props.history.push('/networkedit/' + id);
    }
    editNetwork(id){
        this.props.history.push('/networkedit/' + id);
    }

    componentDidMount(){
        NetworkService.getNetworks().then((res) => {
            this.setState({ networks: res.data.items});
        });
    }

    addNetwork(){
        this.props.history.push('/newnetwork');
    }

    getFormattedDate(dt) {

        var date = new Date(dt);
        return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();
    }


    render() {
        return (
            <div>
                 <h2 className="text-center">Network List</h2>
                 <div className = "row">
                 <div className = "col-md-4" >
                    <button className="btn btn-success" onClick={this.addNetwork}> Add Network</button>
                 </div>
                 </div>
                 <br></br>
                 <div className = "row justify-content-md-center gx-0">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Birth Date</th>
                                    <th> Industry</th>
                                    <th> Company</th>
                                    <th> City</th>
                                    <th> state</th>
                                    <th> Address</th>
                                    <th> Phone</th>
                                    <th> Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.networks.map(
                                        network => 
                                        <tr key = {network.id}>
                                             <td> { network.first_name} </td>   
                                             <td> {network.last_name}</td>
                                             <td> {  this.getFormattedDate(network.birth_date)}</td>
                                             <td> {network.org}</td>
                                             <td> {network.company}</td>
                                             <td> {network.city}</td>
                                             <td> {network.state}</td>
                                             <td> {network.address}</td>
                                             <td> {network.phone}</td>
                                             <td> {network.email}</td>
                                             <td>
                                                 <button onClick={ () => this.editNetwork(network.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteNetwork(network.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewNetwork(network.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default withRouter(NetworkList)