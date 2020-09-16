import React from "react"
import "./Auth.css"


export const Logout = (props) => {

    const handleLogout = (props) => {
        localStorage.clear()
        .then(() => props.history.push("/login"))    //routes user back to login page
    }

    return (
        <>
            <form className="logoutForm">
                <div>Are you sure?</div>
                
                <button className="btn btn--primary"
                onClick={() => handleLogout()}
                >
                Log Out
                </button>
            </form>
        </>
    )
}
