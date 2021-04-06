import React, { Component } from "react";

export default class ACHauthrev extends Component {

  constructor (props) {
    super(props);
    this.state = {achMain: true, achConf: true, achDet: true, achProd: '', achTran: '', achHead: '', achRtngNbr: '', achCRtngNbr: '', achAcctNbr: '', achCAcctNbr: '', achRadio: 'Y', achDebitNbr: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    this.setState({achProd: this.props.achVal, achTran: this.props.tranVal});
  }

  componentDidUpdate(prevProps){
	if(prevProps.tranVal !== this.props.tranVal){
        this.setState({achProd: this.props.achVal, achTran: this.props.tranVal});
		if(this.props.tranVal == "AA"){
            this.setState({achHead: "ACH Authorization", achMain: false, achDet: true});
        }else if(this.props.tranVal == "AR"){
            this.setState({achHead: "ACH Revoke", achMain: false, achDet: false, achRtngNbr: '', achAcctNbr: '', achDebitNbr: ''});
        }else if(this.props.tranVal == "RA"){
            this.setState({achHead: "RCC Authorization", achMain: false, achDet: true});
        }else if(this.props.tranVal == "RR"){
            this.setState({achHead: "RCC Revoke", achMain: false, achDet: false, achRtngNbr: '', achAcctNbr: '', achDebitNbr: ''});
        }else if(this.props.tranVal == "DCR"){
            this.setState({achHead: "DC Revoke", achMain: false, achDet: false, achRtngNbr: '111111118', achAcctNbr: '9578467', achDebitNbr: '4852'});
        }
	}
  }

  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }
  
  achAuthRev(){
      this.setState({achMain: true, achConf: false});
  }

  render(){
    
    return(
        <div>
           
                <div hidden={this.state.achMain}>
                        
                    {this.state.achDet ?
                        <table className="noBorder noStripe col-table-4 cellGap">
                            <tbody>
                                <tr>
                                    <td>
                                        ABA/Routing Nbr <span className="text-danger"><i className="fa fa-asterisk"></i></span> <input type="text" name="achRtngNbr" value={this.state.achRtngNbr} onChange={this.handleChange} />
                                    </td>
                                    <td>
                                        Confirm ABA/Routing Nbr <span className="text-danger"><i className="fa fa-asterisk"></i></span> <input type="text" name="achCRtngNbr" value={this.state.achCRtngNbr} onChange={this.handleChange} />
                                    </td>
                                    <td>
                                        Chkg Acct Nbr <span className="text-danger"><i className="fa fa-asterisk"></i></span> <input type="text" name="achAcctNbr" value={this.state.achAcctNbr} onChange={this.handleChange} />
                                    </td>
                                    <td>
                                        Confirm Chkg Acct Nbr <span className="text-danger"><i className="fa fa-asterisk"></i></span> <input type="text" name="achCAcctNbr" value={this.state.achCAcctNbr} onChange={this.handleChange} />
                                    </td>
                                </tr>
                                {(this.state.achTran === "AA") ? 
                                    <tr>
                                        <td colspan="2">
                                            Proceed Authorization for all loans<span className="text-danger"><i className="fa fa-asterisk"></i></span>
                                            &nbsp; <input type="radio" name="achRadio" value="Y" checked={this.state.achRadio === 'Y'} onChange={this.handleChange} />Yes
                                            &nbsp; <input type="radio" name="achRadio" value="N" checked={this.state.achRadio === 'N'} onChange={this.handleChange} />No (Current loan only)
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                : null }
                                
                                <tr>
                                    <td align="center" colspan="4">
                                        <button type="button" onClick={() =>{this.achAuthRev()}}> {this.state.achHead} </button>                
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    :
                        <table className="noBorder noStripe col-table-4 cellGap">
                            <tbody>
                                
                                {(this.state.achTran !== "DCR") ? 
                                    <tr>
                                    <td>
                                        ABA/Routing Nbr <input type="text" name="achRtngNbr" value={this.state.achRtngNbr} disabled />
                                    </td>
                                    <td>
                                        Chkg Acct Nbr <input type="text" name="achAcctNbr" value={this.state.achAcctNbr} disabled />
                                    </td>
                                    <td></td>
                                    <td></td>
                                    </tr>
                                    : 	
                                    <tr>										
                                    <td>
                                        ABA/Routing Nbr <input type="text" name="achRtngNbr" value={this.state.achRtngNbr} disabled />
                                    </td>
                                    <td>
                                        Chkg Acct Nbr <input type="text" name="achAcctNbr" value={this.state.achAcctNbr} disabled />
                                    </td>
                                    <td>
                                        Debit Card Nbr <input type="text" name="achDebitNbr" value={this.state.achDebitNbr} disabled />
                                    </td>
                                    </tr>
                                }
                                
                                <tr>
                                    <td align="center" colspan="4">
                                        <button type="button" onClick={() =>{this.achAuthRev()}}> {this.state.achHead} </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    }
                    
                </div>
                
            
            <div hidden={this.state.achConf}>
                <div className="col-sm-12">
                    {this.state.achDet ?
                        <div class="innerBlockContainer">
                            <h2>Confirmation</h2>
                            <div class="text-center">
                                <p>{this.state.achHead} completed successfully</p>
                                <p>Would you like to complete another transaction for this customer? </p>
                            </div>
                            <div class="text-center">
                                <button type="button" onClick={()=>{this.props.achClose('false')}}>Yes</button>
                                <button type="button" onClick={()=>{this.props.achClose('false')}}>No</button>
                            </div>
                        </div>
                    :
                        <div class="innerBlockContainer">
                            <h2>Confirmation</h2>
                            <div class="text-center">
                                <p>{this.state.achHead} completed successfully</p>
                                <p>Would you like to complete another transaction for this customer? </p>
                            </div>
                            <div class="text-center">
                                <button type="button" onClick={()=>{this.props.achClose('false')}}>Yes</button>
                                <button type="button" onClick={()=>{this.props.achClose('false')}}>No</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
            
        </div>
    );
	
  } 
}