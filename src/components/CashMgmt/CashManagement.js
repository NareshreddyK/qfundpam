import React, { Component } from "react";
import Pop from '../Reportpopup';
import DrawerAssign from './DrawerAssign';

export default class CashManagement extends Component {

  constructor (props) {
    super(props);
    this.appndId = this.appndId.bind(this);
    this.state = {hideTbl: false, cmpDisp: ''};        
  }
  
  componentDidUpdate(){
    window.$('#menu'+this.state.id).metisMenu().show();	 
  }
  
  componentWillMount(){    
    window.$('#menu'+this.state.id).metisMenu().show();    
  }

  
  appndId=(str)=>{        
    this.setState({id: str});
    window.$('#menu'+str).metisMenu().show();    
  }
  
  

  cashMgmt(str){
    this.setState({cmpDisp: str});
  }

  cmClose=()=>{
    this.setState({cmpDisp: ''});    
  }
    
  render(){
	const srchBlock = {
		padding: '6px',
		height: 'auto',
		marginBottom: '6px'
	};
	const gap = {
		background: '#40557a'
	};
	
	return (<div className="height100">
				<div className="searchListHolder2">
					<h2> Cash Management </h2>					
					<div className="report-menu" id="main2">
						<div className="scrollbar-inner">
							 <div className="report-menu-height">
								  <nav className="sidebar-nav">
									<ul className="metismenu" id={'menu'+this.state.id}>
										<li><a className="has-arrow" href={'#'} aria-expanded="false">Drawer Management</a>
											<ul>
                                            <li><a href={'#'} onClick={()=>{this.cashMgmt("dAssign")}}> Assign </a></li>
                                            <li><a href={'#'} onClick={()=>{this.cashMgmt("dBalance")}}> Balance </a></li>
                                            <li><a href={'#'} onClick={()=>{this.cashMgmt("dDe-Assign")}}> De-Assign </a></li>
                                            </ul>
										</li>

                                        <li><a className="has-arrow" href={'#'} aria-expanded="false">Safe Management</a>
											<ul>
                                            <li><a href={'#'} onClick={()=>{this.cashMgmt("Cash-In")}}> Cash-In </a></li>
                                            <li><a href={'#'} onClick={()=>{this.cashMgmt("Assign")}}> Assign </a></li>
                                            <li><a href={'#'} onClick={()=>{this.cashMgmt("Balance")}}> Balance </a></li>
                                            <li><a href={'#'} onClick={()=>{this.cashMgmt("De-Assign")}}> De-Assign </a></li>
                                            <li><a href={'#'} onClick={()=>{this.cashMgmt("Internal Transfer")}}> Internal Transfer </a></li>
                                            <li><a href={'#'} onClick={()=>{this.cashMgmt("Deposit")}}>Deposit </a></li>
                                            <li><a href={'#'} onClick={()=>{this.cashMgmt("Store To Store Transfer")}}> Store To Store Transfer </a></li>
                                            <li><a href={'#'} onClick={()=>{this.cashMgmt("Manual Deposit Slip")}}> Manual Deposit Slip </a></li>
                                            <li><a href={'#'} onClick={()=>{this.cashMgmt("Check Cash In")}}> Check Cash In </a></li>
                                            </ul>
										</li>
									</ul>
								  </nav>
							  </div>
							</div>
						</div>
						
				</div>
				<div className="contntHide" style={gap}>{/*<span id="contLeft"><i className="fas fa-angle-left"></i></span><span id="contRight"><i className="fas fa-angle-double-right"></i></span>*/}</div>
               
                    {(this.state.cmpDisp === "dAssign" || this.state.cmpDisp === "dBalance" || this.state.cmpDisp === "dDe-Assign") ? <DrawerAssign tranVal={this.state.cmpDisp} drClose = {this.cmClose} /> : null }
                    {(this.state.cmpDisp === "Cash-In" || this.state.cmpDisp === "Assign" || this.state.cmpDisp === "Balance" || this.state.cmpDisp === "De-Assign" || this.state.cmpDisp === "Internal Transfer" || this.state.cmpDisp === "Deposit" || this.state.cmpDisp === "Store To Store Transfer" || this.state.cmpDisp === "Manual Deposit Slip" || this.state.cmpDisp === "Check Cash In") ? <DrawerAssign tranVal={this.state.cmpDisp} drClose = {this.cmClose} /> : null }	
                <div className="collectionContainer">
				</div>
		</div>
    );
  } 
}