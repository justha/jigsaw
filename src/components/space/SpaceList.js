import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { RelationshipContext } from "../relationship/RelationshipProvider"
import { SpaceContext } from "./SpaceProvider"
import { Space } from "./Space"
import "./Space.css"

export const 


export const SpaceList = (props) => {
    const { relationships, getRelationships } = useContext(RelationshipContext)
    const { spaces, getSpaces } = useContext(SpaceContext)
    
    const activeId = parseInt(localStorage.getItem("app_user")) 
    const filteredRelationships = relationships.filter(r => r.userId === activeId)
    // let spacesActiveUser = []
    
    const spacesActiveUser = filteredRelationships.map(r => {
        const spaceObj = spaces.find(s => s.id === r.spaceId)
 
    })
 

    // const spacesActiveUser = (relationships, spaces) => {
    //     const spaceIdsActiveUser = 
    //         relationships.filter(r => r.userId === activeId)
    //         .map(r => r.spaceId)

    //     const spacesActiveUser = (spaceIdsActiveUser) => {spaces.map(s => s.spaceId === spaceIdsActiveUser)}

    //     console.log(spaceIdsActiveUser)
    //     console.log(spacesActiveUser)

    // }
    // spacesActiveUser(relationships, spaces)
    





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
                                <Link 
                                    className="link__toSpaceDetails" 
                                    key={s.id}
                                    to={{
                                        pathname: `/spaces/${s.id}`,
                                        state: { chosenSpace: s }
                                    }}
                                >
                                    <Space space={s} />
                                    <br></br>

                                </Link>
                        )

                    })
                }
            </div> 


            <button className="btn btn--primary" id="btnAddSpace"
                onClick={() => {props.history.push("/spaces/relationships/create")}}
            >
            +
            </button>  
          

        </>
    )

}