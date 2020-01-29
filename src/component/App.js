import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";
import {connect} from 'react-redux';
import printSum from '../actions/index'
class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    // if(buttonName=='=')
      // this.props.printSum();
    this.setState(calculate(this.state, buttonName)
    // ,()=>{
    //   if(buttonName=='=')
    //   this.props.printSum(this.state.total);}
    );
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
const mapStateToProps=(state)=>{
      return {
        updatedTotal:state.sumReducer.total
      }
}
export default connect(mapStateToProps,{printSum})(App)