import React, { Component } from "react";
import PersonalDetails from './Summary/PersonalDetails';
import Identification from './Summary/Identification';
import MailingAddress from './Summary/MailingAddress';
import PhysicalAddress from './Summary/PhysicalAddress';
import ContactInfo from './Summary/ContactInformation';
import MiscellaneousInfo from './Summary/MiscellaneousInformation';
import IncomeDetails from './Summary/IncomeDetails';
import BankingDetails from './Summary/BankingDetails';
import OtherDetails from './Summary/OtherDetails';
import Loandecision from './Loandecision';

export default class Newcustomer extends Component {

  constructor (props) {
	super(props);
	this.state = {sProdTyp: '', ncDiv: true, Loandec: false};
  }

  componentWillMount(){
	this.setState({sProdTyp: ''});
  };

  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  ncInner(){
	this.setState({ncDiv: false, Loandec: true});	 	
  }
    
  componentDidMount(){
	this.refs.ident.loadData('');
	this.refs.maddr.loadData('');
	this.refs.paddr.loadData('');
	this.refs.cont.loadData('');
	this.refs.misc.loadData('');
	this.refs.inc.loadData('');
	this.refs.bank.loadData('');
	this.refs.oth.loadData('');
  }; 
  
  render(){
	const eqHght = {
		display: 'flex'
	};
	return (
		<div className="height100">
			<div className="collectionContainer">
				<div className="collectionSubContainer">
					<div id="ncDiv" hidden={!this.state.ncDiv}>
						<div className="col-sm-4 col-sm-offset-4 text-center">
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

						<div className="col-md-4 text-right margin-top">
							<b>Note:</b> All mandatory Fields are highlighted with <span class="text-danger"><i class="fa fa-asterisk"></i></span>
						</div>
						
						{/* <PersonalDetails />	*/}
						<Identification ref='ident'/>					
						<MailingAddress ref='maddr'/>					
						<PhysicalAddress ref='paddr'/>					
						<ContactInfo ref='cont'/>					
						<MiscellaneousInfo ref="misc"/>
						<IncomeDetails ref="inc"/>
						<BankingDetails ref="bank"/>
						<OtherDetails ref="oth"/>
						
						<div className="col-sm-12 text-center form-group">
							{/*<button type="button"> Save & Edit </button>                        
							<button type="button"> Save & Next </button>
							<button type="button" className="btn-danger"> Deny </button>*/}
							<button type="button" onClick={()=>this.ncInner()}> Save & Loan </button>							
						</div>
					</div>

					<div id="lnDecision" hidden={!this.state.Loandec}>
						<Loandecision />
					</div>
				</div>
			</div>
		</div>
	);
  } 
}