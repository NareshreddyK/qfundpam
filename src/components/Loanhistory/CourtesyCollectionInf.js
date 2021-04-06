import React, { Component } from "react";

export default class CourtesyCollectionInf extends Component {

  constructor (props) {
	super(props);
	this.state = {ccCortCons: '', ccConsTyp: '', ccStat: '', ccAssignedTo: '', ccCADFlag: '', ccDMCDet: '', ccDMCCust: '', ccDMCComp: '', ccDMCPh: '', ccLegalDt: '', ccIsLegal: '', ccGarnshDt: '', ccIsGarnsh: ''};
  }
  
  componentWillMount(){
    this.setState({ccCortCons: '', ccConsTyp: '', ccStat: 'Courtesy Calls', ccAssignedTo: '', ccCADFlag: 'No', ccDMCDet: 'No', ccDMCCust: '', ccDMCComp: '', ccDMCPh: '', ccLegalDt: '', ccIsLegal: 'No', ccGarnshDt: '', ccIsGarnsh: 'No'});
  }
    
  render(){
	
	return (
	
		<div>
			<div className="col-sm-12">
				<div className="row">
					<table width="100%" border="0" className="noBorder noStripe col-table-6 nth-evenColor">
						<tbody>
							<tr>
								<td>Courtesy Consent</td>
								<td>{this.state.ccCortCons}</td>
								<td>Consent Type</td>
								<td>{this.state.ccConsTyp}</td>
								<td>Status</td>
								<td>{this.state.ccStat}</td>
							</tr>
							<tr>
								<td>Assigned to</td>
								<td>{this.state.ccAssignedTo}</td>
								<td>CAD Flag</td>
								<td>{this.state.ccCADFlag}</td>
								<td>DMC Details</td>
								<td>{this.state.ccDMCDet}</td>
							</tr>
							<tr>
								<td>DMC Customer</td>
								<td>{this.state.ccDMCCust}</td>
								<td>DMC Company</td>
								<td>{this.state.ccDMCComp}</td>
								<td>DMC Phone</td>
								<td>{this.state.ccDMCPh}</td>
							</tr>
							<tr>
								<td>Legal Date</td>
								<td>{this.state.ccLegalDt}</td>
								<td>Is Legal</td>
								<td>{this.state.ccIsLegal}</td>
								<td>Garnishment Date</td>
								<td>{this.state.ccGarnshDt}</td>
							</tr>
							<tr>
								<td>Is Garnishment</td>
								<td>{this.state.ccIsGarnsh}</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	
	);
  } 
}