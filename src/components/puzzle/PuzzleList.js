import React, { useContext, useEffect } from "react"
import { PuzzleContext } from "./PuzzleProvider"
import { Puzzle } from "./Puzzle"
import "./Puzzle.css"

export const PuzzleList = () => {
    
    const { puzzles, getPuzzles } = useContext(PuzzleContext)


    useEffect(() => {
        console.log("PuzzleList: Initial render before data")
        getPuzzles()
    }, [])


    return (
        <>
            <button className="btn btn--primary">Add</button>
            <div className="puzzleList">{puzzles.map(puzzle => <Puzzle key={puzzle.id} puzzle={puzzle} /> )}</div>
        </>
    )
}