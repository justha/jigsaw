import React, { useContext, useRef, useEffect, useState} from "react"
import { RelationshipContext } from "./RelationshipProvider"
import { SpaceContext } from "../space/SpaceProvider"
import "./Relationship.css"

export const RelationshipForm = (props) => {

    const { addRelationship, relationships, editRelationship, getRelationships } = useContext(RelationshipContext)
    const { spaces, getSpaces } = useContext(SpaceContext)

    const [ relationship, setRelationship ] = useState({})

    const editMode = props.match.params.hasOwnProperty("relationshipId")

    const handleControlledInputChangeRelationship = (event) => {
        const newRelationship = Object.assign({}, relationship)
        newRelationship[event.target.name] = event.target.value 
        setRelationship(newRelationship)
    }
    
    // const getRelationshipInEditMode = () => {
    //     if (editMode) {
    //         const relationshipId = parseInt(props.match.params.relationshipId)
    //         const selectedRelationship = relationships.find(r => r.id === relationshipId) || {}
    //         setRelationship(selectedRelationship)
    //     }
    // }
    
    
    useEffect(() => {
        getRelationships()
        getSpaces()
    }, [])
    

    // useEffect (() => {
    //     getRelationshipInEditMode()
    // }, [relationships])
    

    const relationshipSpace = useRef(null)
    const activeId = parseInt(localStorage.getItem("app_user"))


    const createNewRelationship = () => {
        const relationshipId = parseInt(relationshipSpace.current.value)

        if (
            relationshipId === 0
        )
            {window.alert("Select a puzzle board from the drop-down or create a custom space")}
        // else {
            // if (editMode) {
            //     editRelationship({
                //         userId: activeId, 
            //         spaceId: parseInt(relationshipSpace.current.value),
            //         id: relationship.id
            //     })
            //     .then(() => props.history.push("/spaces"))
            // }
            else {
                addRelationship({
                    userId: activeId,
                    spaceId: parseInt(relationshipSpace.current.value)
                })
                .then(() => props.history.push("/spaces"))
            }
        // }
    }

    return (
        <form className="relationshipForm">
            <h3 className="relationshipForm__title">Add Puzzle Boards to Your Workspace</h3>

            <article className="addPuzzleboard">
                <fieldset>
                    <div className="form--group">
                        <label htmlFor="spaceId">
                            Select a standard puzzle board
                        </label>
                        <select 
                            className="form--control" 
                            ref={relationshipSpace} required
                            id="spaceId" 
                            proptype="int"
                            name="spaceId" 
                            value={relationship.spaceId}
                            onChange={handleControlledInputChangeRelationship}
                        >
                            <option value="0">...</option>{

                                spaces.filter(s => s.custom === false)
                                .map(s => (
                            <option key={s.id} value={s.id}>
                                {s.name}:  {s.length} x {s.width} (inches)
                            </option>))}    
                        </select>  
                    </div>
                </fieldset>

                <button type="submit" className="btn btn--primary"
                    onClick={evt => {
                        evt.preventDefault() 
                        createNewRelationship()
                    }}
                >
                Add
                </button>

            </article>
            <br></br>

            <div>or</div>
            <br></br>


            <button className="btn btn--primary" id="btnAddSpace"
                onClick={() => {props.history.push("/spaces/create")}}
            >
            Create a Custom Space
            </button>  

        </form>
    )

}