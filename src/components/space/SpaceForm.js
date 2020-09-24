import React, { useContext, useRef, useEffect, useState} from "react"
import { SpaceContext } from "./SpaceProvider"
import { RelationshipContext } from "../relationship/RelationshipProvider"
import { ImageContext } from "../image/ImageProvider"
import "./Space.css"

export const SpaceForm = (props) => {

    const { addSpace, spaces, editSpace, getSpaces } = useContext(SpaceContext)
    const { uploadImage, loading, imageURL } = useContext(ImageContext)
    const { addRelationship } = useContext(RelationshipContext)

    const [ space, setSpace ] = useState({})


    const editMode = props.match.params.hasOwnProperty("spaceId")


    const handleControlledInputChange = (event) => {
        const newSpace = Object.assign({}, space)
        newSpace[event.target.name] = event.target.value 
        setSpace(newSpace)
    }

    const getSpaceInEditMode = () => {
        if (editMode) {
            const spaceId = parseInt(props.match.params.spaceId)
            const selectedSpace = spaces.find(s => s.id === spaceId) || {}
            setSpace(selectedSpace)
        }
    }
    
    useEffect(() => {
        getSpaces()
    }, [])


    useEffect (() => {
        getSpaceInEditMode()
    }, [spaces])
    
    
    const name = useRef(null)
    const length = useRef(null)
    const width = useRef(null)
    const activeId = parseInt(localStorage.getItem("app_user"))

    // sets form cursor to first input field 
    useEffect(() => {
        name.current.focus()
    }, [name])


    const createNewSpace = () => {
        const spaceName = (name.current.value)
        const spaceLength = parseInt(length.current.value)
        const spaceWidth = parseInt(width.current.value)

        if (
            spaceName === "" || 
            isNaN(spaceLength) === true ||
            isNaN(spaceWidth) === true
            )
            {window.alert("Please complete all fields and confirm that dimensions are entered as numbers")}
        else {
            if (editMode){
                editSpace({
                    name: name.current.value,
                    length: parseInt(length.current.value),
                    width: parseInt(width.current.value),
                    image: imageURL,
                    custom: true,
                    id: space.id
                })
                .then(() => props.history.push("/relationships"))
            }
            else {
                addSpace({
                    name: name.current.value,
                    length: parseInt(length.current.value),
                    width: parseInt(width.current.value),
                    image: imageURL,
                    custom: true
                })
                .then(res => res.json()) 
                .then(parsedObj => {
                    addRelationship({
                        userId: activeId,
                        spaceId: parsedObj.id
                    })
                })
                .then(() => props.history.push("/relationships"))
            }
        }


    }



    return (
        <form className="spaceForm">
            <h3 className="spaceForm__title">{editMode ? "Edit Your Custom Space" : "Add a Custom Space"}</h3>


            <fieldset>
                <div className="form--group">
                    <label htmlFor="name">Space Name or Description*: </label>
                    <input 
                        className="form--control" 
                        ref={name} 
                        required 
                        autoFocus 
                        id="name" 
                        proptype="varchar"
                        type="text" 
                        placeholder="input desc" 
                        defaultValue={space.name} 
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>


            <fieldset>
                <div className="form--group">
                    <label htmlFor="spaceDimensions">
                        Space Dimensions*: 
                    </label>
                    <div className="form__spaceDimensionsInputGroup">
                        <input 
                            className="form--control" 
                            ref={length} 
                            required 
                            autoFocus 
                            id="spaceLength" 
                            proptype="int"
                            type="text" 
                            // placeholder="length" 
                            defaultValue={space.length} 
                            onChange={handleControlledInputChange}
                        />
                        <div>x</div>
                        <input 
                            className="form--control" 
                            ref={width} 
                            required 
                            autoFocus 
                            id="spaceWidth" 
                            proptype="int"
                            type="text" 
                            // placeholder="width" 
                            defaultValue={space.width} 
                            onChange={handleControlledInputChange}
                        />
                        <div>inches</div>
                    </div>
                </div>
            </fieldset>


            <fieldset>
                <div className="form--group">
                    <label htmlFor="image">Upload Image: </label>
                    <input 
                        className="form--control" 
                        // ref={image}
                        autoFocus 
                        id="image" 
                        name="file"
                        type="file"  // renders "Choose File" button & file input field
                        onChange={uploadImage}
                    />
                        {loading 
                        ? (<h4>Loading...</h4>)
                        : (<img src={imageURL} style={{width: `300px`}} />)
                        }
                        {(editMode) 
                        ? (<img src={space.image} style={{width: `300px`}} />)
                        : ``
                        }
                </div>
            </fieldset>


            <br></br>
            <br></br>

            <button type="submit" className="btn btn--primary"
                onClick={evt => {
                    evt.preventDefault() 
                    createNewSpace()
                }}
            >
            Save
            </button>

        </form>

    )





}