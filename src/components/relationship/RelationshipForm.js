import React, { useContext, useRef, useEffect, useState} from "react"
import { RelationshipContext } from "./RelationshipProvider"
import { SpaceContext } from "../space/SpaceProvider"
import "./Relationship.css"
import { Button } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'



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
            <div className="container__main">

            <div className="container__mainTop">
                <h2 className="relationshipForm__title">Manage Your Workspace</h2>
            </div>    


            <div className="container__mainMiddle"></div>  
     
            
            <div className="container__mainBottom">
                <article className="container__addRelationship">
                    <fieldset>
                        <div className="form--group">
                            <label htmlFor="spaceId">
                                Standard puzzleboards:
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
                                <option value="0">select...</option>{

                                    spaces.filter(s => s.custom === false)
                                    .map(s => (
                                <option key={s.id} value={s.id}>
                                    {s.name} ({s.lengthLong} x {s.lengthShort} inches)
                                </option>))}    
                            </select>  
                        </div>
                    </fieldset>

                    <Button type="submit" className="btn btn--primary"
                        size="small"
                        variant="outlined"
                        startIcon={<SaveIcon />}
                        onClick={evt => {
                            evt.preventDefault() 
                            createNewRelationship()
                        }}
                    >
                        Save
                    </Button>

                    </article>
                    <br></br>
                    <br></br>

                    <div>or</div>
                    <br></br>
                    <br></br>


                    <Button className="btn btn--primary" id="btnAddSpace"
                        size="medium"
                        variant="outlined"
                        onClick={() => {props.history.push("/spaces/create")}}
                    >
                    Create a Custom One
                    </Button>  
                </div>          
            </div> 
        </form>
    )

}