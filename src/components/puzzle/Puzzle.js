import React from "react"
import { PuzzleDetail } from "./PuzzleDetail"
import "./Puzzle.css"



export const Puzzle = ({ puzzle }) => {

    const puzzleId = puzzle.id

    return (
        <section className="puzzle">
            <div className="puzzle__name"><b>{puzzle.name}</b></div>
            <div className="puzzle__brand">by {puzzle.brandId}</div>
            <div className="puzzle__status">Status {puzzle.statusId}</div>

            <button className="btn btn--primary"
                onClick={() => {
                    PuzzleDetail(puzzleId)
                }}
            >Details</button>

            <dialog></dialog>

        </section>
    )
}