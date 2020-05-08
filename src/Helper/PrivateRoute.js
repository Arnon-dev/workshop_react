import React from 'react'
import { Redirect, Route } from "react-router-dom"
import Header from '../Components/Header'
import HomeTables from '../Components/HomeTables'
var authToken = true
export const PrivateRoute = ({ component: Component, ...rest }) => {
return (
    <Route {...rest} render={props => (
        authToken ?<div>
        <Header {...props}/>
        <Component {...props} /></div>
        : <Redirect to="/Login" />
    )}
    />
    )
}

export default PrivateRoute