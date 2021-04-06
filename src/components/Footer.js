import React, { Component } from "react";
import Phone from './Phone'
import Bank from './Bank'
import Address from './Address'
import Income from './Income'
import Makepay from './Makepay'
import Vinvalidation from './Vinvalidation'

export default class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {bnkCnt: [], a: 0};
  }
  
  triggerChildAlert(){ //Child Component Alert data  <button onClick={this.triggerChildAlert.bind(this)}>Click</button>
      this.refs.child.test();        
      window.zIndClick("edit-phone-pop");
  }
  
  triggerBank(){    
    this.refs.bank.bank();
    window.zIndClick("edit-bank-myAccnt");
  }
  
  triggerAddrs(){
    this.refs.addrs.addrs();
    window.zIndClick("edit-addr");
  }
  
  triggerInc(){
    this.refs.income.income();
    window.zIndClick("edit-inc-pop");
  }

  triggerVin(){
    this.refs.vin.vin();
    window.zIndClick("edit-vin-pop");
  }
  
  triggerPay(){
    this.refs.mkPay.mkPay();
    window.zIndClick("popover-content-myAccnt");
  }  
  
  icons=(str)=>{
    if(str==='phone'){
      this.refs.child.disp(str);
      window.zIndClick("edit-phone-pop");
    }else if(str==='bank'){
      this.refs.bank.disp(str);
      window.zIndClick("edit-bank-myAccnt");
    }else if(str==='addrs'){
      this.refs.addrs.disp(str);
      window.zIndClick("edit-addr");
    }else if(str==='income'){
      this.refs.income.disp(str);
      window.zIndClick("edit-inc-pop");
    }else if(str==='mkPay'){
      this.refs.mkPay.disp(str);
      window.zIndClick("popover-content-myAccnt");
    }    
  }
 
  show=()=>{            
     
  }
  
  render(){  
    return (
      <div className="footerMain">
<div className="footer-icons">
<button data-toggle="tooltip" title="Edit Phone" onClick={this.triggerChildAlert.bind(this)} className="rightIcon"><i className="fa fa-phone"></i></button>&nbsp;
<button data-toggle="tooltip" title="Edit Bank Details" onClick={this.triggerBank.bind(this)} className="rightIcon"><i className="fa fa-university "></i></button>&nbsp;
<button data-toggle="tooltip" title="Customer Address" onClick={this.triggerAddrs.bind(this)} className="rightIcon"><i className="fa fa-address-book"></i></button>&nbsp;
<button data-toggle="tooltip" title="Edit Income" onClick={this.triggerInc.bind(this)} className="rightIcon"><i className="fa fa-edit"></i></button>&nbsp;
&nbsp;
<button data-toggle="tooltip" title="Make Payment" onClick={this.triggerPay.bind(this)} className="rightIcon"><i className="fa fa-credit-card"></i></button>&nbsp;
<button data-toggle="tooltip" title="New Registration" onClick={()=>{this.props.menuList({name: 'New Customer', custFLNm: 'New Customer', id: 'Newcustomer'})}} className="rightIcon"><i className="fa fa-file-invoice"></i></button>&nbsp;
<button data-toggle="tooltip" title="VIN Validation" onClick={this.triggerVin.bind(this)} className="rightIcon"><i className="fa fa-car"></i></button>&nbsp;
<div id='phn'><Phone ref='child' /></div>
<div id='bnk'><Bank ref='bank' /></div>
<Address ref='addrs' />
<Income ref='income' />
<Makepay ref='mkPay' />
<Vinvalidation ref='vin' />
</div>


<div id="chatContainer" className="chatContainer">
	<div className="col-sm-12 text-right"><i className="fa fa-times"></i></div>
	<div className="col-sm-12 text-center"><h4>Choose here!!!</h4></div>
	<div className="col-sm-12 text-center"><img src="images/chatIconOwl.png" /></div>
	<div className="col-sm-12 form-group"></div>
	<div className="col-sm-12 form-group">Display Name <input type="text" className="form-controll" value='Traverso' readonly /></div>
	<div className="col-sm-12 form-group">Select available CSR Here
		<select name="select" className="form-controll">
		<option value="" selected></option>
		<option value="">CSR - 1</option>
		<option value="">CSR - 2</option>
		<option value="">CSR - 3</option>
		<option value="">CSR - 4</option>
		<option value="">CSR - 5</option>
		</select>
	</div>
	<div className="col-sm-12 form-group text-center"><button type="button" className="btn btn-primary">Start Chat</button></div>
</div>
<div id="chatIcon" className="chatIcon">

</div>
</div>
    );
  }
}