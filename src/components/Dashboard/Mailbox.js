import React, { Component } from "react";

export default class Mailbox extends Component {
	constructor(props){
    	super(props); 
	}	

  render(){
    return (		
        <div className="col-sm-12 mailBox">
            <h2>Inbox <span>(Messages)</span><span className="clkView"><b>Note</b>: Click on the Messages to View</span></h2>
			<div className="mailbox-scroll">
		   <table width="100%" cellPadding="0" cellSpacing="0" border="0" className="dshTable">
                <thead>            
                    <tr>
                        <th>Date</th>
                        <th>From</th>
                        <th>Subject</th>
                        <th>Messages</th>
                        <th><a href="#"><i className="fa fa-window-minimize"></i></a>&nbsp;<a href="#"><i className="fa fa-window-maximize"></i></a>&nbsp;&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={()=>this.props.menus('MSG')}>
                        <td>12/16/2019</td>								
                        <td>Anthony, H</td>								
                        <td>Veritec Update</td>								
                        <td colSpan="2">Veritec is down for maintenance activity. Will update once the service is resumed.</td>								
                    </tr>
                    <tr onClick={()=>this.props.menus('MSG')}>
                        <td>12/16/2019</td>								
                        <td>Marry, D</td>								
                        <td>Debit Card Payments</td>								
                        <td colSpan="2">Do not initiate any debit card payments until further notice</td>								
                    </tr>
                    <tr onClick={()=>this.props.menus('MSG')}>
                        <td>12/13/2019</td>								
                        <td>Phillip, M</td>								
                        <td>Store opens on Saturday</td>								
                        <td colSpan="2">Store will be opened on saturday because of the expected high volume for christmas.</td>								
                    </tr>
                    <tr onClick={()=>this.props.menus('MSG')}>
                        <td>12/01/2019</td>								
                        <td>Rozer, S</td>								
                        <td>High volume Day</td>								
                        <td colSpan="2">Coming friday will be a high volume day so make sure everything is working. If any issues get it resolved before thursday</td>								
                    </tr>
                </tbody>              
            </table>
			</div>
        </div>						
    );
  }
}