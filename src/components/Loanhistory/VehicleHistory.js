import React, { Component } from "react";

export default class VehicleHistory extends Component {

  constructor (props) {
    super(props);
	this.state = {vhVal: ''};
  }

  componentWillMount(){
	if(this.props.cVal !== undefined){
		this.setState({vhVal: this.props.cVal});
	}
  }
    
  render(){
			
	let vhLst = [];
	let ttsLst = [];
	let vh = [];

	if(this.state.vhVal !== 'VH'){
		vh = [{vin: '1J4FY19P3RP411710', make: 'Jeep', model: 'Wrangler', year: '1994'}];
		for(let y=0; y<=vh.length-1; y++){
			vhLst.push(<tr><td align="center">{vh[y].vin}</td><td align="center">{vh[y].make}</td><td align="center">{vh[y].model}</td><td align="center">{vh[y].year}</td></tr>); 
		}
	}else{
		vh = [{vin: '1J4FY19P3RP411710', make: 'Jeep', model: 'Wrangler', year: '1994', adjBookedVal: '2450.00', vehStat: 'Default'}];
		for(let y=0; y<=vh.length-1; y++){
			vhLst.push(<tr><td align="center">{vh[y].vin}</td><td align="center">{vh[y].make}</td><td align="center">{vh[y].model}</td><td align="center">{vh[y].year}</td><td align="center">{vh[y].adjBookedVal}</td><td align="center">{vh[y].vehStat}</td></tr>); 
		}
	}
	
	
	let tts = [{titleTrackId: 'Lien Not Applied For', transDt: '2018-12-19 15:49:55.0'},{titleTrackId: 'Title Returned From DMV', transDt: '2019-01-15 11:25:05.0'},{titleTrackId: 'WRITEOFF', transDt: '2019-01-22 13:14:33.0'}];
	for(let z=0; z<=tts.length-1; z++){
		ttsLst.push(<tr><td align="center">{tts[z].titleTrackId}</td><td align="center">{tts[z].transDt}</td></tr>); 
	}	
	
	return (
		
		
		<div>
			<div className="row">
				<table width="100%">
					<thead>
						{(this.state.vhVal !== 'VH') ? <tr>
							<th colSpan="6" align="center"> {vh.length} record(s) found.</th>
						</tr> : null }				
						<tr>
							<th>VIN</th>
							<th>Make</th>
							<th>Model</th>
							<th>Year</th>
							{(this.state.vhVal === 'VH') ? <th>Adjusted Blackbook Value</th>: null }
							{(this.state.vhVal === 'VH') ? <th>Vehicle Status</th>: null }
						</tr>
					</thead>		
					<tbody>
						{vhLst}
					</tbody>
				</table>
			</div>
			<p>&nbsp;</p>
			{(this.state.vhVal !== 'VH') ? <div className="row">
				<table width="100%">
					<thead>
						<tr>
							<th colSpan="2" align="center"> Title Tracking Status</th>
						</tr>				
						<tr>
							<th>Title Track Id</th>
							<th>Transaction Date</th>
						</tr>
					</thead>		
					<tbody>
						{ttsLst}
					</tbody>
				</table>
			</div> : null }
		</div>
		
	);
  } 
}