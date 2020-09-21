// import React, { useContext, useRef, useEffect, useState} from "react"
// import { SpaceContext } from "./SpaceProvider"
// import { RelationshipContext } from "../relationship/RelationshipProvider"
// import "./Space.css"

// export const SpaceForm = (props) => {

//     const { addSpace, spaces, editSpace, getSpaces } = useContext(SpaceContext)
//     const { relationships, editRelationship, getRelationships } = useContext(RelationshipContext)

//     const [ space, setSpace ] = useState({})
//     const [ relationship, setRelationship ] = useState({})

//     const editMode = props.match.params.hasOwnProperty("spaceId")

//     const handleControlledInputChangeSpace = (event) => {
//         const newSpace = Object.assign({}, space)
//         newSpace[event.target.name] = event.target.value 
//         setSpace(newSpace)
//     }

//     const handleControlledInputChangeRelationship = (event) => {
//         const newRelationship = Object.assign({}, relationship)
//         newRelationship[event.target.name] = event.target.value 
//         setRelationship(newRelationship)
//     }

//     const getSpaceInEditMode = () => {
//         if (editMode) {
//             const spaceId = parseInt(props.match.params.spaceId)
//             const selectedSpace = spaces.find(s => s.id === spaceId) || {}
//             setSpace(selectedSpace)
//         }
//     }
    
//     const getRelationshipInEditMode = () => {
//         if (editMode) {
//             const relationshipId = parseInt(props.match.params.relationshipId)
//             const selectedRelationship = relationships.find(r => r.id === relationshipId) || {}
//             setSpace(selectedRelationship)
//         }
//     }
    
    
//     useEffect(() => {
//         getSpaces()
//         getRelationships()
//     }, [])


//     useEffect (() => {
//         getSpaceInEditMode()
//     }, [spaces])
    

//     useEffect (() => {
//         getRelationshipInEditMode()
//     }, [relationships])
    

//     const relationshipSpace = useRef(null)
//     const activeId = parseInt(localStorage.getItem("app_user"))


//     const createNewRelationship = () => {
//         const spaceId = parseInt(relationshipSpace.current.value)

//         if (
//             spaceId === 0
//         )
//             {window.alert("Please select a workspace")}
//         else {
//             if (editMode) {
//                 editRelationship({
//                     spaceId: parseInt(relationshipSpace.current.value),
//                     userId: activeId, 
//                     id: relationship.id
//                 })
//                 .then(() => props.history.push("/spaces"))
//             }
//             else {
//                 addRelationship({
//                     spaceId: parseInt(relationshipSpace.current.value),
//                     userId: activeId
//                 })
//                 .then(() => props.history.push("/puzspaceszles"))
//             }
//         }
//     }

//     return (
//         <form className="relationshipForm">
//             <h3 className="relationshipForm__title">{editMode ? "Edit Space" : "Add a Space"}</h3>

//             <fieldset>
//                 <div className="form--group">
//                     <label htmlFor="spaceId">
//                         Space: 
//                     </label>
//                     <select 
//                         className="form--control" 
//                         ref={relationshipSpace} required
//                         id="spaceId" 
//                         proptype="int"
//                         name="spaceId" 
//                         value={relationship.spaceId}
//                         onChange={handleControlledInputChangeRelationship}
//                     >
//                         <option value="0">select</option>
//                             {spaces.map(s => (
//                         <option key={s.id} value={s.id}>
//                             {s.name} {s.length} {s.width}</option>))}    
//                     </select>  
//                 </div>
//             </fieldset>

//         </form>

//     )





// }