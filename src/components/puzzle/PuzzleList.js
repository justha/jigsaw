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


    useEffect(() => {
        console.log("PuzzleList: Puzzle state changed")
        console.log(puzzles)
    }, [puzzles])


    return (
        <div className="puzzles">
        {
            puzzles.map(puzzle => <Puzzle key={puzzle.id} puzzle={puzzle} />)
        }
        </div>
    )
}