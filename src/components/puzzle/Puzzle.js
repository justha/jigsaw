import React from "react"
import "./Puzzle.css"

export const Puzzle = ({ puzzle }) => (
    <section className="puzzle">
        <h4 className="puzzle__name">{puzzle.name}</h4>
        <button className="button__editPuzzle">Edit</button>
        <button className="button__deletePuzzle">Delete</button>
    </section>
)