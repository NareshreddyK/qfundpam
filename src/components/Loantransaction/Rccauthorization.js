import React, { Component } from "react";

export default class Rccauthorization extends Component {

  constructor (props) {
    super(props);
    this.state = {refProd: '', refTran: '', mainDiv: true};
  }

  componentWillMount(){
    //alert(this.props.rVal+"..."+this.props.tranVal);
    this.setState({refProd: this.props.raVal, refTran: this.props.tranVal});
  }
  
  render(){

    return (
        <div>
            {
                (this.state.refTran === "RCA") ? 
                <div> 
                {this.state.mainDiv ? <div className="col-sm-12">
                    <div className="innerBlockContainer">
                    <h2>Customer New RCC Authorization Details <span onClick={()=>{this.props.rcaClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
                    
                    <div className="col-sm-12">
					<table width="100%">
								<thead>
									<tr>
										<th>ABA/Routing Nbr <span class="text-danger"><i class="fa fa-asterisk"></i></span></th>
                                        <th>Confirm ABA/Routing Nbr <span class="text-danger"><i class="fa fa-asterisk"></i></span></th>
										<th>Chkg Acct Nbr <span class="text-danger"><i class="fa fa-asterisk"></i></span></th>
                                        <th>Confirm Chkg Acct Nbr <span class="text-danger"><i class="fa fa-asterisk"></i></span></th>
									</tr>
								</thead>
								<tbody>
                                    <tr>
                                        <td align="center"><input type="text"  value="111111118"/></td>
                                        <td align="center"><input type="text" value="111111118"/></td>
                                        <td align="center"><input type="text" value="123456"/></td>
                                        <td align="center"><input type="text" value="123456"/></td>
									</tr>
								</tbody>
							</table>
					</div>
                    &nbsp;&nbsp;
                    <div className="col-sm-12 text-center">                            
                        <button type="button" > RCC Authorization</button>
					</div>
                            
                    </div>
                 </div> : null
                }
                </div>
                : null
            }
       
            
        </div>
    );
	
  } 
}