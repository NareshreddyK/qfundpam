import React, { Component } from "react";

export default class Initiateepp extends Component {

  constructor (props) {
    super(props);
    this.state = {refProd: '', refTran: '', mainDiv: true, nextDiv: false, plsDiv:false, yesDiv:true, iePayFreq: '', ieAmtApplied: '', ieInstTot: '', ieCollTyp: '', ieChkAmt: '', ieRtngNbr: '', ieChkNbr: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    this.setState({refProd: this.props.ieVal, refTran: this.props.tranVal, iePayFreq: 'Monthly', ieAmtApplied: '4519.32', ieInstTot: '4519.32', ieCollTyp: 'ACH', ieChkAmt: '4519.32', ieRtngNbr: '', ieChkNbr: '2098924'});
  }

  nextBtnFun(){
    this.setState({nextDiv : true, mainDiv:false, yesDiv:true});
  }

  finPayFun(){
    this.setState({plsDiv: true, nextDiv : false, mainDiv:false});
  }

  yesBtnFun(){
    this.setState({yesDiv:false, plsDiv: false});
  }

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value});
  }

  render(){

    let ieLst = [];
    let ie = [{amt: '361.54', schdDts: '02/10/2021'},{amt: '361.54', schdDts: '03/10/2021'},{amt: '361.54', schdDts: '04/10/2021'},{amt: '361.54', schdDts: '05/10/2021'},{amt: '361.54', schdDts: '06/10/2021'},{amt: '361.54', schdDts: '07/10/2021'},{amt: '361.54', schdDts: '08/10/2021'},{amt: '361.54', schdDts: '09/10/2021'},{amt: '361.54', schdDts: '10/10/2021'},{amt: '361.54', schdDts: '11/10/2021'},{amt: '361.54', schdDts: '12/10/2021'},{amt: '361.54', schdDts: '01/10/2022'},{amt: '180.84', schdDts: '02/10/2022'}];
    for(let e=0; e<=ie.length-1; e++){
      ieLst.push(<tr><td align="center">Installment {[e+1]}</td><td align="center">$ {ie[e].amt}</td><td align="center">{ie[e].schdDts}</td></tr>);
    }

    return (
        <div>
          {this.state.mainDiv ? <div className="col-sm-12">
            <div className="innerBlockContainer">
              <h2> Payment Plan Options <span onClick={()=>{this.props.iepClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
              <div className="col-sm-12">
					      <table width="100%" className="noBorder noStripe col-table-6 nth-evenColor">
									<tbody>
									  <tr>
										  <td>Payment Frequency</td>
										  <td align="center">{this.state.iePayFreq}</td>
										  <td>Amt Applied to RPP</td>
										  <td align="center">$ {this.state.ieAmtApplied}</td>
										  <td></td>
										  <td></td>
									  </tr>
								  </tbody>
							  </table>
					    </div>
              
              <div className="col-sm-12 text-center">                            
                <button type="button" onClick={() => {this.nextBtnFun()}}> Next </button>
							  {/*<button type="button"> Back</button>*/}
						    <button type="button" onClick={()=>{this.props.iepClose('false')}}> Cancel </button>
					    </div>
                            
            </div>
          </div> : null
        }
    
           {this.state.nextDiv ? <div className="col-sm-12">
            <div class="innerBlockContainer"> 
              <h2>Payment Plan Details <span onClick={()=>{this.props.iepClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>                
              <table width="100%" className="col-table-3">
				        <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Amt</th>
                    <th>Scheduled PMT Dates</th>
                  </tr>
                </thead>
                <tbody>
                    {ieLst}
                    <tr>
                      <td align="center">Installment Total</td>
					            <td align="center">$ {this.state.ieInstTot}</td>
					            <td></td>
                    </tr>
                    <tr>
                      <td align="center">Collateral Type</td>
                      <td><select name="ieCollTyp" value={this.state.ieCollTyp} onChange={this.handleChange}><option value="ACH">ACH</option><option value="CHK">Check</option></select></td>
					            <td></td>
                    </tr>
                    <tr>
                      <td align="center">Check Amt</td>
                      <td align="center">$ {this.state.ieChkAmt}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td align="center">ABA/Routing Nbr</td>
                      <td><input type="text" name="ieRtngNbr" value={this.state.ieRtngNbr} onChange={this.handleChange} /></td>
					            <td></td>
                    </tr>
                    <tr>
                      <td align="center">Check Account Nbr</td>
                      <td><input type="text" name="ieChkNbr" value={this.state.ieChkNbr} onChange={this.handleChange} /></td>
					            <td></td>
                    </tr>
                </tbody>
                </table>
                <div className="col-sm-12 text-center">                            
                    <button type="button" onClick={() =>{this.finPayFun()}}> Finished Payment Plan </button>
                    <button type="button" onClick={()=>{this.props.iepClose('false')}}> Cancel </button>
                </div>
                </div>
            </div> : null  }

            {this.state.plsDiv ?  
              <div className="col-sm-12">
                <div className="innerBlockContainer">
                  <h2>Confirmation</h2>                    
                  <div className="text-center">
                    <p> Do you want to continue the Payment Plan for this Customer?</p>                    
                    <button type="button" onClick={()=>{this.yesBtnFun()}}>Yes</button>
                    <button type="button" onClick={()=>{this.props.iepClose('false')}}>No</button>
                  </div>
                </div>
              </div> 
            :
              <div className="col-sm-12" hidden={this.state.yesDiv}>
                <div className="innerBlockContainer">
                  <h2>Confirmation</h2>                    
                  <div className="text-center">
                    <p> Payment Plan Transaction Completed Successfully.</p>                    
                    <p> Would like to complete Another Transaction for this Customer?</p>                    
                    <button type="button" onClick={()=>{this.props.iepClose('false')}}>Ok</button>
                  </div>
                </div>
              </div> 
            } 
        </div>
    );
	
  } 
}