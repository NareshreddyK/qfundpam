import React, { Component } from "react";

export default class Wpn extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {crProd: '', crTran: '', WpnSucces: false, nextDiv: false, mainDiv: true, WpnPmtFreq: '', WpnAmtApplied: '', instNum: '', WpnInsAmt: '', WpnPmtAmt1: '', WpnPmtAmt2: '', WpnPmtAmt3: '', WpnPmtAmt4: '', WpnPmtTotal: '', WpnPmtDt1: '', WpnPmtDt2: '', WpnPmtDt3: '', WpnPmtDt4: '', WpnColType: ''};
  }
componentWillMount(){
    this.setState({crProd: this.props.crVal, crTran: this.props.tranVal, WpnPmtFreq: 'Monthly', WpnAmtApplied: '906.67', WpnInsAmt: '', instNum: '1', WpnPmtAmt1: '226.67', WpnPmtAmt2: '226.67', WpnPmtAmt3: '226.67', WpnPmtAmt4: '226.66', WpnPmtTotal: '906.67', WpnPmtDt1: '02/22/2021', WpnPmtDt2: '03/22/2021', WpnPmtDt3: '04/22/2021', WpnPmtDt4: '05/22/2021'});
  }
	WpnNext (){
		this.setState({nextDiv: true, WpnSucces: false, mainDiv:false});
	}
	WpnWorkPlan(){
		this.setState({WpnSucces: true, nextDiv: false, mainDiv:false});
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
				<h2> WPN Payment Options <span onClick={()=>{this.props.WpnClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
				<div className="col-sm-12">
					<div className="row">
						<table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
							<tbody>
								<tr>
									<td className="bgHighlt">Payment Frequency<br/>
									<input type="text" name="WpnPmtFreq" value={this.state.WpnPmtFreq} onChange={this.handleChange} disabled/></td>
									<td className="bgHighlt">Amt Applied to WPN<br/>
									<input type="text" name="WpnAmtApplied" value={this.state.WpnAmtApplied} onChange={this.handleChange} disabled/></td>
									<td className="bgHighlt"><input type="radio" name="IN" Selected/> Installment Number<br/>
									<select name="instNum" value={this.state.instNum} onChange={this.handleChange}>
                                        <option value="">1</option>
                                        <option value="CHK">2</option>
                                        <option value="CHK">3</option>
                                        <option value="CHK">4</option>
                                        <option value="CHK">5</option>
                                    </select></td>
									<td className="bgHighlt">Installment Amt<br/>
									<input type="text" name="WpnInsAmt" value={this.state.WpnInsAmt} onChange={this.handleChange}/></td>
								</tr>
								
							</tbody>
						</table>
					</div>
				</div>
				<div className="col-sm-12 text-center">
							<button type="button" onClick={() =>{this.WpnNext()}}> Next </button>	
							<button type="button" onClick={()=>{this.props.WpnClose('false')}}> Cancel </button>
						</div>
			</div>
		</div>	: null 
		}
		
		{this.state.nextDiv ? <div className="col-sm-12">
            <div class="innerBlockContainer"> 
            <h2>WPN Details <span onClick={()=>{this.props.WpnClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>                
                  <table width="100%" className="col-table-3">
				  <thead>
                 
                  <tr><th>&nbsp;</th><th>Amt</th><th>Scheduled PMT Dates</th></tr></thead>
                  <tbody>
                  <tr>
                    <td align="center">Payment 1</td>
                    <td align="center">$ {this.state.WpnPmtAmt1}</td>
                    <td align="center">{this.state.WpnPmtDt1}</td>
                  </tr>                  
                    <tr>
                      <td align="center">Payment 2</td>
                      <td align="center">$ {this.state.WpnPmtAmt2}</td>
                      <td align="center">{this.state.WpnPmtDt2}</td>
                    </tr>
                    <tr>
                      <td align="center">Payment 3</td>
                     <td align="center">$ {this.state.WpnPmtAmt3}</td>
                      <td align="center">{this.state.WpnPmtDt3}</td>
                    </tr>
                    <tr>
                      <td align="center">Payment 4</td>
                      <td align="center">$ {this.state.WpnPmtAmt4}</td>
                      <td align="center">{this.state.WpnPmtDt4}</td>
                    </tr> 
					<tr>
                      <td align="center">Payment Total</td>
					  <td align="center">$ {this.state.WpnPmtTotal}</td>
					  <td></td>
                    </tr>					
                    <tr>
                      <td align="center">Collateral Type</td>
                      <td>
						  <select name="WpnColType" value={this.state.WpnColType} onChange={this.handleChange}>
							<option value="ACH">ACH</option>
						   </select>
					  </td>
					  <td></td>
                    </tr>
                  </tbody>
                  </table>
            
            &nbsp;&nbsp;
                <div className="col-sm-12 text-center">                            
                    <button type="button" onClick={() =>{this.WpnWorkPlan()}}> Finished Workout Plan </button>
                    <button type="button" onClick={()=>{this.props.WpnClose('false')}}> Cancel </button>
                </div>
                </div>
            </div> : null  }
			{this.state.WpnSucces ? <div className="col-sm-12">
				<div className="innerBlockContainer">
					<h2>Confirmation</h2>        
                    <div className="text-center">
                    <p> Workout Plan Transaction Completed Successfully. </p>  
					<p> Would you like to Complete Another Transaction for this Customer? </p>  					
						<button type="button" onClick={()=>{this.props.WpnClose('false')}}>OK</button>						
                    </div>
				</div>
			</div> : null
			}
			
			
</div>			
	
	);
  } 
}