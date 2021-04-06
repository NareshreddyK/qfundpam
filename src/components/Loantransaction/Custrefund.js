import React, { Component } from "react";

export default class Custrefund extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {crProd: '', crTran: '', CustRefundSucces: false, mainDiv: true, crOverPymt: '', crDisbType: ''};
  }

  componentWillMount(){
    this.setState({crProd: this.props.crVal, crTran: this.props.tranVal, crOverPymt: '60.00', crDisbType: 'ACH'});
  }
  
  CustRefundFinish (){
	this.setState({CustRefundSucces: true, mainDiv:false});
  }

  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  render(){	
	return (
		<div>
		{ this.state.mainDiv ?
		<div className="col-sm-12">
			<div className="innerBlockContainer">
				<h2> Refund Details  <span onClick={()=>{this.props.CRefundClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
				<div className="col-sm-12">
					<div className="row">
						<table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
							<tbody>
								<tr>
									<td className="bgHighlt">Over Payment Amt<br/>
										<input type="text" name="crOverPymt" value={this.state.crOverPymt} disabled/></td>
									<td className="bgHighlt">Disb Type<br/>
										<select name="crDisbType" value={this.state.crDisbType}>
											<option value=" "> </option>
											<option value="ACH">CASH</option>
											<option value="CHK">Check</option>
										</select></td>
									<td></td>
									<td></td>
								</tr>
								
							</tbody>
						</table>
					</div>
				</div>
				<div className="col-sm-12 text-center">
							<button type="button" onClick={()=>{this.props.CRefundClose('false')}}> Cancel </button>
							<button type="button" onClick={() =>{this.CustRefundFinish()}}> Finish Refund </button>	
						</div>
			</div>
		</div>	: null 
		}
			{this.state.CustRefundSucces ? <div className="col-sm-12">
				<div className="innerBlockContainer">
					<h2>Confirmation</h2>        
                    <div className="text-center">
                    <p> Refund Completed Successfully. </p>    
						<button type="button" onClick={()=>{this.props.CRefundClose('false')}}>OK</button>						
                    </div>
				</div>
			</div> : null
			}
			
			
</div>			
	
	);
  } 
}