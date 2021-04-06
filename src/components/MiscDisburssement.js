import React, { Component } from "react";

export default class MiscDisburssement extends Component {

  constructor (props) {
    super(props);
    this.handleStChange = this.handleChange.bind(this);
    this.state = {mdTyp: '', mdAmt: '', mdCmt: '', miscDisbDiv: false, mainDiv: true, hisDiv: false, voidDiv:true};        
  }

  componentWillMount(){
    this.setState({mdTyp: '', mdAmt: '', mdCmt: ''});
  }

  handleChange=(e)=>{        
    this.setState({[e.target.name]: e.target.value });      
  }
  finishDisb =(str)=>{
	  this.setState({miscDisbDiv:true, mainDiv:false, infoMsg:str, voidDiv:true, plsDiv:false});
  }
  
  OkbtnFun(){
	  this.setState({mainDiv:false, hisColourDiv:true, plsDiv: true});
  }
  
  hisFun()
 {
	 this.setState({hisDiv : true, mainDiv:false, plsDiv: true});
 }
 
 goFun()
 {
	 this.setState({hisDiv : false, voidDiv:false,mainDiv:false, plsDiv: true});
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
    <div className="collectionSubContainer">
      {this.state.mainDiv ? <div className="col-sm-12 form-group">
          <div className="innerBlockContainer margin-top">
		  <h2> &nbsp; Miscellaneous Disbursement</h2>
            <div className="col-sm-6 col-sm-offset-3 form-group">
              <div className="row">
                <table width="100%" border="0" className="noBorder noStripe col-table-2">
                  <tbody>
                    <tr>
                      <td colspan="2">&nbsp;</td>
                    </tr>
                    <tr className="bgHighlt">
                      <td>Disbursement Type</td>
                      <td>
                        <select name="mdTyp" value={this.state.mdTyp} onChange={this.handleChange}>
                          <option value="COVIDILP">COVID-19 Installment</option>
							<option value="COVIDLOC">COVID-19 LOC</option>
							<option value="COVIDOLILP">COVID-19 Online Installment</option>
							<option value="COVIDOLLOC">COVID-19 Online LOC</option>
							<option value="COVIDTLP">COVID-19 Title</option>
							<option value="CB">Cash Bonus</option>
							<option value="CCF">Certified Check Fee</option>
							<option value="CCCSF">Consumer Credit  Counselling Service Fee</option>
							<option value="CS">Customer Service</option>
							<option value="ILRF">Installment Referral Fee</option>
							<option value="LORF">LOC Referral Fee</option>
							<option value="MRK">Marketing</option>
							<option value="MIL">Mileage</option>
							<option value="MOCO">Money Order Cash Out</option>
							<option value="MOF">Money Order Fee</option>
							<option value="OD">Overnight  Delivery</option>
							<option value="PRF">Payday  Referral Fee</option>
							<option value="POS">Postage</option>
							<option value="RAM">Repairs and Maintenance</option>
							<option value="SUPP">Supplies</option>
							<option value="TLLF">Title Lien  Fee</option>
							<option value="TLRF">Title Referral Fee</option>
							<option value="TRV">Travel</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="2">&nbsp;</td>
                    </tr>
                    <tr className="bgHighlt">
                      <td>Amt</td>
                      <td><input type="text" name="mdAmt" id="mdAmt" value={this.state.mdAmt} onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                      <td colspan="2">&nbsp;</td>
                    </tr>
                    <tr className="bgHighlt">
                      <td>Comments</td>
                      <td><input type="text" name="mdCmt" id="mdCmt" value={this.state.mdCmt} onChange={this.handleChange}/></td>
                    </tr>
					<tr>
                      <td colspan="2">&nbsp;</td>
                    </tr>				
                  
                    <tr>
					    <td colspan="2" className="text-center">
                            <button type="button" onClick={() =>{this.hisFun()}}> History </button>
                            <button type="button" onClick={() =>{this.finishDisb()}}> Finish Misc Disbursement </button>
                            <button type="button" className="btn-danger"> Cancel </button>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </div>
			 	
            </div>
            {/*<div className="col-sm-12 text-center" hidden={this.state.hideDivMisc}>
              <p>Miscellaaneous Disbursement Completed Successfully.</p>
            </div>*/}
          </div>

        </div>	: <div className="col-sm-12 form-group" hidden={this.state.plsDiv}>
					<div className="innerBlockContainer">
					<h2>Please Confirm</h2>                    
				<div className="form-group text-center">
					<p> {this.state.infoMsg} Miscellaaneous Disbursement Completed Successfully.</p>                    
					<button type="button" onClick={() => {this.OkbtnFun()}}>OK</button>
				</div>
				</div>
				</div>
			}
			
			{this.state.hisDiv ? <div className="col-sm-12 form-group">
        <div className="innerBlockContainer">
            <h2 className="text-center">Void Other Disbursements Transaction </h2>
            <div className="contact-infoscroll">
            <table width="100%">
                <thead>
                    <tr>
                        <th>Date/Time</th>
                        <th>Expense Code</th>
                        <th>Amt</th>
                        <th>Description</th>
                        <th>Select</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td align="center">10/30/2020 06:03:30</td><td align="center"> COVID-19 Installment </td><td align="center">-100</td><td align="right"> &nbsp; </td><td align="center"><button type="button" onClick={() =>{this.goFun()}}>Go</button><button type="button" >Re-Print</button> </td></tr>
                </tbody>
            </table>
            </div>
            </div>
		</div> : <div className="col-sm-12" hidden={this.state.voidDiv}>
					<div className="innerBlockContainer">
                    <h2>Void Other Disbursements Transaction</h2>					
                    <table className="noBorder noStripe col-table-4 cellGap">
                        <tbody>
                            
							<tr>
                               <td align="left">Tran Code</td>
								 <td className="lblVal" align="left">618173675</td>
								<td align="left">Tran Amt</td>
								 <td className="lblVal" align="left">-100</td>	
								<td align="left">Expense Code</td>
								 <td className="lblVal" align="left">COVIDILP</td>
                            </tr>
                            <tr>                              
								<td align="left">Description</td>
								 <td className="lblVal" align="left">&nbsp;</td>	
									<td align="left">Date</td>
								 <td className="lblVal" align="left">10/30/2020</td>
                            </tr>							
                        </tbody>
                    </table>
					 <div class="col-sm-12 text-center">
							<button type="button" onClick={() =>{this.finishDisb("Void")}}>Void Transaction </button>
							</div>
							</div>
							</div> }
							
							{this.state.hisColourDiv ? <div className="col-sm-12 form-group">
							<div className="innerBlockContainer">
								<h2 className="text-center">Void Other Disbursements Transaction </h2>
								<div className="contact-infoscroll">
								<table width="100%">
									<thead>
										<tr>
											<th>Date/Time</th>
											<th>Expense Code</th>
											<th>Amt</th>
											<th>Description</th>
											<th>Select</th>
										</tr>
									</thead>
									<tbody>
										<tr className="error"><td align="center">10/30/2020 06:03:30</td><td align="center"> COVID-19 Installment </td><td align="center">-100</td><td align="right"> &nbsp; </td><td align="center"><button type="button">Go</button></td></tr>
									</tbody>
								</table>
								</div>
								</div>
							</div> : null }
      </div>
    </div>
  </div>
);
  } 
}