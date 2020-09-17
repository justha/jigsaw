import React, { useState } from "react"

export const DustContext = React.createContext()

export const DustProvider = (props) => {
    const [dusts, setDusts] = useState([])

    const getDusts = () => {
        return fetch("http://localhost:8088/dusts")
            .then(res => res.json())
            .then(setDusts)
    }


    return (
        <DustContext.Provider value={{
            dusts, getDusts
        }}>
            {props.children}
        </DustContext.Provider>
    )
}
