import React from "react"
import { Route, Redirect } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./Jigsaw.css"


export const Jigsaw = () => (
    <>
        <section>
            <h1>puzzl</h1>
            <small>an app for avid jigsaw puzzlers</small>
            <br></br>
            {/* <small>log. plan. trade.</small> */}
        </section>
        
        
        <Route render={() => {
            if (localStorage.getItem("application_user")) {
                return (
                    <>
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


// export const Jigsaw = () => (
//     <>
//         <div>
//             <h1>puzzl</h1>
//             <small>an app for avid jigsaw puzzlers</small>
//             <br></br>
//             {/* <small>log. plan. trade.</small> */}
//         </div>

//          <NavBar />
//          <ApplicationViews />

//      </>
//  )