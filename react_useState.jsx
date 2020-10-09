import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function APP (){
 const [count, setCount] = useState(0)
  return (
    <button
      type="button"
      onClick={()=>{setCount(count + 1)}}
    >Click({count})</button>
  )
}


export default APP;
