import React, { Component } from "react";

export default class PTPHistory extends Component {

  constructor (props) {
    super(props);
	this.state = {ptphVal: ''}
  }

  componentWillMount(){
	if( this.props.cVal !== undefined){
		this.setState({ptphVal: this.props.cVal});
	}
  }
    
  render(){
	
	let ptphLst = [];
  
	{/*let ptph = [{pymtDt: '', pymtAmt: '', pymtType: '', tranType: '', dtCreated: '', ptpStatus: ''}];*/}
	let ptph = [];
	for(let q=0; q<=ptph.length-1; q++){
		ptphLst.push(<tr><td align="center">{ptph[q].pymtDt}</td><td align="right">{ptph[q].pymtAmt}</td><td align="center">{ptph[q].pymtType}</td><td align="center">{ptph[q].tranType}</td><td align="center">{ptph[q].dtCreated}</td><td align="center">{ptph[q].ptpStatus}</td></tr>); 
	}
	
	return (
	
		<div>
			<div className="row">
				<table width="100%">
					<thead>
						{(this.state.ptphVal !== 'PH') ? <tr>
							<th colSpan="6" align="center"> {ptph.length} record(s) found.</th>
						</tr> : null}				
						<tr>
							<th>Payment Date</th>
							<th>Payment Amt</th>
							<th>Payment Type</th>
							<th>Tran Type</th>
							<th>Date Created</th>
							<th>PTP Status</th>
						</tr>
					</thead>		
					<tbody>
						{ptphLst}					
					</tbody>
				</table>
			</div>
		</div>
	
	);
  } 
}