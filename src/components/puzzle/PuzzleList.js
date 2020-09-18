import React, { useContext, useEffect, useState } from "react"
import { PuzzleContext } from "./PuzzleProvider"
import { Puzzle } from "./Puzzle";
import "./Puzzle.css"

export const PuzzleList = (props) => {
    
    const { puzzles, getPuzzles } = useContext(PuzzleContext)

    
    useEffect(() => {
        console.log("PuzzleList: Initial render before data")
        getPuzzles()
    }, [])


    return (
        <>
            <button className="btn btn--primary" id="btnAddPuzzle"
                onClick={() => {props.history.push("/puzzles/create")}}
            >
            +
            </button>  


            <div className="puzzleList">

                {puzzles.map(p => 
                    <Puzzle key={p.id} puzzle={p} />
                )}
            </div> 


            {/* <div className="puzzleList">
                {puzzles.map(puzzle => {
                    return (
                        <article className="puzzle">
                            <div><b>{puzzle.name}</b></div>
                            <div>by {puzzle.brandId}</div>
                            <button className="btn btn--primary" id="btnPuzzleDetail">ℹ︎</button>
                        </article>                        
                    )
                })}
            </div>  */}
            

        </>
    )

}