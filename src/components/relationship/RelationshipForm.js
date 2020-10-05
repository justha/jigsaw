import React, { useContext, useRef, useEffect, useState} from "react"
import { RelationshipContext } from "./RelationshipProvider"
import { SpaceContext } from "../space/SpaceProvider"
import "./Relationship.css"

export const RelationshipForm = (props) => {

    const { relationships, getRelationships, addRelationship } = useContext(RelationshipContext)
    const { spaces, getSpaces } = useContext(SpaceContext)

    const [ relationship, setRelationship ] = useState({})

    const handleControlledInputChangeRelationship = (event) => {
        const newRelationship = Object.assign({}, relationship)
        newRelationship[event.target.name] = event.target.value 
        setRelationship(newRelationship)
    }
    
    
    useEffect(() => {
        getRelationships()
        getSpaces()
    }, [])
       

    const space = useRef(null)
    const activeId = parseInt(localStorage.getItem("app_user"))


    const createNewRelationship = () => {
        const spaceId = parseInt(space.current.value)
        
        const relationshipsActiveUser = relationships.filter(r => r.userId === activeId)
        const matchingObj = relationshipsActiveUser.filter(r => r.spaceId === spaceId)

        console.log(matchingObj.length)

        if (spaceId === 0){window.alert("Please select or create a custom space.")}
        else if (matchingObj.length > 0){window.alert("This has already been added. Please select another.")}
        else {
                addRelationship({
                    userId: activeId,
                    spaceId,
                    occupied: false
                })
                .then(() => props.history.push("/relationships"))
            }
    }


    return (
        <form className="relationshipForm">
            <h3 className="relationshipForm__title">Add Puzzle Boards to Your Workspace</h3>

            <article className="addRelationship">
                <fieldset>
                    <div className="form--group">
                        <label htmlFor="spaceId">
                            Select a standard puzzle board
                        </label>
                        <select 
                            className="form--control" 
                            ref={space} 
                            required
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