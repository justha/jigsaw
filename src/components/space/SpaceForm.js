import React, { useContext, useRef, useEffect, useState} from "react"
import { SpaceContext } from "./SpaceProvider"
import { RelationshipContext } from "../relationship/RelationshipProvider"
import { ImageContext } from "../image/ImageProvider"
import "./Space.css"
import { Button, IconButton } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import PhotoCamera from '@material-ui/icons/PhotoCamera'


export const SpaceForm = (props) => {

    const { addSpace, spaces, editSpace, getSpaces } = useContext(SpaceContext)
    const { uploadImage, loading, imageURL, setImageURL } = useContext(ImageContext)
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
            setImageURL(selectedSpace.image)
            setSpace(selectedSpace)
        }
    }
    
    useEffect(() => {
        getSpaces()
        setImageURL("")
    }, [])


    useEffect (() => {
        getSpaceInEditMode()
    }, [spaces])
    
    
    const name = useRef(null)
    const length = useRef(null)
    const width = useRef(null)
    const activeId = parseInt(localStorage.getItem("app_user"))

    // positions cursor to initial input field 
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
                    name: spaceName,
                    lengthLong: Math.max(spaceLength, spaceWidth),
                    lengthShort: Math.min(spaceLength, spaceWidth),
                    ...(imageURL && {image: imageURL}),
                    custom: true,
                    id: space.id
                })
                .then(() => props.history.push("/relationships"))
            }
            else {
                addSpace({
                    name: spaceName,
                    lengthLong: Math.max(spaceLength, spaceWidth),
                    lengthShort: Math.min(spaceLength, spaceWidth),
                    ...(imageURL && {image: imageURL}),
                    custom: true
                })
                .then(res => res.json()) 
                .then(parsedObj => {
                    addRelationship({
                        userId: activeId,
                        spaceId: parsedObj.id, 
                        occupied: false
                    })
                })
                .then(() => props.history.push("/relationships"))
            }
        }


    }



    return (
        <form className="spaceForm">
            <div className="container__main">

                <div className="container__mainTop">
                    <h2 className="spaceForm__title">{editMode ? "Edit Your Custom Workspace" : "Add a Custom Workspace"}</h2>

                    <Button type="submit" className="btn btn--primary"
                        size="small"
                        variant="outlined"
                        startIcon={<SaveIcon />}
                        onClick={evt => {
                            evt.preventDefault() 
                            createNewSpace()
                        }}
                    >
                    Save
                    </Button>
                </div>       


                <div className="container__mainMiddle"></div> 


                <div className="container__mainBottom">
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
                                    defaultValue={space.lengthLong} 
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
                                    defaultValue={space.lengthShort} 
                                    onChange={handleControlledInputChange}
                                />
                                <div>in.</div>
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
                            <label htmlFor="image">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                                {                           
                                    editMode
                                    ?  
                                        (imageURL === ""
                                            ? ``
                                            : (
                                                <div>
                                                    <img src={imageURL} style={{width: `300px`}} />
                                                    <br></br>
                                                    <Button className="deleteImageBtn"
                                                        size="small"
                                                        variant="outlined"
                                                        startIcon={<DeleteIcon />}
                                                        onClick={() => {
                                                            setImageURL("")
                                                        }}
                                                    >
                                                        Image
                                                    </Button>
                                                </div>
                                            )
                                        )
                                    : 
                                        (loading 
                                        ? (<h4>Loading...</h4>)
                                        : (<img src={imageURL} style={{width: `300px`}} />)
                                        )
                                }
                        </div>
                    </fieldset>


                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>                 
            </div> 

        </form>
    )


}