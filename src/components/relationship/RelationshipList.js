import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { RelationshipContext } from "./RelationshipProvider"
import { SpaceContext } from "../space/SpaceProvider"
import { Relationship } from "./Relationship"
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'


export const RelationshipList = (props) => {
    const {relationships, getRelationships} = useContext(RelationshipContext)
    const {getSpaces} = useContext(SpaceContext)

    const activeId = parseInt(localStorage.getItem("app_user"))
    
    const relationshipsActiveUser = 
        relationships.filter(r => r.userId === activeId)
        .sort((a,b) => (a.spaceId > b.spaceId) ? 1 : -1)
    

    useEffect(() => {
        getRelationships()
        getSpaces()        
    }, [])


    return (
        <>
            <div className="container__main">

            <div className="container__mainTop">                
                <h2>My Workspaces</h2>

                <Fab className="btn btn--primary" id="btnAddSpace"
                    size="small" 
                    onClick={() => {props.history.push("/relationships/create")}}
                >
                    <AddIcon />
                </Fab> 
            </div>


            <div className="container__mainMiddle">
            </div>


            <div className="container__mainBottom">
                <section className="relationshipList">
                    {
                        relationshipsActiveUser.map(r => {
                            return (
                                <article key={r.id} className="relationship__item">
                                    <Relationship relationship={r} />
                                    <br></br>
                                </article>
                            )
                        })}
                </section>
            </div>
            </div>
            
        </>
    )




}