import React, { useState } from "react"

export const TextureContext = React.createContext()

export const TextureProvider = (props) => {
    const [textures, setTextures] = useState([])

    const getTextures = () => {
        return fetch("http://localhost:8088/textures")
            .then(res => res.json())
            .then(setTextures)
    }


    return (
        <TextureContext.Provider value={{
            textures, getTextures
        }}>
            {props.children}
        </TextureContext.Provider>
    )
}
