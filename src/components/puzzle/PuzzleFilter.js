import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { RelationshipContext } from "../relationship/RelationshipProvider"
import { PuzzleContext } from "../puzzle/PuzzleProvider"
import { SpaceContext } from "../space/SpaceProvider"
import { StatusContext } from "../status/StatusProvider"


export const PuzzleFilter = () => {
    const { relationships, getRelationships } = useContext(RelationshipContext)
    const { setChosenStatusId, chosenSpaceId, setChosenSpaceId, setChosenSpaceSize } = useContext(PuzzleContext)
    const { spaces, getSpaces } = useContext(SpaceContext)
    const { statuses } = useContext(StatusContext)   
    
    
    useEffect(() => {
        getRelationships()
        getSpaces()
    }, [])
    
    
    const activeId = parseInt(localStorage.getItem("app_user"))
    const relationshipsActiveUser = relationships.filter(r => r.userId === activeId)


    const spaceName = (relationshipObj) => {
        const matchingSpaceObj = spaces.find(s => s.id === relationshipObj.spaceId) || {}
        return (
            <option 
                key={matchingSpaceObj.id} 
                value={matchingSpaceObj.id}
            > 
                {matchingSpaceObj.name}
            </option> 
        )
    }

    useEffect(() => {
        console.log('chosenSpaceId >>',chosenSpaceId)

        const spaceDimensions = 
        chosenSpaceId === 0
            ? []
            : ``
        
        setChosenSpaceSize(spaceDimensions)

    }, [chosenSpaceId])

    
    return (
        <>
            <div className="searchbar">

                <section className="searchbar__container">
                    <article className="searchbar__status">
                        <button
                            className="btn btn--searchbar"
                            value="0"
                            onClick={clickEvent => {setChosenStatusId(parseInt(clickEvent.target.value))}}
                        >
                            All
                        </button>

                        {statuses.map(s => {
                            return (
                                <button 
                                    className="btn btn--searchbar" 
                                    value={s.id}
                                    onClick={clickEvent => {setChosenStatusId(parseInt(clickEvent.target.value))}}
                                    >
                                        {s.desc}
                                </button>
                            )
                        })}
                    </article>
                    

                    <article className="searchbar__space">
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
                                    value={relationshipsActiveUser.spaceId}
                                    onChange={changeEvent => {setChosenSpaceId(parseInt(changeEvent.target.value))}}
                                >
                                    <option value="0">select a workspace...</option>
                                    {                                   
                                        relationshipsActiveUser.map(r => spaceName(r))
                                    }
                                    {/* <option 
                                        value="add"
                                        onClick={(props) => {props.history.push("/relationships/create")}}
                                    >
                                    add a new workspace
                                    </option> */}
                                </select> 
                            </div>
                        </fieldset>
                    </article>

                </section>                
            </div>

        </>
    )

}