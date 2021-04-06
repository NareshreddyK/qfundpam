import React, { Component } from "react"; 
import Header from './Header'
import Dashboard from './Dashboard'
import Search from './Search'
import Tab from './Customertab'
import Popup from './Popup'

export default class Body extends Component {
  constructor(props){
    super(props);     
    //this.test = this.test.bind(this); 
    this.search = this.search.bind(this);
    this.dispSearch = this.dispSearch.bind(this);    
    this.state = {list: [], label:'', tab:[], custLst:[], cust: '', custNm: '', custSsn: '', custEmail: '', custPh: '', custPhTyp: '', custAddress: '', custCity: '', custState: '', custZip: '', hidediv: false};                                    
  }
  
  state = {
    numChildren: 0
  }
  
  state = {
    custData: 0
  }
  
  search=(str)=>{
    this.refs.sResult.searchResult(str);
  }
  
  dispSearch=()=>{
    window.$("#SearchResult").addClass('active in');    
  }
  
  tabInfo=(str)=>{            
    this.refs.tabId.searchResult(str);
  }                   
  
  addTabs=(str)=>{
	//window.showLoad();
    window.$("#SearchResult").removeClass('active in');
    window.$("#searchMenu").removeClass('active');
    window.$("#home").removeClass('active in');
    window.$("#"+this.state.custNm).removeClass('active in');
    window.$("#"+this.state.custNm+"aa").closest('li').removeClass('active');
    window.$(".tabCust > div").removeClass('active in');
    window.$("#mainTabs li").removeClass('active');
    
    if(str.newCust!=='1'){
      if(str.id===undefined){
        this.setState({hidediv: true});
      }
      
	    if(str.id==='10'){
        for(let i=0; i<=str.name.length-1; i++){                  
          this.setState(state =>{ const list = state.list.concat(str.name[i]); const tab = state.tab.concat(str.name[i]); return {list,tab, custNm: str.id[i], cust: str} });        
        }              
      }
      
      if(str.id==='1'){
        for(let i=0; i<=str.name.length-1; i++){                  
          this.setState(state =>{ const list = state.list.concat(str.name[i]); const tab = state.tab.concat(str.name[i]); return {list,tab, custNm: str.id[i], cust: str} });        
        }              
      }else{
                     
        if(window.clsTab1 != ""){
          for(let c=0; c<window.clsTab1.length; c++){
              this.state.custLst.splice(this.state.custLst.indexOf(window.clsTab1[c]), 1);
            }
          window.clsTab1 = [];
        }                
                
        this.setState(state =>{ if(this.state.custLst.indexOf(str.id)=='-1'){ this.state.custLst.push(str.id); const list = state.list.concat(str); const tab = state.tab.concat(str); return {list,tab, custNm: str.id, cust: str}} else { window.$("#"+str.id+"aa").closest('li').addClass('active'); window.$("#"+str.id).addClass('active in');} });      
      }                              
      window.reAdjust();
      this.refs.popup.closePopup();      
    }else{
      this.refs.popup.disp(str);
    }    
  }
  
  logOut=(str)=>{
    this.props.login(str);
    this.setState({cust: '', custNm: ''});
  }

  componentDidUpdate(){
    if(this.state.cust != ""){
      this.refs.tabId.enableTab(this.state.cust);
    }
    //this.refs.tabId.enableTab(this.state.cust);    
    window.$("#"+this.state.custNm+"aa").closest('li').addClass('active');    
    window.$("#"+this.state.custNm).addClass('tab-pane fade active in');
    window.tabWdth();
    window.hidnTabs();
    window.msgHgt();
  }
  
   /*addTabs = (str) => {
    let a = str.split("_");        
    this.setState({numChildren: a[2]});    
    this.setState({custData: a[0]+" "+a[1]});
  }*/
  
  render(){ 
    /*const children = [];
 
    for (var i = 0; i < this.state.numChildren; i += 1) {                  
      children.push(<ChildComponent key={i} number={this.state.custData} />);            
    };*/
    
    
            
    return (<div className="fullLengthContainer"><Header addTabs={this.addTabs} search={this.search} logOut={this.logOut} /><div id='page-main' className="contentBodyHeight">
          <div className="scroller scroller-left"><i className="glyphicon glyphicon-chevron-left"></i></div>
          <div className="scroller scroller-right listIc"><img src="images/list-text.png" />{/* <i className="glyphicon glyphicon-chevron-right"></i> */}</div>
          <div class="lst"><div id="lst"></div></div>
          {/* <div class="listIc">
            <img src="images/list-text.png" width="22px" height="22px" />
            <div class="lst"><div id="lst"></div></div>
          </div> */}
          <div className="wrapper" id="wrapperW">
            <ul className="nav nav-tabs list" id="mainTabs">
              <li className="active defaultGreen"><a id="homeaa" data-toggle="tab" href="#home">Home</a></li>
              <li id='searchMenu' className="defaultYellow"><a id="SearchResultaa" data-toggle="tab" href="#SearchResult">Search Results</a></li>
                {this.state.list.map((item,index) => (
                  <li key={index}><a id={item.id+"aa"} onClick={()=>this.tabInfo(item.id+"_"+item.name+"_"+item.custSsn+"_"+item.custEmail+"_"+item.custPh+"_"+item.custPhTyp+"_"+item.custState+"_"+item.custAddress+"_"+item.custZip+"_"+item.custCity)} href={'#'+item.id} data-toggle='tab'><table cellpadding="0" cellspacing="0" width="100%" className="noBorder tblHgt"><tr><td><div className="txtNor">{item.label}</div><div>{item.custFLNm}</div></td><td><span className='close close-tab1'><i className="fa fa-times"></i></span></td></tr></table></a></li>
                ))}
            </ul>
          </div>        
          <div className="tab-content tabCust htShrink">
            <Dashboard addTabs={this.addTabs} />
            <Search ref='sResult' addTabs={this.addTabs} />                                    
            {this.state.tab.map((item,index) => (
              <div id={item.id} className='tab-pane fade'><Tab mainM={this.mainM} ref='tabId' data={item} key={index}/></div>
            ))}                                                  
          </div>       
      </div>
      <Popup ref='popup' addTabs={this.addTabs} dispSearch={this.dispSearch} />
      </div>      
    );
  }
}


/*const ChildComponent = props => <Tab/>;*/