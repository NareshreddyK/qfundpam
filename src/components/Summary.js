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

export default class Summary extends Component {

  constructor (props) {
	super(props);
	this.state = {sProdTyp: ''};
  }

  componentWillMount(){
	this.setState({sProdTyp: ''});
  };

  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }
    
  componentDidMount(){
	this.refs.ident.loadData(this.props.info.nbr+"_"+this.props.info.ssn);
	this.refs.maddr.loadData(this.props.info.flName+"_"+this.props.info.caddress+"_"+this.props.info.ccity+"_"+this.props.info.cstate+"_"+this.props.info.czip);
	this.refs.paddr.loadData(this.props.info.caddress+"_"+this.props.info.ccity+"_"+this.props.info.cstate+"_"+this.props.info.czip);
	this.refs.cont.loadData(this.props.info.email+"_"+this.props.info.phone+"_"+this.props.info.phoneTyp);
	this.refs.misc.loadData('3687467_32102');
	this.refs.inc.loadData(' ');
	this.refs.bank.loadData(' ');
	this.refs.oth.loadData(' ');
  }; 
  
  render(){
	const eqHght = {
		display: 'flex'
	};
	return (
		<div className="height100">
			<div className="collectionContainer">
				<div className="collectionSubContainer">
					<div className="col-sm-6 col-sm-offset-3">
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
					<div className="col-sm-3 text-right margin-top">
						<b>Note:</b> All mandatory Fields are highlighted with <span class="text-danger"><i class="fa fa-asterisk"></i></span>	
					</div>
					
					{ /*<PersonalDetails /> */}
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
						<button type="button"> Save & Next </button>*/}
						<button type="button"> Save & Loan </button>						
						<button type="button" className="btn-danger"> Deny </button>
					</div>
				</div>
			</div>
		</div>
	);
  } 
}