import React, { useContext, useRef, useEffect, useState} from "react"
import { SpaceContext } from "./SpaceProvider"
// import { RelationshipContext } from "../relationship/RelationshipProvider"
import "./Space.css"

export const SpaceForm = (props) => {

    const { addSpace, spaces, editSpace, getSpaces } = useContext(SpaceContext)
    // const { relationships, editRelationship, getRelationships, addRelationship } = useContext(RelationshipContext)

    const [ space, setSpace ] = useState({})
    // const [ relationship, setRelationship ] = useState({})

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
        // getRelationships()
    }, [])


    useEffect (() => {
        getSpaceInEditMode()
    }, [spaces])
    
    
    const name = useRef(null)
    const length = useRef(null)
    const width = useRef(null)
    const activeId = parseInt(localStorage.getItem("app_user"))
    // const relationshipSpace = useRef(null)


    const createNewSpace = () => {

        if (editMode){
            editSpace({
                name: name.current.value,
                length: parseInt(length.current.value),
                width: parseInt(width.current.value),
                custom: true,
                id: space.id

            })
        }
        else{
            addSpace({
                name: name.current.value,
                length: parseInt(length.current.value),
                width: parseInt(width.current.value),
                custom: true
            })
            .then(() => props.history.push("/relationships"))
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
                        ref={name} required autoFocus 
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
                            ref={length} required autoFocus 
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
                            ref={width} required autoFocus 
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