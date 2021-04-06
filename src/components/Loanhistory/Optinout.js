import React, { Component } from "react";

export default class Optinout extends Component {

  constructor (props) {
    super(props);
	this.state = {ioVal: ''};
  }
  
  componentWillMount(){
	if(this.props.cVal !== undefined){
		this.setState({ioVal: this.props.cVal});
	}
  }
    
  render(){	
		
	return (
	
		<div>
			<div className="row">
				<table width="100%">
					<thead>
						<tr>
							<th colSpan="4" align="left"> Text Messaging ( Verify <input type="checkbox" />)</th>
						</tr>
					</thead>		
					<tbody>
						<tr>
              <td>Account Maintenance</td>
              <td>
                  <input type="radio" /> &nbsp; Opt In &nbsp;&nbsp;&nbsp;
                  <input type="radio" /> &nbsp; Opt Out 
              </td>
              <td>Marketing</td>
              <td>
                  <input type="radio" /> &nbsp; Opt In &nbsp;&nbsp;&nbsp;
                  <input type="radio" /> &nbsp; Opt Out 
              </td>
            </tr>
					</tbody>
				</table>
			</div>
            <p>&nbsp;</p>
            <div className="row">
				<table width="100%">
					<thead>
						<tr>
							<th colSpan="4" align="left"> Email Messaging </th>
						</tr>
					</thead>		
					<tbody>
						<tr>
              <td>Account Maintenance</td>
              <td>
                  <input type="radio" /> &nbsp; Opt In &nbsp;&nbsp;&nbsp;
                  <input type="radio" /> &nbsp; Opt Out 
              </td>
              <td>Marketing</td>
              <td>
                  <input type="radio" /> &nbsp; Opt In &nbsp;&nbsp;&nbsp;
                  <input type="radio" /> &nbsp; Opt Out 
              </td>
            </tr>
					</tbody>
				</table>
			</div>
		</div>
	
	);
  } 
}