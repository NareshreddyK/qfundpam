import React, { Component } from "react";

export default class SelectLoanTerm extends Component {

  constructor (props) {
    super(props);
    this.state = {ilpLOpt: true, tlpLOpt: true, amScr: true};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  menus(str){
    this.refs.Popup.dispBlk(str);
  }

  componentWillMount(){
    if(this.props.ltVal == "ILP"){
        this.setState({ilpLOpt: false, tlpLOpt: true, amScr: true});
    } else if(this.props.ltVal == "TLP"){
        this.setState({ilpLOpt: true, tlpLOpt: false, amScr: true});
    } else if(this.props.ltVal == "AMOR"){
        this.setState({ilpLOpt: true, tlpLOpt: true, amScr: false});
    }
  }
  
  render(){
    
    let lTerm = [];
    let lOpt = [];
    let amSchd = [];

    let am = [{instNbr: '1', agrStartDate: '01/04/2021', agrEndDate: '02/03/2021', schdBal: '300.00', chrgDue: '56.70', renDate: '02/03/2021', renChrg: '56.70', payOffBal: '356.70'}, {instNbr: '2', agrStartDate: '02/03/2021', agrEndDate: '03/05/2021', schdBal: '300.00', chrgDue: '56.70', renDate: '03/05/2021', renChrg: '56.70', payOffBal: '356.70'},{instNbr: '3', agrStartDate: '03/05/2021', agrEndDate: '04/04/2021', schdBal: '300.00', chrgDue: '56.70', renDate: '04/04/2021', renChrg: '56.70', payOffBal: '356.70'},{instNbr: '4', agrStartDate: '04/04/2021', agrEndDate: '05/04/2021', schdBal: '285.00', chrgDue: '56.70', renDate: '05/04/2021', renChrg: '71.70', payOffBal: '356.70'},{instNbr: '5', agrStartDate: '05/04/2021', agrEndDate: '06/03/2021', schdBal: '270.00', chrgDue: '53.86', renDate: '06/03/2021', renChrg: '68.86', payOffBal: '338.86'},{instNbr: '6', agrStartDate: '06/03/2021', agrEndDate: '07/03/2021', schdBal: '255.00', chrgDue: '51.03', renDate: '07/03/2021', renChrg: '66.03', payOffBal: '321.03'},{instNbr: '7', agrStartDate: '07/03/2021', agrEndDate: '08/02/2021', schdBal: '240.00', chrgDue: '48.19', renDate: '08/02/2021', renChrg: '63.19', payOffBal: '303.19'},{instNbr: '8', agrStartDate: '08/02/2021', agrEndDate: '09/01/2021', schdBal: '225.00', chrgDue: '45.36', renDate: '09/01/2021', renChrg: '60.36', payOffBal: '285.36'},{instNbr: '9', agrStartDate: '09/01/2021', agrEndDate: '10/01/2021', schdBal: '210.00', chrgDue: '42.52', renDate: '10/01/2021', renChrg: '57.52', payOffBal: '267.52'},{instNbr: '10', agrStartDate: '10/01/2021', agrEndDate: '10/31/2021', schdBal: '195.00', chrgDue: '39.69', renDate: '10/31/2021', renChrg: '54.69', payOffBal: '249.69'},{instNbr: '11', agrStartDate: '10/31/2021', agrEndDate: '11/30/2021', schdBal: '180.00', chrgDue: '36.85', renDate: '11/30/2021', renChrg: '51.85', payOffBal: '231.85'},{instNbr: '12', agrStartDate: '11/30/2021', agrEndDate: '12/30/2021', schdBal: '165.00', chrgDue: '34.02', renDate: '12/30/2021', renChrg: '49.02', payOffBal: '214.02'},{instNbr: '13', agrStartDate: '12/30/2021', agrEndDate: '01/29/2022', schdBal: '150.00', chrgDue: '31.18', renDate: '01/29/2022', renChrg: '46.18', payOffBal: '196.18'},{instNbr: '14', agrStartDate: '01/29/2022', agrEndDate: '02/28/2022', schdBal: '135.00', chrgDue: '28.35', renDate: '02/28/2022', renChrg: '43.35', payOffBal: '178.35'},{instNbr: '15', agrStartDate: '02/28/2022', agrEndDate: '03/30/2022', schdBal: '120.00', chrgDue: '25.51', renDate: '03/30/2022', renChrg: '40.51', payOffBal: '160.51'},{instNbr: '16', agrStartDate: '03/30/2022', agrEndDate: '04/29/2022', schdBal: '105.00', chrgDue: '22.68', renDate: '04/29/2022', renChrg: '37.68', payOffBal: '142.68'},{instNbr: '17', agrStartDate: '04/29/2022', agrEndDate: '05/29/2022', schdBal: '90.00', chrgDue: '19.84', renDate: '05/29/2022', renChrg: '34.84', payOffBal: '124.84'},{instNbr: '18', agrStartDate: '05/29/2022', agrEndDate: '06/28/2022', schdBal: '75.00', chrgDue: '17.01', renDate: '06/28/2022', renChrg: '32.01', payOffBal: '107.01'},{instNbr: '19', agrStartDate: '06/28/2022', agrEndDate: '07/28/2022', schdBal: '60.00', chrgDue: '14.17', renDate: '07/28/2022', renChrg: '29.17', payOffBal: '89.17'},{instNbr: '20', agrStartDate: '07/28/2022', agrEndDate: '08/27/2022', schdBal: '45.00', chrgDue: '11.34', renDate: '08/27/2022', renChrg: '26.34', payOffBal: '71.34'},{instNbr: '21', agrStartDate: '08/27/2022', agrEndDate: '09/26/2022', schdBal: '30.00', chrgDue: '8.50', renDate: '09/26/2022', renChrg: '23.50', payOffBal: '53.50'},{instNbr: '22', agrStartDate: '09/26/2022', agrEndDate: '10/26/2022', schdBal: '15.00', chrgDue: '5.67', renDate: '10/26/2022', renChrg: '20.67', payOffBal: '35.67'},{instNbr: '23', agrStartDate: '10/26/2022', agrEndDate: '11/25/2022', schdBal: '0.00', chrgDue: '2.83', renDate: '11/25/2022', renChrg: '17.83', payOffBal: '17.83'}]

    if(this.props.ltVal == "ILP"){
        
        lTerm.push(<tr><td className="bgHighlt"> Maximum Approved Amount <br /><input type="text" value="2500.00" /></td><td className="bgHighlt"> Customer Requested Loan Amt <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/><input type="text" name="cardNbr" value="2500.00" /></td><td className="bgHighlt"> Excepted Payment Method <select name="exPaymentMethod"><option value="ACH">ACH</option><option value="CHK">Check</option><option value="DC">Debit Card</option></select></td></tr>);

        lOpt.push(<tr><td align="center">5</td><td align="center">Monthly</td><td align="right">9.95</td><td align="right">234.66</td><td align="right"> $ 758.16 </td><td align="center">01/13/2021</td><td align="right"> $ 75.76 </td> <td align="right"> $ 0.00 </td><td align="right"> $ 1215.00 </td><td align="right"> $ 3790.76 </td><td align="center"> ACH </td><td align="center"> <button type="button" onClick={() => {this.props.selectCallback()}}>Select</button></td></tr>);

    } else if(this.props.ltVal == "TLP"){
        
        lTerm.push(<tr><td className="bgHighlt"> Maximum Guaranteed Loan Amount <br /><input type="text" value="300.00" /></td><td className="bgHighlt"> Customer Requested Loan Amt <span class="text-danger"><i class="fa fa-asterisk"></i></span><br/><input type="text" name="cardNbr" value="300.00" /></td><td className="bgHighlt"> &nbsp; </td></tr>);

       lOpt.push(<tr><td align="center">1 Months</td><td align="center">02/03/2021</td><td align="center"> 30 </td><td align="center">1</td><td align="right"> $ 356.70 </td> <td align="right"> $ 56.70 </td><td align="right"> $ 0.00 </td><td align="right"> $ 720.00 </td><td align="center"> Cash </td><td align="right"> 2.00 % </td><td align="right"> 16.90 % </td><td align="center"> <button type="button" onClick={() => {this.props.selectCallback()}}>Select</button></td></tr>);

    } else if(this.props.ltVal == "AMOR"){
        
        for(let i=0; i<=am.length-1; i++){
            amSchd.push(<tr><td align="center">{am[i].instNbr}</td><td align="center">{am[i].agrStartDate}</td><td align="center">{am[i].agrEndDate}</td><td align="center">{am[i].schdBal}</td><td align="center">{am[i].chrgDue}</td><td align="center">{am[i].renDate}</td><td align="center">{am[i].renChrg}</td><td align="center">{am[i].payOffBal}</td></tr>);
        }

    }
    
	return (
        <div>
            <div hidden={this.state.ilpLOpt}>
           <div className="col-sm-8 col-sm-offset-2">
            <div className="innerBlockContainer">
                <h2> Select Loan Term </h2>
                <table width="100%" border="0" className="noBorder noStripe cellGap">
                    <tbody>                                         
                    {lTerm}
                    <tr>
                        <td colspan="3" className="text-center">
                            <button type="button"> Re-Calculate </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="col-sm-12 form-group">
        <div className="innerBlockContainer">
            <h2 className="text-center">Potential Loan Option-Estimates (Discussion Purposes Only)</h2>
            <div className="contact-infoscroll">
            <table width="100%">
                <thead>
                    <tr>
                        <th>Est.No. Of Payments</th>
                        <th>Frequency</th>
                        <th>Interest Rate</th>
                        <th>APR</th>
                        <th>Est. Payment Amt</th>
                        <th>Est. First Payment Date</th>
                        <th>Interset Charges</th>
                        <th>Orig Fee</th>
                        <th>Est. CSO Fee</th>
                        <th>Est. Total Of Payments</th>
                        <th>Excepted Payment Method</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {lOpt}
                </tbody>
            </table>
            </div>
            </div>
            </div>
            </div>


            <div hidden={this.state.tlpLOpt}>
           <div className="col-sm-8 col-sm-offset-2">
            <div className="innerBlockContainer">
                <h2> Select Loan Term </h2>
                <table width="100%" border="0" className="noBorder noStripe cellGap">
                    <tbody>                                         
                    {lTerm}
                    <tr>
                        <td colspan="3" className="text-center">
                            <button type="button"> Re-Calculate </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="col-sm-12 form-group">
        <div className="innerBlockContainer">
            <h2 className="text-center">Potential Loan Option-Estimates (Discussion Purposes Only)</h2>
            <div className="contact-infoscroll">
            <table width="100%">
                <thead>
                    <tr>
                        <th>Approx. Loan Term</th>
                        <th>Est. Payment Date</th>
                        <th>Est. Total Term Days</th>
                        <th>Est. No. of Payments</th>
                        <th>Est. Amt of Payment</th>
                        <th>Est. Charges</th>
                        <th>Est. CSO Fee</th>
                        <th>Est. Total Loan Amount</th>
                        <th>Collateral Type</th>
                        <th>Interest Rate</th>
                        <th>Fee Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {lOpt}
                </tbody>
            </table>
            </div>
            </div>
            </div>
            </div>

            <div hidden={this.state.amScr}>
        <div className="col-sm-12 form-group">
        <div className="innerBlockContainer">
            <h2>Amortization</h2>        
            <div className="contact-infoscroll">
            <table width="100%">
                <thead>
                    <tr>
                        <th>Inst No</th>
                        <th>Agr Start Date</th>
                        <th>Agr End Date</th>
                        <th>Schedule Balance</th>
                        <th>Charges Due</th>
                        <th>Renewal Date</th>
                        <th>Renewal Charges</th>
                        <th>Pay Off Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {amSchd}
                </tbody>
            </table>
            </div>
            </div>
            </div>
            <div class="col-sm-12 text-center">
                <button type="button"  onClick={() => {this.props.selectCallback()}}> Hide </button>
            </div>
            </div>

        </div>
	);
  } 
}