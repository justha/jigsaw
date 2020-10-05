import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
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
            <Link className="link__toPuzzleDetails" to={{pathname: `/relationships`}}>
                {/* <div className="space__name">{space.name}</div>
                <br></br> */}
            
                <div className="space__title">Dimensions</div>
                <div className="space__dimensions">{space.lengthLong} in. x {space.lengthShort} in.</div>
                <br></br>

                <div className="space__title">Type</div>
                <div className="space__custom">{
                    (space.custom === true) 
                    ? `Custom` 
                    : `Standard`
                }
                </div>
                
                <br></br>
            </Link>

            
            {/* 
            if standard space: user can delete relationship obj (only)
            if custom space: user can edit space OR delete space obj (also removes relationship obj)*/}
            <div>
                {
                    (space.custom === true)
                    ? 
                    (
                        <>
                                <button className="btn btn--primary" id="btnDeleteRelationship"
                                    onClick={() => {
                                        deleteRelationship(relationship.id)
                                        deleteSpace(space.id)
                                        props.history.push("/relationships")
                                    }
                                }
                                >X</button> 
                                
                                <button 
                                    className="btn btn--primary" 
                                    id="btnSpaceEdit" 
                                    onClick={() => {
                                        props.history.push(`/spaces/edit/${space.id}`)
                                    }}
                                    >✎</button> 
                            </>
                        )
                        : 
                        (
                            <button className="btn btn--primary" id="btnDeleteRelationship"
                            onClick={() => {
                                deleteRelationship(relationship.id)
                                props.history.push("/relationships")
                            }
                        }
                        >X</button> 
                        )
                    }
            </div>

             
            {/* <button 
                className="btn btn--primary" 
                id="btnSpaceBack" 
                onClick={() => {props.history.push(`/relationships`)}}
            >⇦</button> */}

        </section>        
    )
    
}