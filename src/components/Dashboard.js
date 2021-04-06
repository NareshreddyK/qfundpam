import React, { Component } from "react";
import Popup from './Popup';
import ACHCustomers from './Dashboard/ACHCustomers';
import Onlinecustomers from './Dashboard/Onlinecustomers';
import Achivement from './Dashboard/Achivement';
import Leads from './Dashboard/Leads';
import Defaultcust from './Dashboard/Defaultcust';
import PTPcustomers from './Dashboard/PTPcustomers';
import Followupcust from './Dashboard/Followupcust';
import Mailbox from './Dashboard/Mailbox';
import Loaninformation from './Dashboard/Loaninformation';
import Promotions from './Dashboard/Promotions';

export default class Dashboard extends Component {
	constructor(props){
    	super(props); 
	}

	menus=(str)=>{
		this.refs.Popup.dispBlk(str);
	}

	dbrdTabs=(str)=>{
		this.props.addTabs(str);
	}

  render(){
	const dtWidth = {
		width: '83%'
	};
    return (
		<div id="home" className="tab-pane fade in active height85">			
			<div className="col-sm-9 minusPaddingRight">
				<div className="col-sm-12 dashBoardLeft">
					<div className="col-sm-4">
						<ACHCustomers dbrdTabs={this.dbrdTabs} />
						<Onlinecustomers dbrdTabs={this.dbrdTabs} />
					</div>
					<div className="col-sm-6">
						<Achivement />					
					</div>
					<div className="col-sm-2">
						<Leads dbrdTabs={this.dbrdTabs}/>
					</div>
					<div className="col-sm-2">
						<Defaultcust dbrdTabs={this.dbrdTabs}/>						
					</div>
					<div className="col-sm-4">
						<PTPcustomers dbrdTabs={this.dbrdTabs}/>						
					</div>
					<div className="col-sm-2">
						<Followupcust dbrdTabs={this.dbrdTabs}/>
					</div>
					<Mailbox menus={this.menus}/>
				</div>				
			</div>
			<div className="col-sm-3 minusPaddingLeft">
				<div className="col-sm-12 dashBoardRight">
					<Loaninformation />
					<br/>
					<Promotions />
				</div>
			</div>
			<Popup ref='Popup' />									
		</div>
    );
  }
}