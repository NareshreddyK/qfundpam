import React, { Component } from "react";
import Newloaninfo from './Newloan/Newloaninfo';
import Ilploaninfo from './Newloan/Ilploaninfo';
import Tlploaninfo from './Newloan/Tlploaninfo';
import Loandetails from './Newloan/Loandetails';
import Usercredentials from './common/Usercredentials';
import Locloaninfo from './Newloan/Locloaninfo';
import PlsConfirm from './Newloan/PlsConfirm';
import ShareCustSummry from './Newloan/ShareCustSummary';
import VehicleDetails from './VehicleDetails';

export default class Loandecision extends Component {

  constructor (props) {
    super(props);
    this.state = {nlDiv: false, VDDiv: false, ldDiv: true, ilpDiv: false, tlpDiv: false, ldAlert: false, nlSsn: '', nlCustStat: '', nlName: '', nlAddress: '', nlCity: '', nlState: '', nlZip: '', message: '', ldBkCls: false, udDiv: false, epDiv: true, ldVal: '', ucVal: '', custDiv :false, crfmVal: ''};
    this.handleChange = this.handleChange.bind(this);
    this.lnInner = this.lnInner.bind(this);
    this.custSmry = this.custSmry.bind(this);
    this.prodBtn = this.prodBtn.bind(this);
	this.nlFunc = this.nlFunc.bind(this);
  }
  
  handleChange=(e)=>{
	this.setState({[e.target.name]: e.target.value});
  }

  lnInner(str){
    let radioValue = window.$("input[name='ldRadio']:checked").val();
    
	if(radioValue=="PDL"){	
        this.setState({nlDiv: true, ldDiv: false, ldAlert: false, udDiv: true, epDiv: false, VDDiv: false, ldVal: 'PDL', ucVal: 'PDL'});
	} else if (radioValue=="TLP"){
        this.setState({tlpDiv: true, ldDiv: false, ldAlert: false, udDiv: true, epDiv: false, VDDiv: false, ldVal: '', ucVal: ''});
	} else if (radioValue=="ILP"){
        this.setState({ilpDiv: true, ldDiv: false, ldAlert: false, udDiv: true, epDiv: false, VDDiv: false, ldVal: 'ILP', ucVal: 'ILP'});
	} else if (radioValue=="LOC"){
        this.setState({locDiv: true, PlsDiv:false, ilpDiv: false, ldDiv: false, ldAlert: false, udDiv: true, epDiv: false, VDDiv: false, ldVal: '', ucVal: 'LOC'});
	}else if (radioValue=="TLP2"){
        this.setState({VDDiv: true, locDiv: false, PlsDiv:false, ilpDiv: false, ldDiv: true, ldAlert: false, udDiv: false, epDiv: true, ldVal: '', ucVal: ''});
	} else {
        //alert("Please Select");
        this.setState({ldAlert: true});
	}
  }

  custSmry(str){
    if(str == "CustSummry") {
        this.setState({custDiv:true, nlDiv: false,tlpDiv: false,ilpDiv: false, ldDiv: false, ldAlert: false, VDDiv: false, elgDiv:false, fnDiv:false});
         window.$("#cdDiv input").attr("disabled", false);
         //window.$("#eligBtn").removeClass();
     } 
  }
  
  locFinishBtn(){
        this.setState({locDiv: false, PlsDiv:true});
	  }

  prodBtn(str){
    window.$("#loanDec table tbody tr.PDL").removeClass('prodPDL');
    window.$("#loanDec table tbody tr.ILP").removeClass('prodILP');
    window.$("#loanDec table tbody tr.TLP").removeClass('prodTLP');
    window.$("#loanDec table tbody tr.LOC").removeClass('prodLOC');

    if(str == "pdl"){
        window.$("#loanDec table tbody tr.PDL").addClass('prodPDL');
    }else if(str == "ilp"){
        window.$("#loanDec table tbody tr.ILP").addClass('prodILP');
    }else if(str == "tlp"){
        window.$("#loanDec table tbody tr.TLP").addClass('prodTLP');
    }else if(str == "loc"){
        window.$("#loanDec table tbody tr.LOC").addClass('prodLOC');
    }
  }

  loadData(str){
	if(str != ""){
		let valSplt = str.split('_');
		this.setState({nlSsn: valSplt[0], nlCustStat: 'Active', nlName: valSplt[1], nlAddress: valSplt[2], nlCity: valSplt[3], nlState: valSplt[4], nlZip: valSplt[5]});
	}else{
		this.setState({nlSsn: '', nlCustStat: '', nlName: '', nlAddress: '', nlCity: '', nlState: '', nlZip: ''});
	}
  }

  disp(str){
	if(str != undefined){
        this.setState({nlDiv: true, ldDiv: false, ldBkCls: true, nlSsn: str.custSsn, nlCustStat: str.custStatus, nlName: str.name, nlAddress: str.custAddress, nlCity: str.custCity, nlState: str.custState, nlZip: str.custZip});
        window.$("#nwLnBtn").attr("disabled", true)
	}
  }

