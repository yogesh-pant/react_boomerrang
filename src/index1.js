// import React from 'react';
// import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class MyToggleComp extends React.Component{

    constructor(props){
      super(props);
      this.state = {isOn:true};
      this.myHandler = this.myHandler.bind(this);
    }

    myHandler(){
      this.setState( state => ({
        isOn: !state.isOn
      }));
      console.log("yes state is on.");
    }

    render(){
      return(
        <button onClick={this.myHandler}>{this.state.isOn ? 'ON' : 'OFF'}</button>
      );
    }
}

ReactDOM.render(
  <MyToggleComp />, document.getElementById('root')
);
