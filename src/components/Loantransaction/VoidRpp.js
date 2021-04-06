import React, { Component } from "react";

export default class VoidRpp extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {vrppProd: '', vrppTran: '', RPPSucces: false, mainDiv: true, VRPPSucces: false, pymtDiv:false, vdRppPymt:"", vdRppTenderType:"", vdRppTenderAmt:"", vdRppDisbType:'', vdRppCollCus:'',schPmtPymt1:"", schPmtAmt1:"", schPmtDate1:"", schPmtPymt2:"", schPmtAmt2:"", schPmtDate2:"", schPmtPymt3:"", schPmtAmt3:"", schPmtDate3:"", schPmtPymt4:"", schPmtAmt4:"", schPmtDate4:""};
  }
  componentWillMount(){
    this.setState({vrppProd: this.props.vrppVal, vrppTran: this.props.tranVal, vdRppPymt:"0.00", vdRppTenderType:"Cash", vdRppTenderAmt:"0.00", vdRppDisbType:'0.00', vdRppCollCus:'0.00',schPmtPymt1:"Payment 1", schPmtAmt1:"$ 220.00", schPmtDate1:"02/22/2021", schPmtPymt2:"Payment 2", schPmtAmt2:"$ 220.00", schPmtDate2:"03/22/2021", schPmtPymt3:"Payment 3", schPmtAmt3:"$ 220.00", schPmtDate3:"04/22/2021", schPmtPymt4:"Payment 4", schPmtAmt4:"$ 220.00", schPmtDate4:"05/22/2021"});
	
  }
  componentDidMount(){
	  if(this.state.vrppProd ==="ILP"){
		this.setState({pymtDiv:true});
	}
  }
	FplanPmt (){
		this.setState({RPPSucces: true, mainDiv:false});
	}
	VRppFinish (){
		this.setState({VRPPSucces: true, mainDiv:false});
	}
	VRppFinPlan (){
		this.setState({pymtDiv:true, schdDiv: true, mainDiv:true});
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
				<h2> Void Payment Plan Details <span onClick={()=>{this.props.VRppClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
				<div className="col-sm-12">
					<div className="row">
				{(this.state.vrppProd ==="PDL" || this.state.vrppProd ==="ILP")?<div hidden={this.state.schdDiv}> <table width="100%" className="col-table-3 form-group">
				  <thead>
                 
                  <tr><th>&nbsp;</th><th>Amt</th><th>Scheduled PMT Dates</th></tr></thead>
                  <tbody>

					<tr>
                    <td align="center">{this.state.schPmtPymt1}</td>
                    <td align="center">{this.state.schPmtAmt1}</td>
                    <td align="center">{this.state.schPmtDate1}</td>
                  </tr>                  
                    <tr>
                      <td align="center">{this.state.schPmtPymt2}</td>
                      <td align="center">{this.state.schPmtAmt2}</td>
                      <td align="center">{this.state.schPmtDate2}</td>
                    </tr>
                    <tr>
                      <td align="center">{this.state.schPmtPymt3}</td>
                      <td align="center">{this.state.schPmtAmt3}</td>
                      <td align="center">{this.state.schPmtDate3}</td>
                    </tr>
                    <tr>
                      <td align="center">{this.state.schPmtPymt4}</td>
                      <td align="center">{this.state.schPmtAmt4}</td>
                      <td align="center">{this.state.schPmtDate4}</td>
                    </tr>
					
                  </tbody>
                  </table>
				  
				  <table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
							<tbody>
								<tr>
								<td className="bgHighlt" width="12%">Payment Amt<br/>
									<input type="text" name="vdRppPymt" value={this.state.vdRppPymt} disabled /></td>
									{/*<td className="bgHighlt" width="12%">Disb Type<br/>
									<select name="nColType">
                                        <option value="ACH"></option>
                                        <option value="ACH">CASH</option>
                                        <option value="CHK">Check</option>
                                        <option value="DC">Debit Card</option>
                                    </select></td>*/}
									{(this.state.vrppProd ==="PDL")? <td className="bgHighlt">Tender Type<br/>
									<input type="text" name="vdRppTenderType" value={this.state.vdRppTenderType} onChange={this.handleChange}/></td>
									 : null }
									{(this.state.vrppProd ==="PDL")?  <td className="bgHighlt">Tender Amt<br/>
									<input type="text" name="vdRppTenderAmt" value={this.state.vdRppTenderAmt} onChange={this.handleChange}/>
									</td> : null }
									{(this.state.vrppProd ==="ILP")?  <td className="bgHighlt" width="12%">Disb Amt<br/>
								 <input type="text" name="vdRppDisbType" value={this.state.vdRppDisbType} disabled/></td>  : null }
								 {(this.state.vrppProd ==="PDL")?  <td className="bgHighlt">Collect Change from Customer<br/>
									<input type="text" name="vdRppCollCus" value={this.state.vdRppCollCus} disabled/></td>	: null }
								</tr>
								
							</tbody>
				</table>
                <div className="col-sm-12 text-center">                            
                    <button type="button" onClick={() =>{this.VRppFinish()}}> Void Payment Plan </button>
                    <button type="button" onClick={()=>{this.props.Rclose('false')}}> Cancel </button>
                </div></div>: null }
				
					</div>
				</div>
				
			</div> </div>	: null 
		}
					

			{this.state.VRPPSucces ? <div className="col-sm-12">
				<div className="innerBlockContainer">
					<h2>Confirmation</h2>        
                    <div className="text-center">
                    <p> Void Payment Plan Done Successfully. </p>    
					<button type="button"  onClick={()=>{this.props.VRppClose('false')}}>OK</button>				
                    </div>
				</div>
			</div> : null
			}
			
</div>		
	);	
  } 
}