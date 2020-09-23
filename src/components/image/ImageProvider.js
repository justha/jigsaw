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

    const getImages = () => {
        return fetch("http://localhost:8088/images")
        .then(res => res.json())
        .then(setImages)
    }

    const addImage = image => {
        return fetch("http://localhost:8088/images", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(image)
        })
            .then(getImages)
    }

    const getImageById = (id) => {
        return fetch(`http://localhost:8088/images/${ id }?_expand=brand&_expand=status`)
            .then(res => res.json())
    }

    const deleteImage = imageId => {
        return fetch(`http://localhost:8088/images/${imageId}`, {
            method: "DELETE"
        })
            .then(getImages)
    }



    return (
        <ImageContext.Provider value={{
            images, setImages, loading, uploadImage, image, setImage
        }}>
            {props.children}
        </ImageContext.Provider>
    )

}
