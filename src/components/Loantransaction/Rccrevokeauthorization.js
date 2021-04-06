import React, { Component } from "react";

export default class Rccrevokeauthorization extends Component {

  constructor (props) {
    super(props);
    this.state = {refProd: '', refTran: '', mainDiv: false, plsDiv:true};
  }

  componentWillMount(){
    //alert(this.props.rcVal+"..."+this.props.tranVal);
    this.setState({refProd: this.props.rcVal, refTran: this.props.tranVal});
  }

  componentDidMount(){
    if(this.state.refTran === "RCA"){
        this.setState({mainDiv: true}); 
    }
  }

  okBtnFun()
  {
      this.setState({plsDiv : false, mainDiv:true});
  }
  rccFun()
  {
    this.setState({transDiv:true, mainDiv:false});
  }
  
  render(){
      let divFirst = "";
      let divMiddle = "";
      let divLast = "";
      
        if(this.state.refTran === "RCR"){
            divFirst = <h2>Customer RCC Revoke Details <span onClick={()=>{this.props.rcrClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>

            divMiddle = 
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <th>ABA/Routing Nbr</th>
                                        <th>Chkg Acct Nbr</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td align="center"><input type="text"  value="021583030" disabled/></td>
                                        <td align="center"><input type="text" value="89456" disabled/></td>
                                    </tr>
                                </tbody>
                            </table>
                       
            divLast =  <div>
                        <button type="button" onClick={() => {this.rccFun()}}> RCC Revoke</button></div>
                     
        }else if(this.state.refTran === "RCA"){
            divFirst = <h2>Customer New RCC Authorization Details <span onClick={()=>{this.props.rcrClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>

            divMiddle = <table width="100%">
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
                       
            divLast =  <div>
                        <button type="button" onClick={() => {this.rccFun()}}> RCC Authorization</button></div>
                     
        }
    return (
        <div>
            { (this.state.refTran === "RCR") ? 
                <div>  {this.state.plsDiv ?  
                        <div className="col-sm-12 form-group">
                        <div className="innerBlockContainer">
                        <h2>Confirmation</h2>                    
                        <div className="form-group text-center">
                        <p> Do you want to RCC Revoke?</p>                    
                        <button type="button" onClick={()=>{this.okBtnFun()}}>Ok</button>
                        <button type="button" onClick={()=>{this.props.rcrClose('false')}}>Cancel</button>
                        </div>
                        </div>
                        </div> :  null } 
                </div> : null
            }
                {this.state.mainDiv ? <div className="col-sm-12">
                    <div className="innerBlockContainer">
                   
                        {divFirst}
                        <div className="col-sm-12">
                            {divMiddle}
                        </div>
                        <div className="col-sm-12 text-center"> 
                            {divLast}   
                        </div> 
                    </div>
                 </div> : null
                }
                
                {this.state.transDiv ?  
                        <div className="col-sm-12">
                        <div className="innerBlockContainer">
                        <h2>Confirmation</h2>                    
                        <div className="text-center">
                        <p> Transaction Completed Successfully.</p>                    
                        <button type="button" onClick={()=>{this.props.rcrClose('false')}}>Ok</button>
                        </div>
                        </div>
                        </div> :  null } 
            
        </div>
    );
	
  } 
}