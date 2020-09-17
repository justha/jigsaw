import React, { useState } from "react"

export const StatusContext = React.createContext()

export const StatusProvider = (props) => {
    const [statuses, setStatuses] = useState([])

    const getStatuses = () => {
        return fetch("http://localhost:8088/statuses")
            .then(res => res.json())
            .then(setStatuses)
    }


    return (
        <StatusContext.Provider value={{
            statuses, getStatuses
        }}>
            {props.children}
        </StatusContext.Provider>
    )
}
