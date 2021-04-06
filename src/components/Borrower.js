import React, { Component } from "react";
import Identfn from './Summary/Identification';
import MAddress from './Summary/MailingAddress';
import PAddress from './Summary/PhysicalAddress';
import CInfo from './Summary/ContactInformation';
import MInfo from './Summary/MiscellaneousInformation';
import IncDetails from './Summary/IncomeDetails';
import BankingDetails from './Summary/BankingDetails';
import OthDetails from './Summary/OtherDetails';
import Identification from './Summarynew/Identification';
import Name from './Summarynew/Name';
import MailingAddress from './Summarynew/MailingAddress';
import PhysicalAddress from './Summarynew/PhysicalAddress';
import ContactInformation from './Summarynew/ContactInformation';
import MiscellaneousInformation from './Summarynew/MiscellaneousInformation';
import IncomeDetails from './Summarynew/IncomeDetails';
import BankDetails from './Summarynew/BankDetails';
import OtherDetails from './Summarynew/OtherDetails';
import Loandecision from './Loandecision';

export default class Borrower extends Component {

  constructor (props) {
	super(props);
	this.state = {sProdTyp: '', ncDiv: true, Loandec: true, pdtType: false, smryComp: false, identfiComp: true, incomeDet: true, bankDet: true, othDet: true};
	this.income = this.income.bind(this);
  }
  
  income = (str) =>{
		if(str === 'per'){
			this.setState({pdtType: true, smryComp: true, incomeDet: true, identfiComp: false, bankDet: true, othDet: true});
			window.$("#step-1").removeClass("step-success").addClass("step-complete");
			window.$("#step-1 .step-circle").empty().append("<i class='fas fa-check'></i>");
			window.$("#step-2").addClass("step-success");
		} else if(str === 'inc'){
			this.setState({pdtType: true, smryComp: true, incomeDet: false, identfiComp: true, bankDet: true, othDet: true});
			window.$("#step-2").removeClass("step-success").addClass("step-complete");
			window.$("#step-2 .step-circle").empty().append("<i class='fas fa-check'></i>");
			window.$("#step-3").addClass("step-success");
		} else if(str === 'bnk'){
			this.setState({pdtType: true, smryComp: true, incomeDet: true, identfiComp: true, bankDet: false, othDet: true});
			window.$("#step-3").removeClass("step-success").addClass("step-complete");
			window.$("#step-3 .step-circle").empty().append("<i class='fas fa-check'></i>");
			window.$("#step-4").addClass("step-success");
		} else if(str === 'oth'){
			this.setState({pdtType: true, smryComp: true, incomeDet: true, identfiComp: true, bankDet: true, othDet: false});
			window.$("#step-4").removeClass("step-success").addClass("step-complete");
			window.$("#step-4 .step-circle").empty().append("<i class='fas fa-check'></i>");
			window.$("#step-5").addClass("step-success");
		} else {
			this.setState({pdtType: true, smryComp: true, incomeDet: true, identfiComp: false, bankDet: true, othDet: true});
		}		
  }

  componentWillMount(){
	this.setState({sProdTyp: ''});
  };

  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  ncInner(){
	this.setState({ncDiv: false, Loandec: false});	 	
  }
    

