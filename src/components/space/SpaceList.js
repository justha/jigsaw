import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { RelationshipContext } from "../relationship/RelationshipProvider"
import { SpaceContext } from "./SpaceProvider"
import { Space } from "./Space"
import "./Space.css"


export const SpaceList = (props) => {
    const { relationships, getRelationships } = useContext(RelationshipContext)
    const { spaces, getSpaces } = useContext(SpaceContext)
    
    //filter list by active user
    // const activeId = parseInt(localStorage.getItem("app_user"))
    // const spacesActiveUser = spaces.filter(s => s.userId === activeId)
    // let filteredSpaces = spacesActiveUser

    useEffect(() => {
        console.log("SpaceList: Initial render before data")
        getRelationships()
        getSpaces()
    }, [])
    
    
    return (
        <>
            <h3>My Workspaces</h3>

            <div className="spaceList">
                {
                spaces.map(s => {
                    return (
                        <article>

                            <Link className="link__toSpaceDetails" 
                                to={{
                                    pathname: `/spaces/${s.id}`,
                                    state: { chosenSpace: s }
                                }}
                            >
                                <Space key={s.id} space={s} />
                                <br></br>

                            </Link>

                        </article>   
                    )
                })}
            </div> 


            <button className="btn btn--primary" id="btnAddSpace"
                onClick={() => {props.history.push("/spaces/relationships/create")}}
            >
            +
            </button>  
          

        </>
    )

}