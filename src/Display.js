import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
export default function Display(props) {
  return (
    <>
    <br></br>
    <div>First Name is : {props.firstName}</div>
    <div>Middle Name is : {props.middleName}</div>
    <div>Last Name is : {props.lastName}</div>
    <div>Gender is : {props.gender}</div>
    <div>Ph no is : {props.phno}</div>
    <div>Email is : {props.email}</div>
    <br></br>
    <Link to='/'><button type='button'>Back</button></Link>
    </>
  )
}
