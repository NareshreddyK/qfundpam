import React, { Component } from "react";
import Countbydenomination from '../common/Countbydenomination';
import SafeAssign from '../CashMgmt/SafeAssign'

export default class DrawerAssign extends Component {

      constructor(props) {
            super(props);
            this.state = { dflName: '', hideHeader: true, countByDeno: false, drawerAssig: true, mainDiv: true, voidDep: true, safeIntTran: 'Safe To Drawer', safeToTran: '', safeAssDiv: false, safeAssExDiv: true, safeHisDiv: false, drawerName : '', btnOK: ''};
            this.handleChange = this.handleChange.bind(this);
      }

      handleChange = (e) => {
            this.setState({ [e.target.name]: e.target.value });
            //this.setState({safeToTran: e.target.value});
      }

      componentWillMount() {
            //this.setState({ dflName: this.props.info.flName, drawerName : this.props.info.name });
            this.setState({dflName: this.props.tranVal});
      }

      componentDidMount() {
            //this.setState({ dflName: this.props.info.flName });
            this.setState({dflName: this.props.tranVal});
            if (this.state.dflName === "Manual Deposit Slip" || this.state.dflName === "Check Cash In" || this.state.dflName === "Assign") {
                  this.setState({ countByDeno: true });
            }
      }

      finBtnFun(str) {
            if (str === '1') {
                  this.setState({ plsDiv: false, mainDiv: false, despVer: true });
            }
            else {
                  this.setState({ conMsg: str, plsDiv: true, mainDiv: false, despVer: false, hisDiv: false, safeHisDiv: false, penHisDiv: false , btnOK : <button type="button"  onClick={()=>{this.props.drClose('false')}}>Ok</button>});
            }

      }
      exitCashMgmt = () => {
            window.$(".close-tab1").click();
            window.$("#home").addClass('active in');
      }
      hisBtnFun(str) {
            if (str === "1") {
                  this.setState({ plsDiv: false, mainDiv: true, voidDep: true, despVer: false, hisDiv: false, safeHisDiv: false, penHisDiv: false });
            } else if (str === "2") {
                  this.setState({ plsDiv: false, mainDiv: false, voidDep: true, despVer: false, hisDiv: true });
            } else if (str === "3") {
                  this.setState({ plsDiv: false, mainDiv: false, voidDep: true, despVer: false, hisDiv: false });
            }
            else {
                  this.setState({ plsDiv: false, mainDiv: false, voidDep: false, despVer: false });
            }

      }
      SafeFun = () => {
            this.setState({ safeAssDiv: true, safeAssExDiv: false, countByDeno: false });
      }

