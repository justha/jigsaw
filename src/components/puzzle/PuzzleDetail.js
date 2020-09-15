// import React, { useContext, useEffect, useState } from "react"
// import { PuzzleContext } from "./PuzzleProvider"
// import "./Puzzle.css"


// export const PuzzleDetail = (props) => {
//     const {deletePuzzle, getPuzzleById} = useContext(PuzzleContext)
//     const [puzzle, setPuzzle] = useState({ brand: {}, box: {}, texture: {}, dust: {}, status: {}})

//     useEffect(() => {

//         const puzzleId = parseInt(props.match.params.puzzleId)

//         getPuzzleById(puzzleId).then(setPuzzle)

//     }, [])

    
//     return (
//         <section className="puzzle">
//             <h4 className="puzzle__name">{puzzle.name}</h4>
//             <small className="puzzle__brand">Brand: {puzzle.brandId}</small>
//             <br></br>
//             <div className="puzzle__count">Pieces: {puzzle.count}</div>
//             <div className="puzzle__dimensions">Dimensions: {puzzle.length} in. by {puzzle.width} in.</div>
//             <div className="puzzle__box">Box Size: {puzzle.boxId}</div>
//             <div className="puzzle__poster">Poster Included: {puzzle.poster}</div>
//             <div className="puzzle__texture">Texture: {puzzle.textureId}</div>
//             <div className="puzzle__dust">Puzzledust Rating: {puzzle.dustId}</div>
//             <div className="puzzle__note">Note: {puzzle.note}</div>
//             <div className="puzzle__assembled">Assembled: {puzzle.assembled}</div>
//             <div className="puzzle__status">Status: {puzzle.statusId}</div>
//             <div className="puzzle__favorite">Favorite: {puzzle.favorite}</div>

//         <button className="btn btn--primary">Edit</button>
        
//         <button className="btn btn--primary" 
//             onClick={() => 
//                 deletePuzzle(puzzle.id)
//                 .then(() => {props.history.push("/puzzles")})
//             }
//         >
//         Delete
//         </button>

//         </section>
//     )
// }