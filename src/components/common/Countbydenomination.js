import React, { Component } from "react";

export default class Countbydenomination extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

 

  render(){  
    return (
        <div className="col-sm-12">
        <div class="innerBlockContainer"> 
              <h2>Count by Denomination</h2>                
              <table width="100%" border="0" className="noBorder col-table-4 nth-evenColor"><tbody>
              <tr>
              <td>
              <tr><th>&nbsp;</th><th>Count</th><th>Total</th></tr>
              <tr><td>Count of Pennies</td><td><input type="text" name="text" placeholder="" /></td><td><input type="text" name="" placeholder=""  /></td></tr><tr><td>Count of Nickels</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder=""/></td></tr><tr><td>Count of Dimes</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Quarters</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Half Dollar Coins</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of Dollar Coins</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr></td>
              <td><tr><th>&nbsp;</th><th>Count</th><th>Total</th></tr>
              <tr><td>Count of $1</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $5</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $10</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $20</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $50</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr><tr><td>Count of $100</td><td><input type="text" name="" placeholder="" /></td><td><input type="text" name="" placeholder="" /></td></tr></td></tr>
              </tbody>
              </table>
              
        </div>
        </div>
    );
  }
}