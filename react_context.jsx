import React, {Component, createContext} from 'react';
import logo from './logo.svg';
import './App.css';
const BatteryContext = createContext()

class Leaf extends Component{
  static contextType = BatteryContext
  render(){
    const battery = this.context
    return (
          <h1>battert:{battery}</h1>
    )
  }
}

class Middle extends Component{
  render(){
    return <Leaf/>
  }
}

class App extends Component{
  state={
    battery:60
  }
  render(){
    const {battery} = this.state
    return(
          <BatteryContext.Provider value = {battery}>
            <button
              type="button"
              onClick = {()=>{
                this.setState({
                  battery:battery - 1
                })
              }}
            >
               button
            </button>
            <Middle></Middle>
          </BatteryContext.Provider>
      );
    }
  }


export default App;
// context与contexttype的用法