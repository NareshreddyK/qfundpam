import React, { Component } from "react";
import CustomerInfo from './MISC/CustomerInfo';
import ReceiptInfo from './MISC/ReceiptInfo';
import AdditionalDetails from './MISC/AdditionalDetails';
import PaymentInfo from './MISC/PaymentInfo';
import UserDetails from './MISC/UserDetails';

export default class MiscReceipts extends Component {

  constructor (props) {
    super(props);
    this.handleStChange = this.handleChange.bind(this);
    this.state = {mrTyp: '',miscDiv: false, hideDiv: true, hisDiv: false, plsDiv:true};        
  }

  componentWillMount(){
    this.setState({mrTyp: ''});
  }

  handleChange=(e)=>{        
    this.setState({[e.target.name]: e.target.value });      
  }
 miscFun =()=> {
	 this.setState({miscDiv:true,hideDiv:false});
 }
 
 hisFun()
 {
	 this.setState({hisDiv : true, miscDiv:true,hideDiv:true, miscFullDiv:true, plsDiv:true});
 }
 
 goFun()
 {
	 this.setState({voidDiv:true, hisDiv : false, miscDiv:true,hideDiv:true, miscFullDiv:true});
 }
 
 voidbtnFun()
 {
	  this.setState({voidDiv:false, plsDiv: false});
 }
 
 OkbtnFun(){
	  this.setState({miscFullDiv:false, hideDiv: true, miscDiv:false, plsDiv:true});
  }
  
  render(){
	const eqHght = {
		display: 'flex'
	}
	const noBG = {
	  background: 'transparent'
  }
    
	return (
<div className="height100">
  <div className="collectionContainer">
    <div className="collectionSubContainer" hidden={this.state.miscFullDiv}>
      <div className="col-sm-12 form-group">
          <div className="innerBlockContainer margin-top">
		        <h2> &nbsp; Miscellaneous Other Receipts</h2>
            <div className="col-sm-6 col-sm-offset-3">
						<table width="100%" border="0" className="cellGap noBorder">
							<tbody>
								<tr className="bgHighlt">
									<td>Receipt Type</td>
									<td>
										<select name="sProdTyp" value={this.state.sProdTyp} onChange={this.handleChange}> 
											<option> </option>
											<option value="PDL">Acquisitions Payment</option>
											<option value="ILP">Installment Loan</option>  
										</select>                    
									</td>
								</tr>
								<tr hidden={this.state.miscDiv}>
								<td>&nbsp;</td>
						<td><button type="button" onClick={() =>{this.miscFun()}}> Submit </button></td>				
					</tr>
							</tbody>	
						</table>            
					</div>
			<div hidden={this.state.hideDiv}>
		<CustomerInfo />
			<ReceiptInfo />
			<AdditionalDetails />
			<PaymentInfo />
			<UserDetails />
			<div className="col-sm-12 text-center form-group">
						<button type="button" onClick={() =>{this.hisFun()}}> History </button>
						<button type="button"> Cancel </button>
						<button type="button"> Submit </button>						
					</div>
			</div>	
          </div>
		  
        </div>
			
      </div>
	  
	  {this.state.hisDiv ? <div className="col-sm-12 form-group">
        <div className="innerBlockContainer">
            <h2 className="text-center">Void Other Receipt Transactions</h2>
            <div className="contact-infoscroll">
            <table width="100%">
                <thead>
                    <tr>
                        <th>Stroe Nbr</th>
                        <th>Date/Time</th>
                        <th>Transactions Description</th>
                        <th>Amt</th>
                        <th>Tran Code</th>
                        <th>Customer Nbr</th>
                        <th>Name</th>
                        <th>Select</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td align="center">0216</td><td align="center">10-30-2020 05:46:06</td><td align="center"> Acquisitions Payment </td><td align="center">12</td><td align="right"> 618173675 </td> <td align="right"> 4938523 </td><td align="right"> test,test </td><td align="center"><button type="button" onClick={() =>{this.goFun()}}>Go</button><button type="button" >Re-Print</button> </td></tr>
                </tbody>
            </table>
            </div>
            </div>
		</div> : null }
		
		{this.state.voidDiv ? <div className="col-sm-12">
					<div className="innerBlockContainer">
                    <h2>Void Acquisitions Payment</h2>					
                    <table className="noBorder noStripe col-table-4 cellGap">
                        <tbody>
                            <tr>
                               <td align="left">Stroe Nbr</td>
								 <td className="lblVal" align="left">0216</td>
								<td align="left">Date/Time</td>
								 <td className="lblVal" align="left">10-30-2020 05:46:06</td>								 
                                
                            </tr>
							<tr>
                               <td align="left">Tran Code</td>
								 <td className="lblVal" align="left">618173675</td>
								<td align="left">Amt</td>
								 <td className="lblVal" align="left">12</td>								 
                                
                            </tr>
                            <tr>
                               <td align="left">Customer Nbr</td>
								 <td className="lblVal" align="left">4938523</td>
								<td align="left">Tender Type</td>
								 <td className="lblVal" align="left">Cash</td>								 
                                
                            </tr>
							<tr>
                               <td align="left">Tender Type</td>
								 <td className="lblVal" align="left"><select><option value="Cash">Cash</option></select></td>
                            </tr> 
                        </tbody>
                    </table>
					 <div class="col-sm-12 text-center">
							<button type="button" onClick={() =>{this.voidbtnFun()}}>Void Transaction </button>
							</div>
							</div>
							</div> : <div className="col-sm-12 form-group" hidden={this.state.plsDiv}>
									<div className="innerBlockContainer">
									<h2>Please Confirm</h2>                    
								<div className="form-group text-center">
									<p> Miscellaaneous Receipt Completed Successfully.</p>                    
									<button type="button" onClick={() => {this.OkbtnFun()}}>OK</button>
								</div>
								</div>
								</div> }
								
    </div>
  </div>
);
  } 
}