      safeHisFun(str) {
            if (str === 'Receving') {
                  this.setState({ mainDiv: false, safeHisDiv: true, recHisDiv: true });
            } else if (str === "2") {
                  this.setState({ mainDiv: false, safeHisDiv: false, penHisDiv: true });
            } else {
                  this.setState({ mainDiv: false, safeHisDiv: true, recHisDiv: false });
            }

      }
	  drClose = () =>{
		this.props.drClose('false')
	  }
      render() {

            let dList = '';
            let dDiv = '';
            let dBtn = '';

            if (this.state.dflName === "dAssign") {
                  dList = <h2>Drawer Assignment <span onClick={()=>{this.props.drClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>                 
                  dDiv = <div className="row">
                     <div className="col-sm-6">
                        <table border="0" className="noBorder noStripe col-table-4 form-group">                
                        <tbody>
                        <tr>
                              <td>Drawer Nbr</td>
                              <td>15691</td>
                              <td>Employee Name </td>
                              <td>
                              <select name="empName" >
                                    <option value="Thomas Parker"> Feb Feb </option>
                              </select>
                              </td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
            dBtn = <div className="row">
                     <div className="col-sm-6">
                        <table width="100%" border="0" className="noBorder">
                        <tbody>
                        <tr>
                        <td>Opening Balance $</td>
                        <td> 
                        <input type="text" name="" placeholder="" />
                        </td>
                        </tr>
                        </tbody>
                        </table>
                        &nbsp;
                      </div>  
                      <div className="col-sm-12 text-center form-group">
                         <button type="button" onClick={() => {this.finBtnFun("Drawer Assigned ")}}>Finish Assign</button>
                         </div>
                      </div>  
            } else if (this.state.dflName === "dBalance") {
                  dList = <h2>Drawer Balance <span onClick={()=>{this.props.drClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
                  dDiv = <div className="row">
                     <div className="col-sm-6">
                        <table border="0" className="noBorder noStripe col-table-4 nth-evenColor form-group">                
                        <tbody>
                              <tr><td>Drawer Nbr</td>
                              <td>209</td>
                              <td>Opening Balance</td>
                              <td>$0.00</td></tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                  dBtn = <div className="row">
                     <div className="col-sm-12">
                     <table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
                        <tbody>
                        <tr>
                        <td>Cash Balance $ <br/>
                              <input type="text" name="" placeholder="" />
                        </td>                        
                        <td> CC/MO Balance <br/><input type="text" name="" placeholder="" /></td>                        
                        <td> Check Balance <br/><input type="text" name="" placeholder="" /></td>
                        <td valign="top">Date/time <br/>02/04/2021 04:38</td>
                        </tr>
                        </tbody>
                        </table>                        
                      </div>  
                        <div className="col-sm-12 text-center form-group">
                         <button type="button" onClick={() => {this.finBtnFun("Drawer Balance")}}>Finish Drawer Balance</button>
                         </div>
                      </div>
            } else if (this.state.dflName === "dDe-Assign") {
                  dList = <h2>Drawer De-Assignment <span onClick={()=>{this.props.drClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
                  dDiv = <div className="row">
                     <div className="col-sm-6">
                        <table border="0" className="noBorder noStripe col-table-4 nth-evenColor form-group">
                        <tbody>
                        <tr>
                              <td>Employee Name</td>
                              <td>Feb Feb</td>
                              <td>Opening Balance</td>
                              <td>$0.00</td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
            dBtn = <div className="row">
			<div className="col-sm-12">
                  <table className="noBorder col-sm-4 form-group" width="100%" border="0">
                  <tbody><tr><td>Current Cash Balance</td>
                  <td>
                  <input type="text" name="" placeholder="" /></td>
                  </tr>
                  </tbody>
                  </table>
				  <div className="clearfix"></div>
                  <div className="col-sm-6">                                
                  <div className="innerBlockContainer">
                  <h2> Current Check Balance</h2> 
                  <table width="100%" border="0" className="col-table-2 defaultGrid"> 
                  <thead> 
                  <tr>                  
                  <th align="center"> Check Nbr</th>
                  <th align="center"> Amt</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td align="center">Total Check Amt</td>
                  <td align="center">$0.00</td>
                  </tr>
                  </tbody>
                   </table>
                  </div>
                  </div>
                  <div className="col-sm-6">                                
                  <div className="innerBlockContainer">
                  <h2> Current CC/MO Balance </h2> 
                  <table width="100%" border="0" className="col-table-2 defaultGrid">                  
                  <tr>                  
                  <th align="center"> CC/MO Nbr</th>
                  <th align="center"> Amt</th>
                  </tr>
                  <tr>
                  <td align="center">7778</td>
                  <td align="right">$10.00</td>
                  </tr>
                  <tr>
                  <td align="center">2783873</td>
                  <td align="right">$1200.00</td>
                  </tr>
                  <tr>
                  <td align="center">Total CC/MO Amt</td>
                  <td align="right">$1,210.00</td>
                  </tr>
                  </table>
                  </div>
                  </div>
            </div>
                  <div className="col-sm-12 text-center form-group">
                   <button type="button" onClick={() => {this.finBtnFun("Drawer De-Assigned ")}}>Finish De-Assign</button>
                   </div>
	      </div>

            } else if (this.state.dflName === "Cash-In") {
                  dList = <h2>Safe {this.state.dflName} <span onClick={()=>{this.props.drClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
                  dBtn = <div className="row">
                        <div className="col-sm-4">
                              <table width="100%" border="0" className="noBorder noStripe ">
                                    <tbody>
                                          <tr>
                                                <td>Cash Balance $</td>
                                                <td>
                                                      <input type="text" name="" placeholder="" />
                                                </td>
                                          </tr>
                                    </tbody>
                              </table>
                        </div>

                        <div className="col-sm-12 text-center form-group">
                              <button type="button" onClick={() => { this.props.drClose('false') }}>Cancel</button>
                              <button type="button">History</button>
                              <button type="button" onClick={() => { this.finBtnFun(this.state.dflName) }}>Finish Cash In</button>
                        </div>
                  </div>

            } else if (this.state.dflName === "Assign") {
                  { this.state.safeAssExDiv ? dDiv = <SafeAssign SafeFun={this.SafeFun} drClose={this.drClose}/> : null }
                  { this.state.safeAssDiv ? dList = <h2>Safe Assignment <span onClick={()=>{this.props.drClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2> : null }

                  {
                        this.state.safeAssDiv ? dDiv = <div className="row">
                              <div className="col-sm-6">
                                    <table border="0" className="noBorder noStripe col-table-2 cellGap">
                                          <tbody>
                                                <tr>
                                                      <td>Employee Name <br />

                                                            <select name="empName" >
                                                                  <option value="Thomas Parker"> Thomas Parker </option>
                                                            </select>
                                                      </td>
                                                      <td>Employee PIN# <br />
                                                            <input type="text" name="" placeholder="" /></td>
                                                </tr>
                                          </tbody>
                                    </table>
                              </div>
                        </div> : null
                  }
                  {
                        this.state.safeAssDiv ? dBtn = <div className="row">
                              <div className="col-sm-12">
                                    <table width="100%" border="0" className="noBorder noStripe col-table-3 cellGap">
                                          <tbody>
                                                <tr>
                                                      <td>Cash Balance $ <br />
                                                            <input type="text" name="" placeholder="" />
                                                      </td>

                                                      <td> CC/MO Balance <br /><input type="text" name="" value="$0.00" disabled /></td>

                                                      <td> Check Balance <br /><input type="text" name="" value="$0.00" disabled /></td>
                                                </tr>
                                          </tbody>
                                    </table>

                              </div>
                              <div className="col-sm-12 text-center form-group">
                                    <button type="button" onClick={() => { this.finBtnFun("3") }}>Finish Assign</button>
                              </div>
                        </div> : null
                  }

            } else if (this.state.dflName === "Balance") {
                  dList = <h2>Safe {this.state.dflName} <span onClick={()=>{this.props.drClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>

                  dBtn = <div className="row">
                        <div className="col-sm-12">
                              <table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
                                    <tbody>
                                          <tr>
                                                <td>Cash Balance $ <br />
                                                      <input type="text" name="" placeholder="" /></td>

                                                <td> CC/MO Balance $<br />
                                                      <input type="text" name="" placeholder="" /></td>

                                                <td> Check Balance $<br />
                                                      <input type="text" name="" placeholder="" /></td>
                                                <td valign="top">Date/time <br />01/06/2021 02:00</td>
                                          </tr>
                                    </tbody>
                              </table>
                        </div>

                        <div className="col-sm-12 text-center form-group">
                              <button type="button" onClick={() => { this.finBtnFun("Safe "+this.state.dflName) }}>Finish Balance Safe</button>
                        </div>
                  </div>

            } else if (this.state.dflName === "De-Assign") {
                  dList = <h2>Safe {this.state.dflName} <span onClick={()=>{this.props.drClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
                  dDiv = <div className="row">

                  </div>
                  dBtn = <div className="row">
                        <div className="col-sm-12">
                              <table className="noBorder col-sm-4 form-group" width="100%" border="0">
                                    <tbody><tr><td>Current Cash Balance</td>
                                          <td>
                                                <input type="text" name="" placeholder="" /></td>
                                    </tr>
                                    </tbody>
                              </table>
                              <div className="clearfix"></div>
                              <div className="col-sm-6">
                                    <div className="innerBlockContainer">
                                          <h2> Current Check Balance</h2>
                                          <table width="100%" border="0" className="col-table-2 defaultGrid">
                                                <thead>
                                                      <tr>
                                                            <th align="center"> Check Nbr</th>
                                                            <th align="center"> Amt</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      <tr>
                                                            <td align="center">Total Check Amt</td>
                                                            <td align="center">$0.00</td>
                                                      </tr>
                                                </tbody>
                                          </table>
                                    </div>
                              </div>
                              <div className="col-sm-6">
                                    <div className="innerBlockContainer">
                                          <h2> Current CC/MO Balance </h2>
                                          <table width="100%" border="0" className="col-table-2 defaultGrid">
                                                <tr>
                                                      <th align="center"> CC/MO Nbr</th>
                                                      <th align="center"> Amt</th>
                                                </tr>
                                                <tr>
                                                      <td align="center">Total CC/MO Amt</td>
                                                      <td align="center">$0.00</td>
                                                </tr>
                                          </table>
                                    </div>
                              </div>
                        </div>
                        <div className="col-sm-12 text-center form-group">
                              <button type="button" onClick={() => { this.finBtnFun("Safe "+this.state.dflName) }}>Finish De-Assign</button>
                        </div>
                  </div>

            } else if (this.state.dflName === "Internal Transfer") {
                  dList = <h2>{this.state.dflName} <span onClick={()=>{this.props.drClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
                  dDiv = <div className="row">
                        <div className="col-sm-12">
                              <table border="0" className="noBorder noStripe col-table-4 cellGap">
                                    <tbody>
                                          <tr><td>Action <br />
                                                <select id="safeIntTran" name="safeIntTran" value={this.state.safeIntTran} onChange={this.handleChange}>
                                                      <option value="Safe To Drawer"> Safe To Drawer15691 </option>
                                                      <option value="Drawer To Safe"> Drawer 209 To Safe </option>
                                                </select></td>
                                                <td>Cash Amt <br />
                                                      <input type="text" name="" placeholder="" /></td>
                                                <td></td><td></td>
                                          </tr>
                                    </tbody>
                              </table>
                        </div>
                  </div>


                  dBtn = <div>
                        <div id="safeIntTranDiv" className=" hide">
                              <div className="col-sm-6">
                                    <div className="innerBlockContainer contact-infoscroll">
                                          <h2>Check Amt</h2>
                                          <table>
                                                <thead>
                                                      <tr>
                                                            <th>Check Nbr</th>
                                                            <th>Amt</th>
                                                            <th>Select</th>
                                                      </tr>
                                                </thead>
                                                <tbody><tr><td> &nbsp; </td><td> &nbsp; </td><td> &nbsp; </td></tr></tbody>
                                          </table>
                                    </div>
                              </div>
                              <div className="col-sm-6">
                                    <div className="innerBlockContainer contact-infoscroll">
                                          <h2>CC/MO Amt</h2>
                                          <table>
                                                <thead>
                                                      <tr>
                                                            <th>CC/MO Nbr</th>
                                                            <th>Amt</th>
                                                            <th>Select</th>
                                                      </tr>
                                                </thead>
                                                <tbody><tr><td align="center"> 45645 </td><td align="right"> $15.00  </td><td align="center"> <input type="checkbox"/> </td></tr>
                                                <tr><td align="center"> 3454 </td><td align="right"> $10.00  </td><td align="center"> <input type="checkbox"/> </td></tr></tbody>
                                          </table>
                                    </div>
                              </div>
                        </div>

                        <div className="col-sm-12 text-center form-group">
                              <button type="button" onClick={() => { this.props.drClose('false') }}>Cancel</button>
                              <button type="button" onClick={() => { this.finBtnFun(this.state.safeIntTran+" Transfer ") }}>Finish Internal Transfer</button>
                        </div>
                  </div>
            } else if (this.state.dflName === "Deposit") {
                  dList = <h2>Safe {this.state.dflName} <span onClick={()=>{this.props.drClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
                  dDiv =<div className="col-sm-12">
                              <div className="innerBlockContainer">
                                    <h2>Mid-Day Deposit </h2>
                                    <div className="col-sm-6">
                                          <table border="0" className="noBorder noStripe cellGap">
                                                <tbody>
                                                      <tr><td> Deposit Bank </td>
                                                            <td>
                                                                  <select name="safeToDrawer" >
                                                                        <option value="BOKF.NA.019900410"> BOKF.NA.019900410 </option>
                                                                  </select>
                                                            </td>
                                                      </tr>
                                                </tbody>
                                          </table>
                                    </div>
                              </div>
                        </div>
                  dBtn = <div className="row">
                        <div className="col-sm-6">
                              <table width="100%" border="0" className="noBorder noStripe col-table-4 cellGap">
                                    <tbody>
                                          <tr>
                                                <td>Cash $ <br />
                                                      <input type="text" name="" placeholder="" value="0.00" disabled />
                                                </td>

                                                <td> Bag Nbr <br /> <input type="text" name="" placeholder="" value="" /> </td>

                                          </tr>
                                    </tbody>
                              </table>
                        </div>
                        <div className="col-sm-12 text-center form-group">
                              <button type="button" onClick={() => { this.props.drClose('false') }}>Cancel</button>
                              <button type="button" onClick={() => { this.hisBtnFun() }}>History</button>
                              <button type="button" onClick={() => { this.finBtnFun("1") }}>Finish Deposit</button>
                        </div>
                  </div>
            } else if (this.state.dflName === "Store To Store Transfer") {
                  dList = <h2>Store to Store Transfer <span onClick={()=>{this.props.drClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
                  dDiv = <div className="row">
                        <div className="col-sm-3">
                              <table border="0" className="noBorder noStripe col-table-3 cellGap">
                                    <tbody>
                                          <tr><td valign="top">Action <br />
                                                <select name="safeToTran" value={this.state.safeToTran} onChange={this.handleChange}>
                                                      <option value="Sending"> Sending </option>
                                                      <option value="Receving"> Receiving </option>
                                                      <option value="Pending"> Pending </option>
                                                </select></td>
                                          </tr>
                                    </tbody>
                              </table>
                        </div>
                        <div className="col-sm-6">
                              <table border="0" className="noBorder noStripe col-table-2 cellGap hide form-group" id="receivingID">
                                    <tbody>
                                          <tr>
                                                <td>Store Nbr <br />
                                                      <select id="storeNbr" name="storeNbr">
                                                            <option value="1331"> 1331 </option>
                                                      </select></td>
                                                <td>Cash Amt$ <br />
                                                      <select id="cashAmt" name="cashAmt">
                                                            <option value="1"> 1 </option>
                                                      </select></td>
                                          </tr>
                                    </tbody>
                              </table>
                        </div>
                        <div className="col-sm-12">
                              <table border="0" className="noStripe hide form-group" id="pendingID1">
                                    <br />
                                    <tbody>
                                          <tr>
                                                <th>Trans Code</th>
                                                <th>To Store Code</th>
                                                <th>Trans Amt</th>
                                                <th>Trans Date</th>
                                          </tr>
                                          <tr>
                                                <td align="center">5039463</td>
                                                <td align="center">1334</td>
                                                <td align="right">1</td>
                                                <td align="center">02/09/2021</td>
                                          </tr>
                                    </tbody>
                              </table>
                        </div>
                  </div>

                  dBtn = <div className="row">
                        <div className="col-sm-4">
                              <table width="100%" border="0" className="noBorder noStripe" id="receivingID2">
                                    <tbody>
                                          <tr>
                                                <td>Cash $</td>
                                                <td>
                                                      <input type="text" name="" placeholder="" value="" />
                                                </td>
                                          </tr>
                                    </tbody>
                              </table>
                        </div>
                        <div className="col-sm-12 text-center form-group" id="receivingID3">
                              <button type="button" onClick={() => { this.props.drClose('false') }}>Cancel</button>
                              <button type="button" onClick={() => { this.safeHisFun(this.state.safeToTran) }}> History</button>
                              <button type="button" onClick={() => { this.finBtnFun('Store to Store Transfer') }}>Finish Store to Store Transfer</button>
                        </div>

                        <div className="col-sm-12 text-center form-group hide" id="pendingID">
                              <button type="button" onClick={() => { this.props.drClose('false') }}>Cancel</button>
                              <button type="button" onClick={() => { this.safeHisFun("2") }}> History</button>
                        </div>
                  </div>
            } else if (this.state.dflName === "Manual Deposit Slip") {
                  dList = <h2> Manual Deposit Slip <span onClick={()=>{this.props.drClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
                  dDiv = <div className="col-sm-12 text-center form-group">
                        <button type="button">Print Deposit Slip</button>
                  </div>

            } else if (this.state.dflName === "Check Cash In") {
                  dList = <h2> Print Replenishment Check <span onClick={()=>{this.props.drClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
                  dDiv = <div className="row">
                        <div className="col-sm-6">
                              <table border="0" className="noBorder col-table-2 noStripe cellGap">
                                    <tbody>
                                          <tr>
                                                <td>Employee Name <br /><select name="" >
                                                      <option value="Feb Feb"> Feb Feb </option>
                                                </select></td>
                                                <td>Please enter the amount for the Check to be printed  $ <br />
                                                      <input type="text" name="" placeholder="" value="$0.00" /></td>
                                          </tr>
                                    </tbody>
                              </table>
                        </div>

                        <div className="col-sm-12 text-center">
                              <button type="button" onClick={() => { this.props.drClose('false') }}>Cancel</button>
                              <button type="button" onClick={() => { this.hisBtnFun('2') }}>History</button>
                              <button type="button">Print Check</button>
                        </div>
                  </div>

            }


            return (

                  <div className="height100">
                        <div className="collectionContainer">
                              {this.state.mainDiv ? <div className="collectionSubContainer">
                                    <div className="col-sm-12 form-group">
                                          <div className="innerBlockContainer">
                                                <div hidden={!this.state.hideHeader}>
                                                      {dList}{dDiv}
                                                </div>
                                                <div hidden={this.state.countByDeno}>
                                                      <div id="pendingID3" className="pending"><Countbydenomination /></div>
                                                      <div hidden={!this.state.hideHeader}>
                                                            {dBtn}
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                                    : null
                              }
                              {this.state.plsDiv ?
                                    <div className="col-sm-12">
                                          <div className="innerBlockContainer">
                                                <h2>Confirmation</h2>
                                                <div className="text-center">
                                                      {(this.state.conMsg === "2") ? <p> Transcation voided successfully. <br/><br/> {this.state.btnOK} </p> : <div>{(this.state.conMsg === "3") ? <p>Safe Assigned Successfully. <br/><br/> {this.state.btnOK} <button type="button" >Print Credit Balance Report</button> </p> : <div>{(this.state.conMsg === "Deposit") ? <p> Deposit Completed Successfully. <br/><br/> {this.state.btnOK} <button type="button" > Reprint</button></p>: <p> {this.state.conMsg + " Completed Successfully."} <br/><br/> {this.state.btnOK} </p>}</div> } </div>}
                                                      
                                                </div>
                                          </div>
                                    </div> : <div className="col-sm-12 form-group" hidden={this.state.voidDep}>
                                          <div className="innerBlockContainer">
                                                <h2>Void Deposit</h2>
                                                <table width="100%" border="0" className="col-table-6">
                                                      <tbody>
                                                            <tr>
                                                                  <th>Deposit Date/Time</th>
                                                                  <th>Total Cash Amt</th>
                                                                  <th>Total Check Amt</th>
                                                                  <th>Total CC/MO Amt</th>
                                                                  <th>Grand Total</th>
                                                                  <th>Select</th>
                                                            </tr>
                                                      </tbody>
                                                </table>
                        &nbsp;&nbsp;
                        <div className="col-sm-12 text-center">
                                                      <button type="button" onClick={() => { this.hisBtnFun("1") }}>Cancel</button>
                                                      <button type="button" onClick={() => { this.finBtnFun("Void Deposit") }}>Finish Void Deposit</button>
                                                </div>
                                          </div>
                                    </div>}
                              {this.state.despVer ? <div className="col-sm-12">
                                    <div className="innerBlockContainer">
                                          <h2> Deposit Verification </h2>
                                          <table width="100%" className="noBorder noStripe col-table-6 nth-evenColor">
                                                <tbody>
                                                      <tr>
                                                            <td>Depositing into </td>
                                                            <td>FIRST HORIZON BANK</td>
                                                            <td>Account#</td>
                                                            <td>183868308</td>
                                                            <td>Cash Deposit</td>
                                                            <td>$100.00</td>

                                                      </tr>
                                                      <tr><td>Total Check Amt</td>
                                                            <td>$0.00</td>
                                                            <td>Grand Total </td>
                                                            <td>$ 100.00</td>
                                                      </tr>
                                                </tbody>
                                          </table>
                        &nbsp;&nbsp;
                        <div className="col-sm-12 text-center">
                                                <button type="button" onClick={() => { this.hisBtnFun("1") }}>Back</button>
                                                <button type="button" onClick={() => { this.finBtnFun("Deposit") }}>Finish Void Deposit</button>
                                          </div>
                                    </div>
                              </div> : null}
                              {this.state.hisDiv ? <div className="col-sm-12 form-group">
                                    <div className="innerBlockContainer">
                                          <h2>Replenishment Check Print History Details</h2>
                                          <table width="100%" border="0" className="col-table-6">
                                                <tbody>
                                                      <tr>
                                                            <th>Select</th>
                                                            <th>Trans Nbr</th>
                                                            <th>Print By</th>
                                                            <th>Printed on Date/Time</th>
                                                            <th>Total Check Amt</th>
                                                            <th>Printed Check Nbr</th>
                                                      </tr>
                                                      <tr>
                                                            <td align="center"><input type="radio" /></td>
                                                            <td align="center">5039460</td>
                                                            <td align="center">FEBEMP</td>
                                                            <td align="center">02/09/2021 05:59</td>
                                                            <td align="right">$2000.00</td>
                                                            <td align="center">1331900001</td>
                                                      </tr>
                                                </tbody>
                                          </table>
                        &nbsp;&nbsp;
                        <div className="col-sm-12 text-center">
                                                <button type="button" onClick={() => { this.hisBtnFun("1") }}>Cancel</button>
                                                <button type="button" onClick={() => { this.finBtnFun("2") }}>Void </button>
                                          </div>
                                    </div>
                              </div> : null}

                              {this.state.safeHisDiv ? <div className="col-sm-12 form-group">
                                    <div className="innerBlockContainer">
                                          <h2>Void Store to Store Transfer</h2>
                                          <table width="100%" border="0" className="col-table-6">
                                                <tbody>
                                                      <tr>
                                                            <th>Date/Time</th>
                                                            <th>Other Loc Nbr</th>
                                                            <th>Type</th>
                                                            <th>Amt</th>
                                                            <th>Voided?</th>
                                                            <th>Received?</th>
                                                            <th>Select</th>
                                                      </tr>
                                                      {this.state.recHisDiv ? <tr>
                                                            <td align="center">02/09/2021 05:49</td>
                                                            <td align="center">1334</td>
                                                            <td align="center">Receive</td>
                                                            <td align="right">$2.00</td>
                                                            <td align="center">N</td>
                                                            <td align="center" className="error">Y</td>
                                                            <td align="center"><input type="radio" /></td>
                                                      </tr> : null}
                                                      {this.state.recHisDiv ? <tr>
                                                            <td align="center" className="error">02/09/2021 05:35</td>
                                                            <td align="center" className="error">1334</td>
                                                            <td align="center" className="error">Send</td>
                                                            <td align="right" className="error">$1.00</td>
                                                            <td align="center" className="error">Y</td>
                                                            <td align="center">N</td>
                                                            <td align="center"><input type="radio" /></td>
                                                      </tr> : <tr>
                                                                  <td align="center">08/17/2020 05:39</td>
                                                                  <td align="center">1331</td>
                                                                  <td align="center">Send</td>
                                                                  <td align="right">$-10.00</td>
                                                                  <td align="center">N</td>
                                                                  <td align="center">N</td>
                                                                  <td align="center"><input type="radio" /></td>
                                                            </tr>}

                                                </tbody>
                                          </table>
                        &nbsp;&nbsp;
                        <div className="col-sm-12 text-center">
                                                <button type="button" onClick={() => { this.hisBtnFun("1") }}>Cancel</button>
                                                <button type="button" onClick={() => { this.finBtnFun("2") }}>Finish Void Store to Store Transfer</button>
                                          </div>
                                    </div>
                              </div> : null}

                              {this.state.penHisDiv ? <div className="col-sm-12 form-group">
                                    <div className="innerBlockContainer">
                                          <h2>Void Store to Store Transfer</h2>
                                          <table width="100%" border="0" className="col-table-6">
                                                <tbody>
                                                      <tr>
                                                            <th>Date/Time</th>
                                                            <th>Other Loc Nbr</th>
                                                            <th>Type</th>
                                                            <th>Amt</th>
                                                            <th>Voided?</th>
                                                            <th>Received?</th>
                                                            <th>Select</th>
                                                      </tr>
                                                      <tr>
                                                            <td align="center">02/09/2021 05:11</td>
                                                            <td align="center">1334</td>
                                                            <td align="center">Send</td>
                                                            <td align="right">$-1.00</td>
                                                            <td align="center">N</td>
                                                            <td align="center">N</td>
                                                            <td align="center"><input type="radio" /></td>
                                                      </tr>
                                                </tbody>
                                          </table>
                        &nbsp;&nbsp;
                        <div className="col-sm-12 text-center">
                                                <button type="button" onClick={() => { this.hisBtnFun("1") }}>Cancel</button>
                                                <button type="button" onClick={() => { this.finBtnFun("2") }}>Finish Void Store to Store Transfer</button>
                                          </div>
                                    </div>
                              </div> : null}


                        </div>
                  </div>



            );
      }
}
