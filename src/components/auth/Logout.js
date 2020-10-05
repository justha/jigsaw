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
                <div>
                    See you again soon.<br></br>
                    Happy puzzling! 
                </div>
                
                <Button className="btn btn--primary"
                onClick={() => handleLogout()}
                >
                Log Out
                </Button>
            </form>
        </>
    )
}
