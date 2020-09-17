import React, { useContext, useEffect } from "react"
import { PuzzleContext } from "./PuzzleProvider"
import { BrandContext } from "../brand/BrandProvider"
import { StatusContext } from "../status/StatusProvider"
import { Puzzle } from "./Puzzle"
import "./Puzzle.css"

export const PuzzleList = (props) => {
    
    const { puzzles, getPuzzles } = useContext(PuzzleContext)
    const { brands, getBrands } = useContext(BrandContext)
    const { statuses, getStatuses } = useContext(StatusContext)


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

            <div className="puzzleList">{puzzles.map(puzzle => <Puzzle key={puzzle.id} puzzle={puzzle} /> )}</div> 
        </>
    )

}