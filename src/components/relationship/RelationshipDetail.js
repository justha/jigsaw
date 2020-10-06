import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { RelationshipContext } from "./RelationshipProvider"
import { SpaceContext } from "../space/SpaceProvider"
import "./Relationship.css"
import { IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'



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
            <div className="container__main">
                <div className="container__mainTop"></div>


                <div className="container__mainMiddle">
                    {/* 
                    if standard space: user can delete relationship obj (only)
                    if custom space: user can edit space OR delete space obj (also removes relationship obj)*/}
                    <div>
                        {
                            (space.custom === true)
                            ? 
                            (
                                <>
                                        <IconButton size="small" 
                                            // className="btn btn--primary" id="btnDeleteRelationship"
                                            onClick={() => {
                                                deleteRelationship(relationship.id)
                                                deleteSpace(space.id)
                                                props.history.push("/relationships")
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton> 
                                        
                                        <IconButton size="small" 
                                            // className="btn btn--primary" 
                                            id="btnSpaceEdit" 
                                            onClick={() => {props.history.push(`/spaces/edit/${space.id}`)}}
                                        >
                                            <EditIcon />
                                        </IconButton> 
                                    </>
                                )
                                : 
                                (
                                    <IconButton size="small" 
                                    className="btn btn--primary" id="btnDeleteRelationship"
                                    onClick={() => {
                                        deleteRelationship(relationship.id)
                                        props.history.push("/relationships")
                                    }
                                }
                                >
                                    <DeleteIcon />
                                </IconButton> 
                                )
                            }
                    </div>
    
                    
                    {/* <Fab size="small" 
                        className="btn btn--primary" 
                        id="btnSpaceBack" 
                        onClick={() => {props.history.push(`/relationships`)}}
                    >⇦</Fab> */}
                </div>
                
                
                <div className="container__mainBottom">                    
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
                </div>




                
            </div>

        </section>        
    )
    
}