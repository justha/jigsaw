import React, { useContext, useEffect, useState } from "react"
import { RelationshipContext } from "./RelationshipProvider"
import { SpaceContext } from "../space/SpaceProvider"
import "./Relationship.css"



export const RelationshipDetail = (props) => {
    const { relationships, getRelationships, deleteRelationship } = useContext(RelationshipContext)
    const { spaces, getSpaces, deleteSpace } = useContext(SpaceContext)

    const [relationship, setRelationship] = useState({})
    const [space, setSpace] = useState({})

    useEffect(() => {
        getRelationships()
        getSpaces()
    }, [])

    useEffect(() => {
        const relationship = relationships.find (r => r.id === parseInt(props.match.params.relationshipId)) || {}
        setRelationship(relationship)
    }, [relationships])

    useEffect (() => {
        const space = spaces.find(s => s.id === relationship.spaceId) || {}
        setSpace(space)
    }, [spaces])

    return (
        <section className="relationship__detail">
            <div className="space__name">{space.name}</div>
            <br></br>
           
            <div className="space__title">Dimensions</div>
            <div className="space__dimensions">{space.length} in. x {space.width} in.</div>
            <br></br>

            <div className="space__title">Type</div>
            <div className="space__custom">{
                (space.custom === true) 
                ? `Custom` 
                : `Standard`
                }
            </div>
            <br></br>
            

            {/* 
            if standard space: user can delete relationship obj (only)
            if custom space: user can edit space OR delete space obj (also removes relationship obj)*/}
            <div>
                {
                    (space.custom === false)
                    ? 
                        (
                            <button className="btn btn--primary" id="btnDeleteRelationship"
                                onClick={() => {
                                    deleteRelationship(relationship.id)
                                    props.history.push("/relationships")
                                }
                                }
                            >X</button> 
                        )
                    : 
                        (
                            <>
                            <button 
                            className="btn btn--primary" 
                            id="btnSpaceEdit" 
                            onClick={() => {
                                props.history.push(`/spaces/edit/${space.id}`)
                            }}
                            >✎</button> 

                            <button className="btn btn--primary" id="btnDeleteRelationship"
                                onClick={() => {
                                    deleteSpace(space.id)
                                    deleteRelationship(relationship.id)
                                    props.history.push("/relationships")
                                }
                                }
                            >X</button> 
                            </>
                        )
                        
                }
            </div>
        </section>
    )

}