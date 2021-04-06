import React, { Component } from "react";
import Popup from './Popup'

export default class Dashboard extends Component {
	constructor(props){
    super(props); 
	
	}
  render(){
    return (<div id="home" className="tab-pane fade in active height85">
			<div id="dshBrd">
				<div className="col-sm-4 dboard1 collections">
					<div className="linearGreen">
						<h2>Collections
						<a href={"#"} onClick={()=>{this.props.addTabs({name: 'Collection Management', id: '2'})}}><span>Click Here</span></a>
						</h2>
					</div>
				</div>
				<div className="col-sm-3 dboard1 linearBlue">
					<img src="images/help.png" className="img-responsive" align="left" valign="bottom" />
				<h2>Help
				<span>Click Here</span>
				</h2>
				</div>
				<div className="col-sm-4 dboard1 makePayment">
				&nbsp;
				<div align="center">
				</div>
				
				</div>
			</div>
			<div className="dshBrdDown">
				<div className="col-sm-3 col-sm-offset-4 dboard2 accountMgmt">
				<div className="linearGreenBottom">
				<h2>Customer Registration
				<div align="center">
				<img src="images/custRegis.png" className="img-responsive" />
				</div>
				<a href={'#'} onClick={()=>{this.props.addTabs({name: 'New Customer', id: 'Newcustomer'})}}><span className="text-right colorWht">Click Here</span></a>
				</h2>
				</div>
				</div>
				<div className="col-sm-5 dboard2 reportsBG">
					&nbsp;
					<h2>
				<a href={'#'} onClick={()=>{this.props.addTabs({name: 'Reports', id: '3'})}}><span className="colorWht text-left">Click Here</span></a></h2>
				</div>
			</div>									
		</div>
    );
  }
}