import React, { Component } from "react";
import Datepicker from '../common/Datepicker';

export default class ShareCustSummary extends Component {

  constructor (props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.nlClose = this.nlClose.bind(this);
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

 nlClose(){
    this.props.ldCallback("ILP");
  }
  render(){
	
	return (
        <div>
           <div className="col-sm-12">
            <div className="innerBlockContainer">
                <div className="col-sm-12">
                    <h2> Personal Information </h2>
                    <div className="row">
                        <table width="100%" border="0" className="col-table-6 noBorder noStripe  nth-evenColor">
                            <tbody>
                            <tr>
                                <td>First Name</td>
                                <td> Test </td>
                                <td>Last Name</td>
                                <td> Test </td>
                                <td>Social Security Number</td>
                                <td> xxx-xx-5913</td>
                            </tr>
                        </tbody>    
                        </table>
                    </div>
                </div>
                <div className="col-sm-12">
                    <h2> Mailing Address </h2>
                    <div className="row">
                        <table width="100%" border="0" className="col-table-6 noBorder noStripe  nth-evenColor">
                            <tbody>
                            <tr>
                                <td>Address line1</td>
                                <td> 8574 Westheimer Rd. </td>
                                <td>City</td>
                                <td> Houston </td>
                                <td>State</td>
                                <td> Texas</td>
                            </tr>
                            <tr>    
                                <td>Zip Code</td>
                                <td> 77063</td>
                            </tr>
                        </tbody>    
                        </table>
                    </div>
                </div>
                <div className="col-sm-12">
                    <h2> Physical Address </h2>
                    <div className="row">
                        <table width="100%" border="0" className="col-table-6 noBorder noStripe  nth-evenColor">
                            <tbody>
                            <tr>
                                <td>Address line1</td>
                                <td> 8574 Westheimer Rd. </td>
                                <td>City</td>
                                <td> Houston </td>
                                <td>State</td>
                                <td> Texas</td>
                            </tr>
                            <tr>    
                                <td>Zip Code</td>
                                <td> 77063</td>
                            </tr>
                        </tbody>    
                        </table>
                    </div>
                </div>
                <div className="col-sm-12">
                    <h2> Contact Information </h2>
                    <div className="row">
                        <table width="100%" border="0" className="col-table-6 noBorder noStripe  nth-evenColor">
                            <tbody>
                            <tr>
                                <td>Primary Phone</td>
                                <td> (875)875-8748 </td>
                                <td>Primary Type</td>
                                <td> Cell </td>
                                <td>Email</td>
                                <td> test@gmail.com</td>
                            </tr>
                        </tbody>    
                        </table>
                    </div>
                </div>
                <div className="col-sm-12">
                    <h2> Miscellaneous Information </h2>
                    <div className="row">
                        <table width="100%" border="0" className="col-table-6 noBorder noStripe  nth-evenColor">
                            <tbody>
                            <tr>
                                <td>Photo Id Nbr </td>
                                <td> 675hgk </td>
                                <td>Photo Id Type</td>
                                <td> Drivers License </td>
                                <td>ID State</td>
                                <td> Texas </td>
                            </tr>
                            <tr>    
                                <td> ID Zip Code </td>
                                <td> 77063 </td>
                                <td> ID Expiration Date</td>
                                <td> 09-09-2030 </td>
                                <td>DOB</td>
                                <td> 09-09-1990 </td>
                            </tr>
                        </tbody>    
                        </table>
                    </div>
                </div>
                <div className="col-sm-12">
                    <h2> Income Details </h2>
                    <div className="row">
                        <table width="100%" border="0" className="col-table-6 noBorder noStripe  nth-evenColor">
                            <tbody>
                            <tr>
                                <td> Income Hoddler </td>
                                <td> Self </td>
                                <td> Income Type</td>
                                <td> Employed </td>
                                <td>Employer</td>
                                <td> Virinchi </td>
                            </tr>
                            <tr>    
                                <td> Work Phone </td>
                                <td> 1234567890 </td>
                                <td> Gross Income Amt</td>
                                <td> $9000 </td>
                                <td>Pay Frequency</td>
                                <td> Monthly </td>
                            </tr>
                            <tr>
                                <td>Direct Deposit</td>
                                <td> No </td>
                            </tr>
                        </tbody>    
                        </table>
                    </div>
                </div>
                <div className="col-sm-12">
                    <h2> Banking Details </h2>
                    <div className="row">
                        <table width="100%" border="0" className="col-table-6 noBorder noStripe  nth-evenColor">
                            <tbody>
                            <tr>
                                <td> Account Status </td>
                                <td> Active </td>
                                <td> Aba/Routing #</td>
                                <td> 1111111118 </td>
                                <td>Checking Account #</td>
                                <td> 5656 </td>
                            </tr>
                            <tr>
                                <td> Account Verification Date  </td>
                                <td> 12-29-2020 </td>
                            </tr>
                        </tbody>    
                        </table>
                    </div>
                </div>
            </div>
            <lable>Is the above information is Correct</lable>
                <button type="button">Yes</button>
                <button type="button">No</button>
        </div>
        </div>
	);
  } 
}