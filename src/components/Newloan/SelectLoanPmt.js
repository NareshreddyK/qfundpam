import React, { Component } from "react";
import Datepicker from '../common/Datepicker';
import Popup from '../Popup';

export default class SelectLoanTerm extends Component {

  constructor (props) {
    super(props);
    this.state = {cardType:'', cardNbr:'', confirmCardNbr:'', cardPlanType:'', fundSource:'', regFee:'', loadFee:'', loadFee:'', waiveregFee:'', waiveLoadFee:''};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  menus(str){
    this.refs.Popup.dispBlk(str);
  }

  render(){
	
	return (
        <div>
            <div className="col-sm-12 form-group">
            <div className="innerBlockContainer">
            <h2>Pmt Details</h2>
            <div className="contact-infoscroll">
            <table className="nth-evenColor">
                <thead>
                    <tr>
                        <th>Pmt #</th>
                        <th>Pmt<br/>Date</th>
                        <th>Interest<br/>Days</th>
                        <th>Pmt</th>
                        <th>New<br/>Interest</th>
                        <th>Matured<br/>Interest</th>
                        <th>Unpaid<br/>Interest</th>
                        <th>Verification<br/>Fee</th>
                        <th>Orig<br/>Fee</th>
                        <th>New<br/>CSO<br/>Fee</th>
                        <th>Principal</th>
                        <th>Balance<br/>Principal</th>
                        <th>Balance<br/>CSO<br/>Fee</th>
                        <th>Excepted<br/>Payment<br/>Method</th>
                        <th>Effective<br/>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="center">1</td>
                        <td align="center">01/13/2021</td>
                        <td align="center">15</td>
                        <td align="center">758.16</td>
                        <td align="center">15.19</td>
                        <td align="center">15.19</td>
                        <td align="center">0.00</td>
                        <td align="center">0.00</td>
                        <td align="center">0.00</td>
                        <td align="center">243.00</td>
                        <td align="center">499.97</td>
                        <td align="center">2000.03</td>
                        <td align="center">972.00</td>
                        <td align="center">ACH</td>
                        <td align="center">01/13/2021</td>
                    </tr>
                    <tr>
                        <td align="center">2</td>
                        <td align="center">02/12/2021</td>
                        <td align="center">30</td>
                        <td align="center">758.16</td>
                        <td align="center">24.30</td>
                        <td align="center">24.30</td>
                        <td align="center">0.00</td>
                        <td align="center">0.00</td>
                        <td align="center">0.00</td>
                        <td align="center">243.00</td>
                        <td align="center">490.86</td>
                        <td align="center">1509.17</td>
                        <td align="center">729.00</td>
                        <td align="center">ACH</td>
                        <td align="center">02/12/2021</td>
                    </tr>
                    <tr>
                        <td align="center">3</td>
                        <td align="center">03/12/2021</td>
                        <td align="center">28</td>
                        <td align="center">758.16</td>
                        <td align="center">17.08</td>
                        <td align="center">17.08</td>
                        <td align="center">0.00</td>
                        <td align="center">0.00</td>
                        <td align="center">0.00</td>
                        <td align="center">243.00</td>
                        <td align="center">498.08</td>
                        <td align="center">1011.09</td>
                        <td align="center">486.00</td>
                        <td align="center">ACH</td>
                        <td align="center">03/12/2021</td>
                    </tr>
                    <tr>
                        <td align="center">4</td>
                        <td align="center">04/13/2021</td>
                        <td align="center">32</td>
                        <td align="center">758.16</td>
                        <td align="center">13.05</td>
                        <td align="center">13.05</td>
                        <td align="center">0.00</td>
                        <td align="center">0.00</td>
                        <td align="center">0.00</td>
                        <td align="center">243.00</td>
                        <td align="center">502.11</td>
                        <td align="center">508.98</td>
                        <td align="center">243.00</td>
                        <td align="center">ACH</td>
                        <td align="center">04/13/2021</td>
                    </tr>
                    <tr>
                        <td align="center">5</td>
                        <td align="center">05/13/2021</td>
                        <td align="center">30</td>
                        <td align="center">758.12</td>
                        <td align="center">6.14</td>
                        <td align="center">6.14</td>
                        <td align="center">0.00</td>
                        <td align="center">0.00</td>
                        <td align="center">0.00</td>
                        <td align="center">243.00</td>
                        <td align="center">508.98</td>
                        <td align="center">0.00</td>
                        <td align="center">0.00</td>
                        <td align="center">ACH</td>
                        <td align="center">05/13/2021</td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
            </div>
        </div>
	);
  } 
}