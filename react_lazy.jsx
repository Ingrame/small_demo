import React, {Component, lazy, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
const  About = lazy(()=>import('./about.jsx'))

class App extends Component{
  state = {
    hasError:false
  }
  // 捕获到错误后会触发该方法
  componentDidCatch(){
    this.setState({
      hasError:true
    })
  }
  render(){
    if(this.state.hasError){
      return <div>error</div>
    }
    return(
        <div>
          <Suspense fallback={<div>loading</div>}>
            <About></About>
          </Suspense>
        </div>
    )
  }
}


export default App;



// react中 lazy与Suspense 的使用



