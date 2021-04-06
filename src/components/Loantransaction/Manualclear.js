import React, { Component } from "react";

export default class Manualclear extends Component {

  constructor (props) {
    super(props);
    this.state = {mncProd: '', mncTran: '', mainDiv: true, plsDiv:false, achHead:'', achDet:true};
  }

  componentWillMount(){
    this.setState({mncProd: this.props.mcVal, mncTran: this.props.tranVal})
  }
  
  componentDidMount(){
	if(this.state.mncProd == "LOC"){
        this.setState({achHead: "Manual Clear", achDet: true});
    } else if(this.state.mncProd == "ILP"){
        this.setState({achHead: "ACH Deposit Clear", achDet: false});
    }
  }

  finBtnFun(){
    this.setState({plsDiv : true, mainDiv:false});
  }

  
  render(){

	let mcLst = [];
	let mcLst1 = [];
	let mcLst2 = [];

	let mc = [{select: '', instNbr: '2', loanNbr: '11091043', name: 'H,H', instAmt: '230.84', balStat: 'ACHD', locNbr: '2008', achClear: '04/02/2021'}];
	if(mc.length === 0){
		mcLst.push(<tr><td align="left" colspan="6">Details not available.</td></tr>);
	}else{
		for(let mi=0; mi<=mc.length-1; mi++){
			mcLst.push(<tr><td align="center"><input type="checkbox" name="mcChk" value={mc[mi].select} /></td><td align="center">{mc[mi].instNbr}</td><td align="center">{mc[mi].loanNbr}</td><td align="center">{mc[mi].name}</td><td align="right">$ {mc[mi].instAmt}</td><td align="center">{mc[mi].balStat}</td><td align="center">{mc[mi].locNbr}</td><td align="center">{mc[mi].achClear}</td></tr>); 
		}
	}

	let mc1 = [{select: '', chkNbr: '1212', achcode: '29033118', depAmt: '100.00', achClear: '06/03/2021'}];
	if(mc1.length === 0){
		mcLst1.push(<tr><td align="left" colspan="6">Details not available.</td></tr>);
	}else{
		for(let mj=0; mj<=mc1.length-1; mj++){
			mcLst1.push(<tr><td align="center"><input type="checkbox" name="mpcChk" value={mc1[mj].select} /></td><td align="center">{mc1[mj].chkNbr}</td><td align="center">{mc1[mj].achcode}</td><td align="right">$ {mc1[mj].depAmt}</td><td align="center">{mc[mj].achClear}</td></tr>); 
		}
	}

	let mc2 = [{select: '', chkNbr: '1212', achcode: '29033118', depAmt: '100.00', achClear: '06/03/2021'},{select: '', chkNbr: '1212', achcode: '29033118', depAmt: '100.00', achClear: '06/03/2021'}];
	if(mc2.length === 0){
		mcLst2.push(<tr><td align="left" colspan="6">Details not available.</td></tr>);
	}else{
		for(let mk=0; mk<=mc2.length-1; mk++){
			mcLst2.push(<tr><td align="center"><input type="checkbox" name="mpChk" value={mc2[mk].select} /></td><td align="center">{mc2[mk].chkNbr}</td><td align="center">{mc2[mk].achcode}</td><td align="right">$ {mc2[mk].depAmt}</td><td align="center">{mc2[mk].achClear}</td></tr>); 
		}
	}

    return (
        <div>
        	{this.state.mainDiv ? <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>{this.state.achHead} <span onClick={()=>{this.props.mncClose('false')}} className="close close-window text-right">Close <i className="fa fa-times"></i></span></h2>
					{this.state.achDet ?
                   		<div>
							<div className="col-sm-12 form-group">   
                        		<a href="#">Check All</a>  &nbsp;&nbsp;
                        		<a href="#">Uncheck All</a> 
							</div>
                    		<div className="col-sm-12">
					 			<div className="innerBlockContainer">
                        			<h2>Manual Presentments Clear</h2>
									<table width="100%" className="col-table-5">
										<thead>
											<tr>
												<th>Select</th>
												<th>Check Nbr</th>
												<th>ACH Code</th>
												<th>Deposit Amt</th>
												<th>ACH Clear Date</th>
											</tr>
										</thead>
										<tbody>
											{mcLst1}
										</tbody>
									</table>
								</div>
							</div>

                    		<div className="col-sm-12">
					 			<div className="innerBlockContainer">
                        			<h2>Manual Payments Clear</h2>
									<table width="100%" className="col-table-5">
										<thead>
											<tr>
												<th>Select</th>
												<th>Check Nbr</th>
												<th>ACH Code</th>
												<th>Amt</th>
												<th>Payments Clear Date</th>
											</tr>
										</thead>
										<tbody>
											{mcLst2}
										</tbody>
									</table>
								</div>
							</div>

                    		<div className="col-sm-12 text-center">                            
                        		<button type="button" onClick={()=>{this.props.mncClose('false')}}> Cancel </button>
                        		<button type="button" onClick={()=>{this.finBtnFun()}}> Finish</button>
							</div>
						</div>
					: 
						<div>
							<table width="100%" className="col-table-5">
								<thead>
									<tr>
										<th>Select</th>
										<th>Inst Nbr</th>
										<th>Loan Nbr</th>
										<th>Name</th>
                                        <th>Installment Amt</th>
                                        <th>Balance Status</th>
										<th>Loc Nbr</th>
                                        <th>ACH Clear Date</th>
									</tr>
								</thead>
								<tbody>
									{mcLst}	
								</tbody>
							</table>
							<br/>
							<div className="col-sm-12 text-center">                            
                        		<button type="button" onClick={()=>{this.props.mncClose('false')}}> Cancel </button>
                        		<button type="button" onClick={()=>{this.finBtnFun()}}> Finish Clear </button>
							</div>
						</div>
					}
                </div>
            </div> : null }
    
           	{this.state.plsDiv ? <div className="col-sm-12">
                <div className="innerBlockContainer">
                    <h2>Confirmation</h2>                    
                    <div className="text-center">
                    	<p> Transaction Completed Successfully</p>                    
                    	<button type="button" onClick={()=>{this.props.mncClose('false')}}>Ok</button>
                    </div>
                </div>
            </div> :  null }
            
        </div>
    );
	
  } 
}