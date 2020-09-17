import React, { useState } from "react"

export const BoxContext = React.createContext()

export const BoxProvider = (props) => {
    const [boxes, setBoxes] = useState([])

    const getBoxes = () => {
        return fetch("http://localhost:8088/boxes")
            .then(res => res.json())
            .then(setBoxes)
    }


    return (
        <BoxContext.Provider value={{
            boxes, getBoxes
        }}>
            {props.children}
        </BoxContext.Provider>
    )
}
