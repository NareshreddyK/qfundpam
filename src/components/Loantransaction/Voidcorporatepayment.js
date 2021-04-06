import React, { Component } from "react";

export default class Voidcorporatepayment extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {vcrProd: '', vcrTran: '', VCRSucces: false, mainDiv: true, VCRVoid: false, vcrPmtSucces: false};
  }
componentWillMount(){
    this.setState({vcrProd: this.props.vcrpVal, vcrTran: this.props.tranVal});
  }
	vcrSubmit (){
		this.setState({VCRSucces: true, mainDiv:false});
	}
	crpGo (){
		this.setState({VCRVoid: true, mainDiv:false, VCRSucces: false});
	}
	vcrPmtAply (){
		this.setState({vcrPmtSucces: true, mainDiv:false, VCRSucces: false, VCRVoid: false })
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
				<h2> Void Corporate Payment  <span onClick={()=>{this.props.VCRPClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
				<div className="col-sm-12">
					<div className="row">
						<table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
							<tbody>
								<tr>
									<td className="bgHighlt">Loan Number<br/>
									<input type="text" name="mZip" value="11079133" /></td>
									<td className="bgHighlt">Tender Number<br/>
									<input type="text" name="mZip" value="" /></td>
									<td></td>
									<td></td>
								</tr>
								
							</tbody>
						</table>
					</div>
				</div>
				<div className="col-sm-12 text-center">
							<button type="button" onClick={()=>{this.props.VCRPClose('false')}}> Cancel </button>
							<button type="button" onClick={() =>{this.vcrSubmit()}}> Submit </button>	
						</div>
			</div>
		</div>	: null 
		}
		{this.state.VCRSucces ? <div className="col-sm-12">
			<div className="innerBlockContainer">
				<h2> Void Corporate Payment</h2>
				<div className="col-sm-12">
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
			 	</div> 
			</div>
		</div> : null }
			{this.state.VCRVoid ? <div className="col-sm-12">
			<div className="innerBlockContainer">
			<h2> Void Corporate Payment</h2>
							<p><input type="radio"/> Void All &nbsp; <input type="radio"/> Void and Reapply</p>
				 <div className="col-sm-12">
<div className="innerBlockContainer">				 
				<h2> Payment(s) Applied</h2>
							<table width="100%">
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
							</div>
							</div>
							<div className="col-sm-12 text-center">
							<button type="button" onClick={()=>{this.props.VCRPClose('false')}}> Cancel </button>
							<button type="button" onClick={() =>{this.vcrPmtAply()}}> Apply </button>	
						</div>	
</div>						
			 </div>
							 : null
			}
			{this.state.vcrPmtSucces ? <div className="col-sm-12">
				<div className="innerBlockContainer">
					<h2>Confirmation</h2>         
                    <div className="text-center">
                    <p> Transaction Completed Successfully. </p>    
						<button type="button" >OK</button>	{/* onClick={()=>{this.props.VCRPClose('false')}} */}					
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