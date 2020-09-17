import React, { useContext, useEffect, useState } from "react"
import { PuzzleContext } from "./PuzzleProvider"
import { BrandContext } from "../brand/BrandProvider"
import { StatusContext } from "../status/StatusProvider"
import { Puzzle } from "./Puzzle"
import "./Puzzle.css"

export const PuzzleList = (props) => {
    
    const { puzzles, getPuzzles, deletePuzzle } = useContext(PuzzleContext)
    const [puzzle, setPuzzle] = useState ({ brand: {}, status: {}})


    useEffect(() => {
        console.log("PuzzleList: Initial render before data")
        getPuzzles()
    }, [])


    // "Add Puzzle" button below
    return (
        <>
            <button className="btn btn--primary"
                onClick={() => {props.history.push("/puzzles/create")}}>
                    <b>
                        +
                    </b>
            </button>  


            <div className="puzzleList">
                {puzzles.map(puzzle => {
                    return (
                        <section className="puzzle">
                            <div><b>{puzzle.name}</b></div>
                            <div>by {puzzle.brandId}</div>
                            <div>status {puzzle.statusId}</div>

                            <button className="btn btn--primary"
                                onClick={() => {
                                    deletePuzzle(puzzle.id)
                                    .then(() => {props.history.push("/puzzles")})
                                }}
                            >
                                <b>
                                    –
                                </b>
                            </button>  

                        </section>

                        
                        )
                }
                )}
            </div> 


            {/* <div className="puzzleList">{puzzles.map(puzzle => <Puzzle key={puzzle.id} puzzle={puzzle} /> )}</div>  */}

        </>
    )

}