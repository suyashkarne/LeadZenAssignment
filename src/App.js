import React, { useState } from 'react'
import Header from'./Header'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Lists from './Lists';


export default function App() {
  return (
    <div style={{backgroundColor:''}}>
      <Header></Header>
    </div>
  )
}
