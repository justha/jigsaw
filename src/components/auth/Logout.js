import React from "react"
import "./Auth.css"
import { Button } from '@material-ui/core'


export const Logout = (props) => {

    const handleLogout = (props) => {
        localStorage.clear()
        .then(() => props.history.push("/login"))    //routes user back to login page
    }

    return (
        <>
            <form className="logoutForm">
                <div className="container__main">


                    <div className="container__mainTop"></div>

                    
                    <div className="container__mainMiddle">                        
                        <Button className="btn btn--primary"
                            size="small"
                            variant="outlined"
                            onClick={() => handleLogout()}
                        >
                        Log Out
                        </Button>
                    </div>
                    
                    
                    <div className="container__mainBottom">
                        See you again soon.
                        Happy puzzling! 
                    </div>
                </div>


            </form>
        </>
    )
}
