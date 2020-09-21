// import React, { useContext, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { RelationshipContext } from "../relationship/RelationshipProvider"
// import { SpaceContext } from "./SpaceProvider"
// import { Space } from "./Space"
// import "./Space.css"



// export const SpaceList = (props) => {
//     const { relationships, getRelationships } = useContext(RelationshipContext)
//     const { spaces, getSpaces } = useContext(SpaceContext)
    
//     const activeId = parseInt(localStorage.getItem("app_user")) 
//     const relationshipsActiveUser = relationships.filter(r => r.userId === activeId)
    


//     useEffect(() => {
//         console.log("SpaceList: Initial render before data")
//         getRelationships()
//         getSpaces()
//     }, [])
   
        
//     return (
//         <>
//             <h3>My Workspaces</h3>
//             <div className="spaceList">
//                 {
//                     spaces.map(s => {
//                         return (
//                                 <Link 
//                                     key={s.id}
//                                     className="link__toSpaceDetails" 
//                                     to={{
//                                         pathname: `/spaces/${s.id}`,
//                                         state: { chosenSpace: s }
//                                     }}
//                                 >
//                                     <Space space={s} />
//                                     <br></br>

//                                 </Link>
//                         )

//                     })
//                 }
//             </div> 


//             <button className="btn btn--primary" id="btnAddSpace"
//                 onClick={() => {props.history.push("/spaces/relationships/create")}}
//             >
//             +
//             </button>  
          

//         </>
//     )





//         // const htmlRepresentations = 
//     //     filteredRelationships.map(r => {

//     //         const spaceObj = spaces.find(s => s.id === r.spaceId)
//     //         console.log(spaceObj)

//     //         return (
//     //             <>
//     //                 <h3>My Workspaces</h3>
//     //                 <div className="spaceList">
//     //                     {
//     //                         spaces.map(s => {
//     //                             return (
//     //                                     <Link 
//     //                                         key={s.id}
//     //                                         className="link__toSpaceDetails" 
//     //                                         to={{
//     //                                             pathname: `/spaces/${s.id}`,
//     //                                             state: { chosenSpace: s }
//     //                                         }}
//     //                                     >
//     //                                         <Space space={s} />
//     //                                         <br></br>
        
//     //                                     </Link>
//     //                             )
        
//     //                         })
//     //                     }
//     //                 </div> 
        
        
//     //                 <button className="btn btn--primary" id="btnAddSpace"
//     //                     onClick={() => {props.history.push("/spaces/relationships/create")}}
//     //                 >
//     //                 +
//     //                 </button>  
                  
//     //             </>
//     //         )

             

//     //     })

// }