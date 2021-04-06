import React, { Component } from "react";

export default class Corporatepayment extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {crpProd: '', crpTran: '', CRPSucces: false, mainDiv: true};
  }

  componentWillMount(){
    this.setState({crpProd: this.props.crpVal, crpTran: this.props.tranVal});
  }

  crpApply(){
	this.setState({CRPSucces: true, mainDiv:false});
  }
	
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  render(){	
	return (
		<div className="height100">
		<div className="collectionContainer">
		  <div className="collectionSubContainer">
		{ this.state.mainDiv ?
		<div className="col-sm-12">
			<div className="innerBlockContainer">
				<h2> Corporate Payment <span onClick={()=>{this.props.CRPClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
				<div className="col-sm-7">
					<div className="innerBlockContainer">
						<h2> Enter Payment </h2>
						<table width="100%" border="0" className="noBorder noStripe col-table-4">
							<tbody>
								<tr>
									<td className="bgHighlt" width="12%">Tender Type1<br/>
										<select name="nColType">
                                        	<option value="ACH">CASH</option>
                                        	<option value="CHK">Check</option>
                                        	<option value="DC">Debit Card</option>
                                    	</select></td>
									<td className="bgHighlt">Tender Number<br/>
										<input type="text" name="mZip" value="1" /></td>
									<td className="bgHighlt">Tender Amount<br/>
										<input type="text" name="mZip" value="344.00" /></td>
									<td><br/><button type="button"> Add More </button></td>									
									
								</tr>
								
							</tbody>
						</table>
					</div>
				</div>
				<div className="col-sm-5">
					<div className="innerBlockContainer">
						<h2> Payment Summary</h2>
						<table width="100%" border="0" className="noBorder noStripe col-table-3">
							<tbody>
								<tr>								
									<td className="bgHighlt">No of Loans<br/>
										<input type="text" name="mZip" value="1" /></td>
									<td className="bgHighlt">Total of Payments<br/>
										<input type="text" name="mZip" value="344.00" /></td>
								</tr>
								
							</tbody>
						</table>
						</div>
						</div>
					<div className="col-sm-12 text-center">
							<button type="button" > Cancel </button> {/* onClick={()=>{this.props.CRPClose('false')}} */}
							<button type="button" onClick={() =>{this.crpApply()}}> Apply </button>	
						</div>
				</div>
			</div>	: null 
		}
					

			{this.state.CRPSucces ? <div className="col-sm-12">
				<div className="innerBlockContainer">
					<h2>Confirmation</h2>      
                    <div className="text-center">
                    <p> Your Transaction Finished Successfully. </p>    
						<button type="button" >OK</button>	{/* onClick={()=>{this.props.CRPClose('false')}} */}					
                    </div>
				</div>
			</div> : null
			}
			
</div>
</div>
</div>		
	
	);
  } 
}