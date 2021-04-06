import React, { Component } from "react";
import Datepicker from "./common/Datepicker"

export default class TitleLoan extends Component {

  constructor (props) {
    super(props);
    this.handleStChange = this.handleChange.bind(this);
    this.state = {strNbr: ''};        
  }

  componentWillMount(){
    this.setState({strNbr: ''});
  }

  componentDidMount(){
    this.refs.toDt.loadData("");
  }

  handleChange=(e)=>{        
    this.setState({[e.target.name]: e.target.value });      
  }

  render(){
	const eqHght = {
		display: 'flex'
	}
	const noBG = {
	  background: 'transparent'
  }
    
	return (
<div className="height100">
  <div className="collectionContainer" style={ noBG }>
    <div className="collectionSubContainer">
      <div className="col-sm-6 col-sm-offset-3 form-group">
          <div className="innerBlockContainer margin-top">
		  <h2> &nbsp; Reprint Repossession Letter</h2>
            <div className="col-sm-8 col-sm-offset-2 form-group">
              <div className="row">
                <table width="100%" border="0" className="noBorder noStripe col-table-2">
                  <tbody>
                    <tr>
                      <td colspan="2">&nbsp;</td>
                    </tr>
                    <tr className="bgHighlt">
                      <td>Store Nbr</td>
                      <td><input type="text" name="strNbr" id="strNbr" placeholder="Store Nbr" value={this.state.strNbr} onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                      <td colspan="2">&nbsp;</td>
                    </tr>
                    <tr className="bgHighlt">
                      <td>To Date</td>
                      <td><Datepicker id={'toDt'} name={'date'} ref='toDt' /></td>
                    </tr>
                    <tr>
                      <td colspan="2">&nbsp;</td>
                    </tr>
                    <tr>
					            <td> &nbsp; </td>	
                      <td><button type="button"> Submit </button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
  } 
}