import React, { Component } from "react";
import EndofDay from './EOD/EndofDay';
import Deposit from './EOD/Deposit';
import EODdeposit from './EOD/EODdeposit';
import Depositverification from './EOD/Depositverification';
import EODovershort from './EOD/EODovershort';											  

export default class Dailyprocessing extends Component {
	constructor(props){
		super(props);    
		this.state = {hideEod: false, hideDep: true, hideeodDep: true, hideDepVer: true, hideEodOver: false};
		this.dispEod = this.dispEod.bind(this);
		this.dispDep = this.dispDep.bind(this);
		this.dispVerfi = this.dispVerfi.bind(this);
	
	}
	
	dispEod = (str) =>{
		if(str === '1')
		{
			this.setState({hideEod: false, hideDep: true, hideeodDep: true, hideDepVer: true, hideEodOver: false});
		}else if(str === "0.00")
		{
			this.setState({hideEod: true, hideDep: true, hideeodDep: true, hideDepVer: true, hideEodOver: true});
		}else
		{
			this.setState({hideEod: true, hideDep: false, hideeodDep: true, hideDepVer: true, hideEodOver: false});
		}
		
	}	
	
	
	dispVerfi = (str) =>{
		if(str === '1')
		{
			this.setState({hideEod: true, hideDep: true, hideeodDep: false, hideDepVer: true, hideEodOver: false});
		}else{
			this.setState({hideEod: true, hideDep: true, hideeodDep: true, hideDepVer: false, hideEodOver: false});
		}
		
	}
	
	dispDep = (str) =>{
		if(str === '1')
		{
			this.setState({hideEod: true, hideDep: false, hideeodDep: true, hideDepVer: true, hideEodOver: false});
		}else
		{
			this.setState({hideEod: true, hideDep: true, hideeodDep: false, hideDepVer: true, hideEodOver: false});
		}
		
	}
	exitEOD = ()=>
  	{
     	window.$(".close-tab1").click();
     	window.$("#home").addClass('active in');
  	}		   
    
  render(){	
	return (
		<div className="height100">
			<div className="collectionContainer">
				<div className="collectionSubContainer" hidden={this.state.hideEod}>
					<EndofDay dispEod={this.dispEod}  exitEOD={this.exitEOD}/>
				</div>
				<div className="collectionSubContainer" hidden={this.state.hideDep}>
					<Deposit dispDep={this.dispDep} dispEod={this.dispEod} exitEOD={this.exitEOD}/>
				</div>
				<div className="collectionSubContainer" hidden={this.state.hideeodDep}>
					<EODdeposit  dispVerfi={this.dispVerfi} dispDep={this.dispDep} exitEOD={this.exitEOD}/>
				</div>
				<div className="collectionSubContainer" hidden={this.state.hideDepVer}>
					<Depositverification dispVerfi={this.dispVerfi} dispEod={this.dispEod} exitEOD={this.exitEOD}/>
				</div>
			{this.state.hideEodOver ? <div className="collectionSubContainer" >
					<EODovershort dispEod={this.dispEod} exitEOD={this.exitEOD} />
				</div> : null }														   
			</div>
		</div>
	);
  } 
}