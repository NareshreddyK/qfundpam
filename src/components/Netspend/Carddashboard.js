import React, { Component } from "react";

export default class Carddashboard extends Component {

  constructor (props) {
    super(props);
    this.state = {totalAmtDue:'', tenderType:''};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  render(){
	
	return (
        <div>
           <div className="col-sm-12">
            <div className="innerBlockContainer">
                <h2>Card Dashboard</h2>
                
                    <div className="innerBlockContainer">
                    <h2> CARD INFO </h2>
                        <table width="100%" border="0" className="noBorder noStripe col-table-4 nth-evenColor">
                            <tbody>                                         
                            <tr>
                                <td> Card is not yet registered with us. </td>    
                                <td> : ****_****_****_0701</td>
                                <td> Balance </td>   
                                <td>: $ &nbsp;</td>
                            </tr>
                            <tr>
                                <td> Card Status </td> 
                                <td> : &nbsp;</td> 
                                <td> Load Limit </td>    
                                <td> : $ &nbsp;</td> 
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="innerBlockContainer">
                    <h2> Enrollment Status   </h2>
                        <table width="100%" border="0" className="noBorder noStripe col-table-6 nth-evenColor">
                            <tbody>                                         
                            <tr>
                                <td> Activated </td>    
                                <td>: &nbsp;</td>
                                <td> Plan Type</td>   
                                <td>: &nbsp;</td>
                                <td> Direct Deposit </td> 
                                <td>: &nbsp;</td>  
                            </tr>
                            <tr>
                                <td> Any Time Alerts</td>    
                                <td> : &nbsp;</td>
                                <td> Saving Account</td>   
                                <td>: Not Eligible</td>  
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-sm-6">
				  <div className="innerBlockContainer contact-infoscroll">
				  <h2>Loan History</h2>
				  <table>                
                      <thead>
                        <tr>
                              <th>Loan Nbr</th>
                              <th>DealDt</th>
                              <th>DueDt</th>
                              <th>Amount</th>
                              <th>Product Cd</th>
                        </tr>
						</thead>
						<tbody><tr><td> &nbsp; </td><td> &nbsp; </td><td> &nbsp; </td><td> &nbsp; </td><td> &nbsp; </td></tr></tbody>
                      </table>
					  </div>
					  </div>
					   <div className="col-sm-6">
					  <div className="innerBlockContainer contact-infoscroll">
					  <h2>Load History</h2>
					  <table>                
                      <thead>
                        <tr>
                              <th>Source</th>
                              <th>Date</th>
                              <th>Type</th>
                              <th>Load Amount</th>
                              <th>Fee Amount</th>
                              <th>Select</th>
                        </tr>
                      </thead>
					  <tbody><tr><td> &nbsp; </td><td> &nbsp; </td><td> &nbsp; </td><td> &nbsp; </td><td> &nbsp; </td><td> &nbsp; </td></tr></tbody>
                      </table>
					  </div>
					  </div>
                      <div className="col-sm-12 text-center">
                        <button type="button" onClick={() => { this.props.addClose() }}> Close </button>          
                    </div>
            </div>
        </div>
        </div>
	);
  } 
}