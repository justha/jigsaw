import React, { useState } from "react"


export const ImageContext = React.createContext()

export const ImageProvider = (props) => {
    const [ images, setImages ] = useState([])

    const [ image, setImage ] = useState({})
    const [ loading, setLoading ] = useState(false)

    // using React async/await
    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append(`file`, files[0])
        data.append(`upload_preset`, `puzl_app`)
        setLoading(true)
        const res = await fetch(
            `https://api.cloudinary.com/v1_1/djxxamywv/image/upload`,
            {
                method: `POST`, 
                body: data
            }
        )
        const file = await res.json()
        setImage(file.secure_url)
        setLoading(false)
    }


    return (
        <ImageContext.Provider value={{
            images, setImages, loading, uploadImage, image, setImage
        }}>
            {props.children}
        </ImageContext.Provider>
    )


}