  nlFunc = (nlData) => {
    
    window.$("#loanDec table tbody tr.PDL").removeClass('prodPDL');
    window.$("#loanDec table tbody tr.ILP").removeClass('prodILP');
    window.$("#loanDec table tbody tr.TLP").removeClass('prodTLP');
    window.$("#loanDec table tbody tr.LOC").removeClass('prodLOC');
    
    if(nlData == "PDL"){
        this.setState({nlDiv: false, ldDiv: true, udDiv: false, epDiv: true, ldVal: '', ucVal: ''});	
    }else if (nlData == "ILP"){
		this.setState({ilpDiv: false, ldDiv: true, udDiv: false, epDiv: true, ldVal: '', ucVal: ''});
	}else if(nlData == "TLP"){
		this.setState({tlpDiv: false, ldDiv: true, udDiv: false, epDiv: true, ldVal: '', ucVal: ''});
	}else if(nlData == "LOC"){
		this.setState({locDiv: false, ldDiv: true, udDiv: false, epDiv: true, ldVal: '', ucVal: ''});
    }else if(nlData == "draw"){
        this.setState({nlDiv: false, tlpDiv: false, locDiv: false, ldDiv: true, udDiv: false, epDiv: true, ldVal: '', ucVal: '', crfmVal: ''});
        /* window.$(".close-tab1").click();
        window.$("#SearchResult").addClass('active in');
        window.$("#searchMenu").addClass('active'); */
    }else if(nlData == "process"){
		this.setState({ldVal: 'TLP', ucVal: 'TLP'});
    }
    
    window.$("input[name=ldRadio]").attr("checked", false);
  }
  
  ucFunc = (str) => {
    //alert("ld..."+str);
    if(str == "LOC"){
        this.setState({locDiv: false, PlsDiv:true, crfmVal: 'LOC', ucVal: ''});	
    } else if(str == "TLP"){
        this.setState({tlpDiv: false, PlsDiv:true, crfmVal: 'TLP', ucVal: ''});
    } else if(str == "ILP"){
        this.setState({ilpDiv: false, PlsDiv:true, crfmVal: 'ILP', ucVal: ''});
    } else if(str == "PDL"){
        this.setState({nlDiv: false, PlsDiv:true, crfmVal: 'PDL', ucVal: ''});
    }
  } 

