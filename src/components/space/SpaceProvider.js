import React, { useState } from "react"

export const SpaceContext = React.createContext()

export const SpaceProvider = (props) => {
    const [spaces, setSpaces] = useState([])
    
    const getSpaces = () => {
        return fetch("http://localhost:8088/spaces")
        .then(res => res.json())
        .then(setSpaces)
    }
 
    const addSpace = space => {
        return fetch("http://localhost:8088/spaces", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(space)
        })
            .then(getSpaces)
    }

    const deleteSpace = spaceId => {
        return fetch(`http://localhost:8088/spaces/${spaceId}`, {
            method: "DELETE"
        })
            .then(getSpaces)
    }

    const editSpace = space => {
        return fetch(`http://localhost:8088/spaces/${space.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(space)
        })
            .then(getSpaces)
    }


    return (
        <SpaceContext.Provider value={{
            spaces, addSpace, getSpaces, setSpaces, deleteSpace, editSpace
        }}>
            {props.children}
        </SpaceContext.Provider>
    )
}