  render(){
	const eqHght = {
		display: 'flex'
	};
	return (
		<div className="height100">
			<div className="collectionContainer">
				<div className="collectionSubContainer">
					<div id="ncDiv" hidden={!this.state.ncDiv}>
						<div className="col-sm-12 form-group">
							<table width="100%" class="steps">
								<tr>
									<td align="center" id="step-1" class="step step-success">
										<div class="step-circle">1</div>
										<div class="step-text hidden-xs hidden-sm">SUMMARY INFO</div>
									</td>
									<td align="center" id="step-2" class="step">
										<div class="step-line"></div>
										<div class="step-circle">2</div>
										<div class="step-text hidden-xs hidden-sm">PERSONAL</div>
									</td>
									<td align="center" id="step-3" class="step">
										<div class="step-line"></div>
										<div class="step-circle">3</div>
										<div class="step-text hidden-xs hidden-sm">INCOME</div>
									</td>
									<td align="center" id="step-4" class="step">
										<div class="step-line"></div>
										<div class="step-circle">4</div>
										<div class="step-text hidden-xs hidden-sm">BANKING</div>
									</td>
									<td align="center" id="step-5" class="step">
										<div class="step-line"></div>
										<div class="step-circle">5</div>
										<div class="step-text hidden-xs hidden-sm">OTHER</div>
									</td>
								</tr>
							</table>
						</div>

						<div className="col-sm-4 col-sm-offset-4 text-center" hidden={this.state.pdtType}>
							<table width="100%" border="0" className="cellGap noBorder">
								<tbody>
									<tr className="bgHighlt">
										<td>PRODUCT TYPE</td>
										<td>
											<select name="sProdTyp" value={this.state.sProdTyp} onChange={this.handleChange}>
												<option value="PDL">Payday Loan</option>
												<option value="ILP">Installment Loan</option>                            
												<option value="TLP">Title Loan</option>
												<option value="CCG">Check Cashing</option>
												<option value="ULOC">Line of Credit</option>
											</select>                    
										</td>
									</tr>
								</tbody>	
							</table>            
						</div>

						<div className="col-sm-12 text-right form-group">
							<b>Note:</b> All mandatory Fields are highlighted with <span class="text-danger"><i class="fa fa-asterisk"></i></span>
						</div>

						<div id="smryComp" hidden={this.state.smryComp}>
							<Identfn ref='ident'/>					
							<MAddress ref='maddr'/>					
							<PAddress ref='paddr'/>					
							<CInfo ref='cont'/>					
							<MInfo ref="misc"/>
							<IncDetails ref="inc"/>
							<BankingDetails ref="bank"/>
							<OthDetails ref="oth"/>
							<div className="col-sm-12 text-center form-group">
								<button type="button" onClick={()=>this.income("per")}> &nbsp; Next &nbsp;</button> &nbsp; 
								<button type="button"> &nbsp; Deny &nbsp; </button>							
							</div>
						</div>

						<div id="identfiComp" hidden={this.state.identfiComp}>
							<Identification />						
							<Name />						
							<MailingAddress />						
							<PhysicalAddress />						
							<ContactInformation />						
							<MiscellaneousInformation />
							<div className="col-sm-12 text-center form-group">
								<button type="button" onClick={()=>this.income("inc")}> &nbsp; Next &nbsp;</button> &nbsp; 
								<button type="button"> &nbsp; Deny &nbsp; </button>							
							</div>
						</div>

						<div id="incomeDet" hidden={this.state.incomeDet}>
							<IncomeDetails />
							<div className="col-sm-12 text-center form-group">
								<button type="button" onClick={()=>this.income("bnk")}> &nbsp; Next &nbsp;</button> &nbsp; 
								<button type="button" > &nbsp; Deny &nbsp; </button>
							</div>
						</div>

						<div id="bankDet" hidden={this.state.bankDet}>
							<BankDetails />
							<div className="col-sm-12 text-center form-group">
								<button type="button" onClick={()=>this.income("oth")}> &nbsp; Next &nbsp;</button> &nbsp; 
								<button type="button" > &nbsp; Deny &nbsp; </button>
							</div>
						</div>

						<div id="othDet" hidden={this.state.othDet}>
							<OtherDetails />
							<div className="col-sm-12 text-center form-group">
								<button type="button" > &nbsp; Save &nbsp;</button> &nbsp; 
								<button type="button" onClick={()=>this.ncInner()} > &nbsp; Save &amp; Loan &nbsp;</button> &nbsp;
								<button type="button" > &nbsp; Deny &nbsp; </button>
							</div>
						</div>
						
					</div>

					<div id="lnDecision" hidden={this.state.Loandec}>
						<Loandecision />
					</div>
				</div>
			</div>
		</div>
	);
  } 
}