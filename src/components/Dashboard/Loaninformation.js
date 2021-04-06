import React, { Component } from "react";

export default class Loaninformation extends Component {
	constructor(props){
        super(props);
        this.state = {liSel: 'pdl'} 
    }
    
    prodSel(str){
        window.$("a").removeClass("prodSel");

        if(str == "pdl"){
            this.setState({liSel: str});
            window.$("a#selPdl").addClass("prodSel");
        }else if(str == "ilp"){
            this.setState({liSel: str});
            window.$("a#selIlp").addClass("prodSel");
        }else if(str == "tlp"){
            this.setState({liSel: str});
            window.$("a#selTlp").addClass("prodSel");
        }else if(str == "loc"){
            this.setState({liSel: "tlp"});
            window.$("a#selLoc").addClass("prodSel");
        }
    }

  render(){
    
    let loanLst = [];
    if(this.state.liSel == 'pdl'){
        let s = [{status: 'Current', count: '97', totalDue: '18,637.00'},{status: 'Delinquent', count: '0', totalDue: '0.00'},{status: 'Returned', count: '28', totalDue: '5,946.00'},{status: 'WriteOff', count: '108', totalDue: '18,637.00'},{status: 'ACH in Flight', count: '22', totalDue: '18,637.00'}];

        for(let i=0; i<=s.length-1; i++){	  
            loanLst.push(<tr><td align="left">{s[i].status}</td><td align="center">{s[i].count}</td><td align="right">$ {s[i].totalDue}</td></tr>);
        }
    }else if(this.state.liSel == 'ilp'){
        let s = [{status: 'Current', count: '17', totalDue: '20,716.00'},{status: 'Delinquent', count: '0', totalDue: '0.00'},{status: 'Returned', count: '55', totalDue: '7,846.00'},{status: 'WriteOff', count: '59', totalDue: '20,716.00'},{status: 'ACH in Flight', count: '34', totalDue: '20,716.00'}];

        for(let i=0; i<=s.length-1; i++){	  
            loanLst.push(<tr><td align="left">{s[i].status}</td><td align="center">{s[i].count}</td><td align="right">$ {s[i].totalDue}</td></tr>);
        }
    }else if(this.state.liSel == 'tlp'){
        let s = [{status: 'Current', count: '59', totalDue: '55,412.00'},{status: 'Delinquent', count: '0', totalDue: '0.00'},{status: 'Returned', count: '6', totalDue: '2,846.00'},{status: 'WriteOff', count: '72', totalDue: '55,412.00'},{status: 'ACH in Flight', count: '16', totalDue: '55,412.00'}];

        for(let i=0; i<=s.length-1; i++){	  
            loanLst.push(<tr><td align="left">{s[i].status}</td><td align="center">{s[i].count}</td><td align="right">$ {s[i].totalDue}</td></tr>);
        }
    }

    return (		
        <div>
            <h3>Loan Information
                <div class="locpdltlpilp">
			    <a href={'#'} id="selIlp" onClick={()=>{this.prodSel('ilp')}}><span className="ilp"><i className="fa fa-circle" aria-hidden="true"></i></span><span> ILP</span></a>  
				<a href={'#'} id="selTlp" onClick={()=>{this.prodSel('tlp')}}><span className="tlp"><i className="fa fa-circle" aria-hidden="true"></i></span><span> TLP</span></a> 
				<a href={'#'} id="selPdl" className="prodSel" onClick={()=>{this.prodSel('pdl')}}><span className="pdl"><i className="fa fa-circle" aria-hidden="true"></i></span><span> PDL</span></a>
                <a href={'#'} id="selLoc" onClick={()=>{this.prodSel('loc')}}><span className="loc"><i className="fa fa-circle" aria-hidden="true"></i></span><span> LOC</span></a>
                </div>
          	</h3>
			<table width="100%" cellPadding="0" cellSpacing="0" border="0" className="dshTable">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Count</th>
                        <th>Total Due</th>
                    </tr>
                </thead>
                <tbody>
                    {loanLst}
                </tbody>                        
            </table>
        </div>						
    );
  }
}