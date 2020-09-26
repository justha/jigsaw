import React, { useContext, useEffect, useState } from "react"
import { RelationshipContext } from "../relationship/RelationshipProvider"
import { PuzzleContext } from "../puzzle/PuzzleProvider"
import { SpaceContext } from "../space/SpaceProvider"
import { StatusContext } from "../status/StatusProvider"


export const PuzzleFilter = () => {
    const { relationships, getRelationships } = useContext(RelationshipContext)
    const { chosenStatus, setChosenStatus, chosenSpace, setChosenSpace } = useContext(PuzzleContext)
    const { spaces, getSpaces } = useContext(SpaceContext)
    const { statuses } = useContext(StatusContext)   
    
    useEffect(() => {
        getRelationships()
        getSpaces()
    }, [])
    
    
    const activeId = parseInt(localStorage.getItem("app_user"))
    const relationshipsActiveUser = relationships.filter(r => r.userId === activeId)

    const matchingSpaceObj = (relationshipObj) => {
        const relSpace = spaces.find(s => s.id === relationshipObj.spaceId) || {}
        return (
            <option 
                key={relSpace.id} 
                value={relSpace.id}
            > 
                {relSpace.name}
            </option> 
        )
    }
    
    // sets deimension terms when dropdown selection is chosen
    const handleChange = (event) => {
        const chosenSpaceId = parseInt(event.target.value)
        const matchingSpaceObj = spaces.find(s => s.id === chosenSpaceId) || {}
        setChosenSpace(matchingSpaceObj)
        // console.log("chosenSpaceId >> event.target.value >>", parseInt(event.target.value))
        console.log("chosenSpace.id", chosenSpace.id)
    }



    return (
        <>
            <section className="searchbar">

                <div className="searchbar__containerFilters">
                    <div className="searchbar__viewByStatus">
                        {statuses.map(s => {
                            return (
                                <button 
                                    className="btn btn--searchbar" 
                                    value={s.id}
                                    onClick={clickEvent => {setChosenStatus(parseInt(clickEvent.target.value))
                                    }}
                                    >
                                        {s.desc}
                                </button>
                            )
                        })}
                    </div>
                </div>
                    

                <article className="searchbar__viewBySpace">
                    <fieldset>
                        <div className="form--group">
                            <label htmlFor="spaceId">
                                Will it fit?
                            </label>
                            <select 
                                className="form--control" 
                                // ref={space} 
                                required
                                id="spaceId" 
                                proptype="int"
                                name="spaceId" 
                                // value={relationship.spaceId}
                                onChange={handleChange}
                            >
                                <option value="0">select to view</option>
                                {                                   
                                    relationshipsActiveUser.map(r => matchingSpaceObj(r))
                                }
                            </select>  
                        </div>
                    </fieldset>
                </article>
                
            </section>

        </>
    )

}