  render(){
	
    let loanLst;
    let secLst;
    let thdLst;
    let finalLst=[];
  
    let s = [{product: 'PDL', eligibility: 'Eligible', eligibleAmt: '500.00', minLoanAmt: '50.00', maxLoanAmt: '500.00', maxTerm: '18 Days', payFreq: 'Weekly', security: 'ACH, Check, Debit card'},{product: 'ILP', eligibility: 'Eligible', eligibleAmt: '2500.00', minLoanAmt: '200.00', maxLoanAmt: '2500.00', maxTerm: '6 Months', payFreq: 'Monthly', security: 'RCC'},{product: 'TLP', eligibility: 'Eligible', eligibleAmt: '300.00', minLoanAmt: '300.00', maxLoanAmt: '2500.00', maxTerm: '1 Months', payFreq: '30 Days', security: 'Vehicle'},{product: 'TLP2', eligibility: 'Vehicle Details are required.', eligibleAmt: '', minLoanAmt: '', maxLoanAmt: '', maxTerm: '', payFreq: '', security: ''},{product: 'LOC', eligibility: 'Eligible', eligibleAmt: '2500.00', minLoanAmt: '200.00', maxLoanAmt: '2500.00', maxTerm: '0 Days', payFreq: 'Monthly', security: 'RCC'}];
    let prd;
    for(let i=0; i<=s.length-1; i++){
        if(s[i].product == "TLP2"){
            prd = "TLP";
        }else{
            prd = s[i].product;
        }	  
        loanLst = <tr className={s[i].product}><td align="center"><input type="radio" name="ldRadio" value={s[i].product}/></td><td align="center" className="font150">{prd}</td><td align="center" className="font150">$ {s[i].eligibleAmt}</td><td align="center" className="font150">{s[i].payFreq}</td><td align="center" className="font150">$ {s[i].minLoanAmt}</td><td align="center" className="font150">$ {s[i].maxLoanAmt}</td><td align="center" className="font150">{s[i].maxTerm}</td></tr>;

        if(s[i].eligibility == "Eligible"){
            secLst = <tr className={s[i].product}><td align="center" colspan="7"><div className="col-sm-6"><strong>Eligibility</strong>: {s[i].eligibility}</div><div className="col-sm-6"><strong>Security</strong>: {s[i].security}</div></td></tr>;
        } else {
            secLst = <tr className="error"><td align="center" colspan="7"><div className="col-sm-12"><strong>* Eligibility</strong>: {s[i].eligibility}</div></td></tr>;
        }

        if(i != s.length-1){
            thdLst = <tr><td colspan="7">&nbsp;</td></tr>;
        }else{
            thdLst = "";
        }

        finalLst.push(loanLst,secLst,thdLst);

    }
    
	return (
        <div>
            <div className="dispFlx">
                <div className="col-sm-4 col-xs-12 form-group">
                    <div className="innerBlockContainer">
                        <h2>Customer Details</h2>								
                        <table className="noStripe col-table-2 nth-evenColor">
                            <tbody>	
                                <tr>
                                    <td>SSN/ITIN</td>
                                    <td>{this.state.nlSsn}</td>
                                </tr>
                                <tr>
                                    <td>Customer status</td>
                                    <td>{this.state.nlCustStat}</td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>{this.state.nlName}</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td className="text-space">{this.state.nlAddress}, {this.state.nlCity}, {this.state.nlState}, {this.state.nlZip}</td>
                                </tr>
                            </tbody>                        
                        </table>
                    </div>
                </div>

                {this.state.ldVal ? <Loandetails ld={this.state.ldVal}/> : null}
                
                <div className="col-sm-8 col-xs-12 form-group" hidden={!this.state.epDiv}>
                    <div className="innerBlockContainer">
                        <h2>Eligible Product 
                            <span className="iconFnt">(Choose product to filter the loan decisioning options)</span> 
                            <span className="iconRht iconFnt">
                                <span className="ilp"><i className="fa fa-circle" aria-hidden="true"></i></span><span> ILP</span> &nbsp; 
                                <span className="tlp"><i className="fa fa-circle" aria-hidden="true"></i></span><span> TLP</span> &nbsp; 
                                <span className="pdl"><i className="fa fa-circle" aria-hidden="true"></i></span><span> PDL</span> &nbsp;
                                <span className="loc"><i className="fa fa-circle" aria-hidden="true"></i></span><span> LOC</span>
                            </span>
                        </h2>				
                        <div className="col-sm-12 form-group text-center">
                            <div className="col-sm-3">
                                <button className="prodPDL" role="button" onClick={()=>this.prodBtn('pdl')}><img src="images/pdl-Icon.png"/></button><br/><br/><strong>PDL</strong>
                            </div>
                            <div className="col-sm-3">
                                <button className="prodILP" role="button" onClick={()=>this.prodBtn('ilp')}><img src="images/ilp-Icon.png"/></button><br/><br/><strong>ILP</strong>
                            </div>
                            <div className="col-sm-3">
                                <button className="prodTLP" role="button" onClick={()=>this.prodBtn('tlp')}><img src="images/tlp-Icon.png"/></button><br/><br/><strong>TLP</strong>
                            </div>
                            <div className="col-sm-3">
                                <button className="prodLOC" role="button" onClick={()=>this.prodBtn('loc')}><img src="images/loc-Icon.png"/></button><br/><br/><strong>LOC</strong>
                            </div>
                        </div>
                        <div className="col-sm-12 form-group text-center">
                            <button type="button" id="shareCustSummry" onClick={()=>this.custSmry("CustSummry")}> Share Customer Summary </button>
                            <button type="button" id="nwLnBtn" onClick={()=>this.lnInner()}> New Loan </button>
                            <button type="button"> Notes </button>
                            <button type="button" className="btn-danger"> Deny </button>
                        </div>
                        <div className="col-sm-12 text-center" hidden={!this.state.ldAlert}>
                            <span className="error">Please select product from loan decisioning</span>
                        </div>
                    </div>
                </div>
				
				{this.state.ucVal ? <Usercredentials uc={this.state.ucVal} ucCallback={this.ucFunc}/> : null}
               
            </div>

			<div id="VDet" hidden={!this.state.VDDiv}>
			    <VehicleDetails />
			</div>

            <div id="loanDec" hidden={!this.state.ldDiv}>
                <div className="col-sm-12">
                    <div className="innerBlockContainer">
                        <h2>Loan Decisioning</h2>								
                        <div className="contact-infoscroll">
						<table className="lnClr">
                            <thead>
                                <tr>
                                    <th>Select</th>
                                    <th>Product</th>
                                    <th>Eligible Amt</th>
                                    <th>Payment Frequency</th>
                                    <th>Min Loan Amt</th>
                                    <th>Max Loan Amt</th>
                                    <th>Max Term</th>
                                </tr>    
                            </thead>    
                            <tbody>
                                {finalLst} 
                            </tbody>
                        </table>
						</div>
                    </div>
                </div>
            </div>		

            <div id="newLoan" hidden={!this.state.nlDiv}>
                <Newloaninfo value={this.state.ldBkCls} ldCallback={this.nlFunc} />
            </div>
			
			<div id="tlpLoan" hidden={!this.state.tlpDiv}>
                <Tlploaninfo ldCallback={this.nlFunc} />
            </div>
			
			<div id="ilpLoan" hidden={!this.state.ilpDiv}>
                <Ilploaninfo ldCallback={this.nlFunc} />
            </div>
			
			<div id="locLoan" hidden={!this.state.locDiv}>
                <Locloaninfo ldCallback={this.nlFunc} />
            </div>

            {this.state.crfmVal ? <PlsConfirm pc={this.state.crfmVal} ldCallback={this.nlFunc} /> : null}

			<div id="custSummary" hidden={!this.state.custDiv}>
                <ShareCustSummry ldCallback={this.nlFunc} />
            </div>
        </div>
	);
  } 
}