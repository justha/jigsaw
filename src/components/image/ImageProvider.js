import React, { useState } from "react"

export const ImageContext = React.createContext()

export const ImageProvider = (props) => {
    const [ loading, setLoading ] = useState(false)
    const [ imageURL, setImageURL ] = useState("")
    

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append(`file`, files[0])
        data.append(`upload_preset`, `puzl_app`)
        setLoading(true)
        const res = 
            await fetch(`https://api.cloudinary.com/v1_1/djxxamywv/image/upload`, {
                method: `POST`, 
                body: data
            })
        await res.json().then(
            parsedObj => {
                setImageURL(parsedObj.url)
                setLoading(false)
            })
    }


    return (
        <ImageContext.Provider value={{
            uploadImage, loading, setLoading, imageURL, setImageURL
        }}>
            {props.children}
        </ImageContext.Provider>
    )
}