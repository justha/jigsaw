import React, { useState } from "react"

export const BrandContext = React.createContext()

export const BrandProvider = (props) => {
    const [brands, setBrands] = useState([])

    const getBrands = () => {
        return fetch("http://localhost:8088/brands")
            .then(res => res.json())
            .then(setBrands)
    }


    return (
        <BrandContext.Provider value={{
            brands, getBrands
        }}>
            {props.children}
        </BrandContext.Provider>
    )
}
