import React, { Component } from "react";

export default class Datepicker extends Component {
  constructor(props){
    super(props);
    this.handleDtChange = this.handleDtChange.bind(this);
	  this.state = {date: ''};
  }
  
  componentDidMount(){
    window.$(".reportDate").datepicker({
		changeMonth: true,
		changeYear: true,	
		yearRange : 'c-65:c+30',
		defaultDate: "today",
		dateFormat: 'mm/dd/yy',
		onClose: function() {
			window.$( this ).focus().blur();
		}
    }); 
  };

  loadData(str){
    this.setState({date: str});
  }

  handleDtChange=(e)=>{        
    this.setState({[e.target.name]: e.target.value });      
  }
  
  render(){  
    return (		
		<input type="text" placeholder="MM/DD/YYYY" className="reportDate" name={this.props.name} value={this.state.date} onChange={this.handleDtChange}/>		
    );
  }
}