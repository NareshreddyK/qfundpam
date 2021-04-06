import React, { Component } from "react";
import Datepicker from '../common/Datepicker';

export default class BankingDetails extends Component {

  constructor (props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
	this.state = {bAcntStat: '', bRoutingNbr: '', bCRoutingNbr: '', bAcntNbr: '', bCAcntNbr: '', val: ''};
  }

  componentDidMount(){
	this.refs.accVerDt.loadData("");
	this.refs.bnkStatEndDt.loadData("");
  }

  loadData(str){
	if(str != ""){
		let valSplt = str.split('_');
		this.setState({bAcntStat: 'A', bRoutingNbr: '267084131', bCRoutingNbr: '267084131', bAcntNbr: '228185655', bCAcntNbr: '228185655', val: true});
	}else{
		this.setState({bAcntStat: '', bRoutingNbr: '', bCRoutingNbr: '', bAcntNbr: '', bCAcntNbr: '', val: false});
	}
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }
    
  render(){
	const eqHght = {
		display: 'flex'
	};
	
	let bdLst = [];
	let activeVal = "";
  
	let bd = [{active: 'A', bankName: 'JPMORGAN CHASE', abaRouting: '267084131', chkAccNbr: '228185655', select: '1'}];
	
	if(this.state.val === false){
		bdLst.push(<tr><td align="center" colspan="6">Bank Details not available.</td></tr>);
	}else{
		for(let c=0; c<=bd.length-1; c++){		
			if(bd[c].active === "A"){
				activeVal = "Active";
			}
			
			bdLst.push(<tr><td align="center">{activeVal}</td><td align="center">{bd[c].bankName}</td><td align="center">{bd[c].abaRouting}</td><td align="center">{bd[c].chkAccNbr}</td><td align="center"><select><option value="1" selected>Edit</option><option value="2">Delete</option></select></td><td align="center"><button type="button"> GO </button></td></tr>); 
		}
	}	
	
	return (
	
		<div className="col-sm-12">
			<div className="innerBlockContainer">
				<h2> Banking Details &nbsp; &nbsp; <span><input type="checkbox" id="bankDet"/> <label for="bankDet">Does not have banking details</label></span><button className="pull-right" type="button"> Add Account </button><span className="pull-right"><label for="markFraud1">Mark As Fraud:</label> &nbsp; <input type="checkbox" id="markFraud1"/> &nbsp; </span></h2>
				<div className="col-sm-12">
					<div className="row">
						<table width="100%" border="0" className="noBorder noStripe cellGap col-table-4">
							<tbody>
								<tr>
									<td className="bgHighlt">
									Account Status <span className="text-danger"><i className="fa fa-asterisk"></i></span>
										<select name="bAcntStat" value={this.state.bAcntStat} onChange={this.handleChange}>
											<option value="">Account Status</option>
											<option value="A">Active</option>
											<option value="I">Inactive</option>
											<option value="C">Closed</option>
									  </select></td>
									<td className="bgHighlt">
									Account Verification Date <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<Datepicker id={'accVerDt'} name={'date'} ref='accVerDt' /></td>
									<td className="bgHighlt">
									ABA/Routing Nbr <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<input type="text" name="bRoutingNbr" placeholder="ABA/Routing Nbr" value={this.state.bRoutingNbr} onChange={this.handleChange} /></td>
									<td className="bgHighlt">
									Confirm ABA/Routing Nbr <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<input type="text" name="bCRoutingNbr" placeholder="Confirm ABA/Routing Nbr" value={this.state.bCRoutingNbr} onChange={this.handleChange} /></td>
								</tr>
								<tr>
									<td>
									Bank Statement End Date
									<Datepicker id={'bnkStatEndDt'} name={'date'} ref='bnkStatEndDt' /></td>
									<td className="bgHighlt">
									Chkg Acct Nbr <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<input type="text" name="bAcntNbr" placeholder="Chkg Acct Nbr" value={this.state.bAcntNbr} onChange={this.handleChange} /></td>
									<td className="bgHighlt">
									Confirm Chkg Acct Nbr <span className="text-danger"><i className="fa fa-asterisk"></i></span>
									<input type="text" name="bCAcntNbr" placeholder="Confirm Chkg Acct Nbr" value={this.state.bCAcntNbr} onChange={this.handleChange} /></td>
									<td></td>
								</tr>
							</tbody>
						</table>
						<p>&nbsp;</p>
						<div className="contact-infoscroll">
						<table>
							<thead>
								<tr>
									<th>Active</th>
									<th>Bank Name</th>
									<th>ABA/Routing Nbr</th>
									<th>Chkg Acct Nbr</th>
									<th>Select</th>
									<th>&nbsp; </th>
								</tr>
							</thead>
							<tbody>
								{bdLst}
							</tbody>
						</table>
						</div>
					</div>
				</div>          
			</div>
		</div>
	
	);
  } 
}