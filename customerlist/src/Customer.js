import React from 'react'
import axios from 'axios'



class Customers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectCustomer:1
        }
    }

    componentDidMount() {
        this.getCustomerData();
    }
    // #fetch data from database
    getCustomerData(){
        axios.get('assets/customerlist.json').then(response=>{
            this.setState({customerList:response})
        })
    }
    render() {
        if(!this.state.customerList){
            return(<p>Loading Data</p>)
        }
        return(
            <div className="addmargin">
                <div className='col-md-3'>
                    {
                        this.state.customerList.data.map(customer=>
                        <div key={customer.name} className="centeralign">
                            <h1 className="panel-heading">{customer.name}</h1>
                            <div className="panel-body">
                                <p>{customer.email}</p>
                                <p>{customer.phone}</p>
                                <button className="btn btn-info" onClick={()=> this.setState({selectedcustomer:customer.id})}>Click to view details</button>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        );
    }
 }
 export default Customers;