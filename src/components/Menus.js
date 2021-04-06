import React, { Component } from 'react';
import { push as Menu } from "react-burger-menu";

class Menus extends Component {

  constructor(props){
    super(props);     
    //this.test = this.test.bind(this);
    this.state = {menustatus: true, tempdata:[]};                     
  }

  menustat(str){
    this.setState({menustatus: str});
  }

  componentWillMount(){
    this.setState({
      tempdata:[        
      {"name":"Recently Accessed Customers",
       "submenu":[{"item":"William"},{"item":"taylor"}]},
      {"name":"Customer",
       "submenu":[{"item":"Address"},{"item":"Phone"},{"item":"Income"}]},
      {"name":"Reports",
      "submenu":[]},
      {"name":"Collections",
       "submenu":[]}  
      ]
    })
  }
   
  render() {
    var styles = {                      
      bmOverlay: {        
        left: '0',
        top: '0',
        zindex: '9999', 
        opacity: 0                               
      },
      bmMenuWrap:{
        width: '225px',
		    background: '#fff',
		    borderRadius: '6px',
		    paddingTop: '6px',
		    zIndex: '998'
      }                             
    };
    
          
    return (<div><Menu isOpen={ this.state.menustatus } disableCloseOnEsc styles={ styles } disableOverlayClick customBurgerIcon={ <img src="images/icon.svg" /> } width={'230px'} pageWrapId={ "page-main" }>      
      
      <div id="test">
  <div className="col-md-12">
  <div className="row">
    <div>
	    <p>&nbsp;</p>	
	  </div>
    <div className="" id="main">
      <nav className="sidebar-nav">
        <ul className="metismenu" id="menu">
        {/* {this.state.tempdata.map((person, i) =>
          { return person.submenu.length>0 ? 
          <li key = {i}><a className="has-arrow" href={'#'} aria-expanded="false">{person.name}</a>
          <ul>{person.submenu.map((sub, j) => <li key = {j}><a href={'#'}>{sub.item}</a></li>)}</ul>
          </li>
          :
          <li key = {i}><a href={'#'}>{person.name}</a></li>
          }
        )} */}
			 <li><a className="has-arrow" href={'#'} aria-expanded="false"><span><img src="images/multiUsers.png" /></span><span>Recently Accessed Customers (5)</span></a>
        <ul>
          <li><a href={'#'} onClick={()=>{this.props.menuList({name: 'Williams Logan', custFLNm: 'Williams Logan', custNbr: '10005', custSsn: 'XXX-XX-3735', custEmail: 'williamslogan225@gmail.com', custPh: '(341) 525-3463', custPhTyp: 'Home', custAddress: '116 Shoun street', custCity: 'Mountain City', custState: 'Tennessee', custZip: '37683', newCust: '2', pstatus: '2', label: 'Loans of', id: '10005'})}}>Williams Logan</a></li>			  
          <li><a href={'#'} onClick={()=>{this.props.menuList({name: 'Sebastian Greene', custFLNm: 'Sebastian Greene', custNbr: '10038', custSsn: 'XXX-XX-3798', custEmail: 'sebastiangreene11@gmail.com', custPh: '(469) 307-7776', custPhTyp: 'Cell', custAddress: '5021 Shoals Lane Apt A', custCity: 'Chattanooga', custState: 'Tennessee', custZip: '37411', newCust: '2', pstatus: '2', label: 'Loans of', id: '10038'})}}>Sebastian Greene</a></li>
  			  <li><a href={'#'} onClick={()=>{this.props.menuList({name: 'David Miller', custFLNm: 'David Miller', custNbr: '11908', custSsn: 'XXX-XX-5289', custEmail: 'davidmiller01@gmail.com', custPh: '(345) 678-2345', custPhTyp: 'Cell', custAddress: '1285 Old Highway 67', custCity: 'Butler', custState: 'Tennessee', custZip: '37640', newCust: '2', pstatus: '2', label: 'Loans of', id: '11908'})}}>David Miller</a></li>
  			  <li><a href={'#'} onClick={()=>{this.props.menuList({name: 'Thomas Parker', custFLNm: 'Thomas Parker', custNbr: '13289', custSsn: 'XXX-XX-4348', custEmail: 'thomasparker99@gmail.com', custPh: '(234) 345-1241', custPhTyp: 'Home', custAddress: '6323 Fairest Drive', custCity: 'Hamilton Harrison', custState: 'Tennessee', custZip: '37341', newCust: '2', pstatus: '2', label: 'Loans of', id: '13289'})}}>Thomas Parker</a></li>
  			  <li><a href={'#'} onClick={()=>{this.props.menuList({name: 'Wilson Phillips', custFLNm: 'Wilson Phillips', custNbr: '17389', custSsn: 'XXX-XX-8358', custEmail: 'wilsonphillips99@gmail.com', custPh: '(249) 223-8975', custPhTyp: 'Cell', custAddress: '1285 Old Highway 67', custCity: 'Butler', custState: 'Tennessee', custZip: '37640', newCust: '2', pstatus: '2', label: 'Loans of', id: '17389'})}}>Wilson Phillips</a></li>
			  </ul>
      </li>
			<li><a className="has-arrow" href={'#'} aria-expanded="false"><span><img src="images/customer.png" /></span><span>Customer</span></a> 
				<ul>
          <li><a href={'#'} onClick={()=>{this.props.menuList({name: 'New Customer', custFLNm: 'New Customer', id: 'Newcustomer'})}}>New Customer</a></li>
          {/* <li><a href={'#'} onClick={()=>{this.props.menuList({name: 'Borrower', custFLNm: 'Borrower', id: 'Borrower'})}}>Borrower</a></li> */}
          <li><a href={'#'} onClick={()=>{this.props.iconList('phone')}}>Edit Phone</a></li>
  			  <li><a href={'#'} onClick={()=>{this.props.iconList('bank')}}>Edit Bank Details</a></li>
  			  <li><a href={'#'} onClick={()=>{this.props.iconList('addrs')}}>Edit Address</a></li>
  			  <li><a href={'#'} onClick={()=>{this.props.iconList('income')}}>Edit Income</a></li>
			  </ul>
			</li>          
		  <li><a href={"#"} onClick={()=>{this.props.menuList({name: 'Collection Mgmt', custFLNm: 'Collections Mgmt', id: '2'})}}><span><img src="images/collect.png" /></span><span>Collection Management</span></a></li>		  
		  {/* <li><a className="has-arrow" href={'#'} aria-expanded="false"><span><img src="images/transaction.png" /></span><span>Loan Transaction</span></a>
        <ul>
          <li><a href={'#'}>Transactions</a></li>
          <li><a href={'#'} onClick={()=>{this.props.menuList({name: 'Title Loan', custFLNm: 'Title Loan', id: '5'})}}>Title Loan</a></li>
        </ul>
      </li>
      <li><a className="has-arrow" href={'#'} aria-expanded="false"><span><img src="images/transaction.png" /></span><span>Misc Transactions</span></a>
        <ul>
          <li><a href={'#'} onClick={()=>{this.props.menuList({name: 'Misc Receipts', custFLNm: 'Misc Receipts', id: 'MiscReceipts'})}}>Misc Receipts</a></li>
          <li><a href={'#'} onClick={()=>{this.props.menuList({name: 'Misc Disburssement', custFLNm: 'Misc Disburssement', id: 'MiscDisburssement'})}}>Misc Disburssement</a></li>
        </ul>
      </li>  */}         
		  <li><a href={'#'} onClick={()=>{this.props.menuList({name: 'Daily Processing', custFLNm: 'Daily Processing', id: 'Dailyprocessing'})}}><span><img src="images/EOD.png" /></span><span>End of the Day [Start EOD]</span></a></li>	
		  <li><a href={'#'} onClick={()=>{this.props.menuList({name: 'Reports', custFLNm: 'Reports', id: '3'})}}><span><img src="images/report.png" /></span><span>Reports</span></a></li>
		  {/* <li><a href={'#'} onClick={()=>{this.props.menuList({name: 'NetSpend', custFLNm: 'NetSpend', id: '6'})}}><span><img src="images/report.png" /></span><span>NetSpend</span></a></li> */}
		  <li><a href={'#'} onClick={()=>{this.props.menuList({name: 'Cash Management', custFLNm: 'Cash Management', id: 'cashMgmt'})}}><span><img src="images/dollar.png" /></span><span>Cash Management</span></a></li>
      <li><a className="has-arrow" href={'#'} aria-expanded="false"><span><img src="images/transaction.png" /></span><span>Corporate</span></a>
        <ul>
          <li><a href={'#'} onClick={()=>{this.props.menuList({name: 'Corporate Payment', custFLNm: 'Corporate Payment', id: 'Crpayment'})}}>Payment</a></li>
          <li><a href={'#'} onClick={()=>{this.props.menuList({name: 'Void Corporate Payment', custFLNm: 'Void Corporate Payment', id: 'Vcrpayment'})}}>Void</a></li>
        </ul>
      </li>
        </ul>
      </nav>	  
  </div>
</div>
</div>
</div>        
      
      </Menu></div>
    );
  }
}

export default Menus;
