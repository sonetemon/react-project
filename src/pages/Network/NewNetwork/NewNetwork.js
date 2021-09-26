import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NetworkService from '../../../services/NetworkService';
class NewNetwork extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            first_name: '',
            last_name: '',
            birth_date: '',
            org: '',
            company: '',
            city: '',
            state: '',
            address: '',
            phone: '',
            email: ''
        }
        console.log(this.state.id);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeBirthDateHandler = this.changeBirthDateHandler.bind(this);
        this.changeIndustryHandler = this.changeIndustryHandler.bind(this);
        this.changeCompanyHandler = this.changeCompanyHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveOrUpdateNetwork = this.saveOrUpdateNetwork.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            NetworkService.getNetworkById(this.state.id).then( (res) =>{
                let network = res.data;
                this.setState({firstName: network.firstName,
                    last_name: network.last_name,
                    birth_date: network.birth_date,
                    org: network.org,
                    company: network.company,
                    city: network.city,
                    state: network.state,
                    address: network.address,
                    phone: network.phone,
                    email : network.email
                });
            });
        }        
    }
    saveOrUpdateNetwork = (e) => {
        e.preventDefault();
        let network = {first_name: this.state.first_name, last_name: this.state.last_name,birth_date: this.state.birth_date, org: this.state.org, company: this.state.company, city: this.state.city, state: this.state.state, address: this.state.address,phone: this.state.phone, email: this.state.email};
        console.log('network => ' + JSON.stringify(network));

        // step 5
        
            NetworkService.createNetwork(network).then(res =>{
                this.props.history.push('/networks');
            });
        
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({first_name: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({last_name: event.target.value});
    }

    changeBirthDateHandler= (event) => {
        this.setState({birth_date: event.target.value});
    }
 
    changeIndustryHandler= (event) => {
        this.setState({org: event.target.value});
    } 
 
    changeCompanyHandler= (event) => {
        this.setState({company: event.target.value});
    }    
 
    changeCityHandler= (event) => {
        this.setState({city: event.target.value});
    } 

    changeStateHandler= (event) => {
        this.setState({state: event.target.value});
    }

    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }    
 
    changePhoneHandler= (event) => {
        this.setState({phone: event.target.value});
    }   
 
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }   

    cancel(){
        this.props.history.push('/networks');
    }

    getTitle(){
            return <h3 className="text-center">Add Network</h3>
        }
    render() {
        return (
            <div>
                <br></br>
                <form>
                <div className = "card">    
                <div class="card-header">{this.getTitle()}</div>
                <div className = "card-body">
                        <div className = "row justify-content-md-center">
                                    <div className="col-md-6">
                                    <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="first_name" className="form-control" 
                                                value={this.state.first_name} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="last_name" className="form-control" 
                                                value={this.state.last_name} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Birth Date: </label>
                                            <input type="date" placeholder="Birth DAte" name="birth_date" className="form-control" 
                                                value={this.state.birth_date} onChange={this.changeBirthDateHandler}/>
                                        </div>            
                                        <div className = "form-group">
                                            <label> Industry: </label>
                                            <input type="text" placeholder="Industry" name="org" className="form-control" 
                                                value={this.state.org} onChange={this.changeIndustryHandler}/>
                                        </div>       
                                        <div className = "form-group">
                                            <label> Company: </label>
                                            <input type="text" placeholder="Company" name="company" className="form-control" 
                                                value={this.state.company} onChange={this.changeCompanyHandler}/>
                                        </div>  
                                        </div>
                                        <div className="col-md-6"> 
                                        <div className = "form-group">
                                            <label> City: </label>
                                            <input type="text" placeholder="City" name="city" className="form-control" 
                                                value={this.state.city} onChange={this.changeCityHandler}/>
                                        </div>  
                                        <div className = "form-group">
                                            <label> State: </label>
                                            <input type="text" placeholder="State" name="state" className="form-control" 
                                                value={this.state.state} onChange={this.changeStateHandler}/>
                                        </div>   
                                        <div className = "form-group">
                                            <label> Address: </label>
                                            <input type="text" placeholder="Address" name="address" className="form-control" 
                                                value={this.state.address} onChange={this.changeAddressHandler}/>
                                        </div>  
                                        <div className = "form-group">
                                            <label> Phone: </label>
                                            <input type="text" placeholder="Phone" name="phone" className="form-control" 
                                                value={this.state.phone} onChange={this.changePhoneHandler}/>
                                        </div>                                   
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        </div>
                                        
                                        <div className="col-md-8"> 
                                        
                                        </div>
                                        <div className="col-md-4 justify-content-end"> 
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateNetwork}>Save</button>
                                       
                                        </div>
                                    
                                </div>
                                
                        </div>
                     </div>
                     </form>
            </div>
        )
    }
}

export default withRouter(NewNetwork)