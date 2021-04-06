import React, { Component } from "react";
import PdlRpp from './PdlRpp';

export default class Rpp extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {rppProd: '', rppTran: '', RPPSucces: false, mainDiv: true, rpppfpPymt:"", rpppfpPymtAmt:"", rpppfpChange:"", rpproutingNbr:"", rpptenderAmt1:"", rpptenderAmt2:"", rpptenderType1: "", rpptenderType2: ""};
  }
  componentWillMount(){
    this.setState({rppProd: this.props.rppVal, rppTran: this.props.tranVal, rpppfpPymt:"57.57", rpppfpPymtAmt:"185.75", rpppfpChange:"0.00", rpproutingNbr:"123123123", rpptenderAmt1:"185.75", rpptenderAmt2:"", rpptenderType1: "", rpptenderType2: ""});
	
	// this.setState({
	// 	tenderType1 : [
	// 		{"name":"Cash", "value":"Cash"},
	// 		{"name":"Check", "value":"CHK"},
	// 		{"name":"Debit Card", "value":"DC"}
	// 	],
	// 	tenderType2 : [
	// 		{"name":"Cash", "value":"Cash"},
	// 		{"name":"Check", "value":"CHK"},
	// 		{"name":"Debit Card", "value":"DC"}
	// 	]
	// });
  }
	FplanPmt (){
		this.setState({RPPSucces: true, mainDiv:false});
	}
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }
  
  Rclose=()=>{
    this.props.RppClose('false');   
  }

  render(){	
	if(this.state.rppProd ==="ILP")
	{
	return (
		<div>
		{ this.state.mainDiv ?
		<div className="col-sm-12">
			<div className="innerBlockContainer">
				<h2> Payment Details <span onClick={()=>{this.props.RppClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
				<div className="col-sm-12">
					<div className="row">
						<table width="100%" border="0" className="noBorder noStripe col-table-3 cellGap">
							<tbody>
								<tr>
								{(this.state.rppTran ==="PFP")? <td className="bgHighlt">Penalty Payment<br/>
									<input type="text" name="rpppfpPymt" value={this.state.rpppfpPymt} disabled /> </td> : null }
								<td className="bgHighlt" width="12%">Payment Amt<br/>
									<input type="text" name="rpppfpPymtAmt" value={this.state.rpppfpPymtAmt} disabled /> </td>
									<td className="bgHighlt">Change<br/>
									<input type="text" name="rpppfpChange" value={this.state.rpppfpChange} disabled /></td>									
									{(this.state.rppProd ==="PDL")? <td className="bgHighlt">ABA/Routing Nbr<br/>
									<input type="text" name="rpproutingNbr" value={this.state.rpproutingNbr} onChange={this.handleChange} /></td> : null }
								</tr>
							</tbody>
						</table>
						
						<table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
							<tbody><tr>
									<td className="bgHighlt" width="12%">Tender Type1<br/>
									<select name="rpptenderType1" value={this.state.rpptenderType1} onChange={this.handleChange}>
										<option value="Cash">Cash</option>
										<option value="CHK">Check</option>
										<option value="DC">Debit Card</option>
									</select>
									</td>
									<td className="bgHighlt">Tender Amt1<br/>
									<input type="text" name="rpptenderAmt1" value={this.state.rpptenderAmt1} onChange={this.handleChange} disabled /></td>
									<td className="bgHighlt">Tender Type2<br/>
									<select name="rpptenderType2" value={this.state.rpptenderType2} onChange={this.handleChange}>
										<option value="Cash">Cash</option>
										<option value="CHK">Check</option>
										<option value="DC">Debit Card</option>
									</select>

									</td>	
									<td className="bgHighlt">Tender Amt2<br/>
									<input type="text" name="rpptenderAmt2" value={this.state.rpptenderAmt2} onChange={this.handleChange} disabled /></td>									
									
								</tr>
								
								
							</tbody>
						</table>
					</div>
				</div>
				<div className="col-sm-12 text-center">
							<button type="button" onClick={()=>{this.props.RppClose('false')}}> Cancel </button>
							<button type="button" onClick={() =>{this.FplanPmt()}}> Finish </button>	
						</div>
			</div> </div>	: null 
		}
					

			{this.state.RPPSucces ? <div className="col-sm-12">
				<div className="innerBlockContainer">
					<h2>Confirmation</h2>      
                    <div className="text-center">
                    <p> RPP Payment Completed Successfully. </p>    
					<button type="button"  onClick={()=>{this.props.RppClose('false')}}>OK</button>				
                    </div>
				</div>
			</div> : null
			}
			
</div>		
	);	
	}else if(this.state.rppProd ==="PDL"){
		return(<div><PdlRpp  Rclose={this.Rclose} /></div>);
	}
		
  } 
}