import React, { Component } from "react";

export default class VoidPayments extends Component {

  constructor (props) {
    super(props);
    this.state = {LocVpymt: '', mainDiv: true, showDiv: false, voidPayOff: true, VPayoff : true, VCRSucces: false, VCRVoid: false, DrawAmt: '', VoidTenderType: '', VoidTenderAmt: '', VoidChgAmt: ''};
   this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }
  componentWillMount(){
	  
      this.setState({LocVpymt : this.props.TlpVoidVal});
	  this.setState({refProd: this.props.vpyVal, pymtTran: this.props.tranVal, DrawAmt: '500.00', VoidTenderAmt: '500.00', VoidChgAmt: '0.00'});
  }
  componentDidUpdate(prevProps)
  {
	if(prevProps.tranVal !== this.props.tranVal)
	{
		this.setState({pymtTran : this.props.tranVal});
	}
	
  }

LocparPymt(str){
	this.setState({mainDiv: false, showDiv:true});
}
yesVPayOff(str){
	this.setState({voidPayOff:false, voidPayOffDiv: true, pymtTran:str});
}

vcrSubmit (){
	this.setState({VCRSucces: true, mainDiv: false});
}
crpGo (){
	this.setState({VCRVoid: true, VCRSucces: false, pymtTran:""});
}
vcrPmtAply (){
	this.setState({showDiv: true, VCRSucces: false, VCRVoid: false, pymtTran:""})
}

