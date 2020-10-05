import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Header } from "./header/Header"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Puzl.css"


export const Puzl = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("app_user")) {
                return (
                    <>
                        <div className="container">
                            <div className="container__top">
                                <Route render={props => <Header {...props} />} />
                                <Route render={props => <NavBar {...props} />} />
                            </div>
                            <div className="container__bottom">
                                <Route render={props => <ApplicationViews {...props} />} />
                            </div>
                        </div>
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