import React from "react"
import { Route, Redirect } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Header } from "./header/Header"
import "./Jigsaw.css"


export const Jigsaw = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("app_user")) {
                return (
                    <>
                        <Route render={props => <Header {...props} />} />
                        <Route render={props => <NavBar {...props} />} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />
        

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />

    </>
)