  render(){

	return (
        <div>
		{this.state.mainDiv ? <div className="col-sm-12">
                <div className="row">
					{(this.state.pymtTran === "partial" || this.state.pymtTran === "writeoff" || this.state.pymtTran === "voidDfultYes") ? 
						<div>
							<div className="col-sm-3 form-group">
								Payment Amt<br/><input type="text" disabled value="200.00"/>
							</div>
							<div className="col-sm-3 form-group">
								Disb Type<br/><select name="nColType">
											<option value="Cash">Cash</option>
										</select>
							</div>
							{(this.state.pymtTran !== "partial") ? 
							<div className = "col-sm-3 form-group">
								Encryption <br/><input type="text" value="AAE0A"/>
							</div> : null }
						</div>
					: null}
					{(this.state.pymtTran === "voidDefaultPymt") ? 
					<div> 
					<h2> Please Confirm</h2>
                    <div className="form-group text-center">
					<table className="noBorder noStripe col-table-4 cellGap">
                        <tbody>  
						<tr>
						<p> Encryption code is required for completing this transcation .</p>                    
						<p> Please obtain the same from the manager . This details are : </p>
						</tr>
						<tr>
							<p> Date : 2021-03-26</p>
							<p> Transaction Nbr : 60813818</p>
							<p> Loc Nbr : 379</p>
							<p> Count : 0</p>
						</tr>
						</tbody>  
					</table>
                    <button type="button" onClick={() => {this.yesVPayOff("voidDfultYes")}}>Yes</button>
					<button type="button" onClick={()=>{this.props.vpyClose('false')}}>No</button>
                    </div>
					 </div>: null}
					{(this.state.pymtTran === "corporate") ? 
					<div>
						<div className="col-sm-3 form-group">
							Loan Number<br/><input type="text" name="mZip" value="11079133" />
						</div>
						<div className="col-sm-3 form-group">
							Tender Number<br/><input type="text" name="mZip" value="" />
						</div>
						<div className="col-sm-12 text-center">
							<button type="button" onClick={()=>{this.props.vpyClose('false')}}> Cancel </button>
							<button type="button" onClick={() =>{this.vcrSubmit()}}> Submit </button>	
						</div>
					</div> : null }
					{(this.state.refProd === "LOC" && this.state.pymtTran === "RLC" || this.state.pymtTran === "VDR") ? 
					<div className="innerBlockContainer">{(this.state.pymtTran === "VDR") ? <h2> Void Draw <span onClick={()=>{this.props.vpyClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2> : <h2> Rescind Draw <span onClick={()=>{this.props.vpyClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>}
					<div className="col-sm-3 form-group">
						Draw Amt<br/>
						<input type="text" name="DrawAmt" value={this.state.DrawAmt} onChange={this.handleChange} disabled/>
					</div>
					<div className="col-sm-3 form-group">
						Tender Type<br/><select name="VoidTenderType" value={this.state.VoidTenderType} onChange={this.handleChange}>
                                        <option value="Cash">Cash</option>
                                    </select>
					</div>
					<div className="col-sm-3 form-group">
						Tender Amt<br/>
						<input type="text" name="VoidTenderAmt" value={this.state.VoidTenderAmt} onChange={this.handleChange} />
					</div>
					<div className="col-sm-3 form-group">
						Change Amt<br/>
						<input type="text" name="VoidChgAmt" value={this.state.VoidChgAmt} onChange={this.handleChange} />
					</div>
					{(this.state.pymtTran === "VDR") ? <div className="col-sm-12 text-center">
							<button type="button" onClick={()=>{this.LocparPymt('Void Draw')}}> Void Draw </button>
							<button type="button" onClick={()=>{this.props.vpyClose('false')}}> Cancel </button>
							</div> : <div className="col-sm-12 text-center">
							<button type="button" onClick={()=>{this.LocparPymt('Rescind Draw')}}> Rescind Draw </button>
							<button type="button" onClick={()=>{this.props.vpyClose('false')}}> Cancel </button>
					</div>}
					</div>
					: null}
				</div>
				{!(this.state.pymtTran === "corporate" || this.state.pymtTran === "" || this.state.pymtTran === "VDR" || this.state.pymtTran === "RLC") ?
					<div className="col-sm-12 text-center">
						<button type="button" onClick={()=>{this.LocparPymt()}}> Finish Void Payment </button>
					</div> : null }
            </div> 
			
			: null}
			{this.state.showDiv ? 
				<div className="col-sm-12">
					<div className="innerBlockContainer">
					<h2>Confirmation</h2>                    
                    <div className="text-center">
                    <p> Transaction Completed Successfully.</p>                    
						<button type="button" onClick={()=>{this.props.vpyClose('false')}}>OK</button>
                    </div>
					</div>
				</div> : null }
		{this.state.VCRSucces ? 
							<table width="100%">
								<thead>
									<tr>
										<th>Tender Type</th>
										<th>Tender Number</th>
										<th>Payment Date</th>
										<th>Tender Amount</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td align="center">C</td>
										<td align="center">1</td>
										<td align="center">2021-01-22 01:58:55.0</td>
										<td align="center">344</td>
										<td align="center"><button type="button" onClick={() =>{this.crpGo()}}> Go </button></td>
									</tr>
								</tbody>
							</table>
			 : null
			}
			{this.state.VCRVoid ? 
				<div className="col-sm-12">
				<div className="innerBlockContainer">				 
					<h2> Payment(s) Applied</h2>
					<p className="text-center"><input type="radio"/> Void All &nbsp; <input type="radio"/> Void and Reapply</p>
						<table width="100%" className="form-group">
							<thead>
								<tr>
									<th>#</th>
									<th>Loan Nbr</th>
									<th>Customer Name</th>
									<th>Payment Amount</th>
									<th>Tender Type</th>
									<th>Transaction ID</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td align="center"><input type="checkbox"/></td>
									<td align="center">11079133</td>
									<td align="center">Wdc Wdc</td>
									<td align="center">344</td>
									<td align="center">C</td>
									<td align="center">63119522</td>
								</tr>
							</tbody>
						</table>
					<div className="col-sm-12 text-center">
						<button type="button" onClick={()=>{this.props.vpyClose('false')}}> Cancel </button>
						<button type="button" onClick={() =>{this.vcrPmtAply()}}> Apply </button>	
					</div>	
				</div>
				</div> 
			: null }
        </div>
	);
  } 
}