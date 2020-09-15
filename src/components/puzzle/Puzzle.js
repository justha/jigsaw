import React from "react"
import "./Puzzle.css"

export const Puzzle = ({ puzzle }) => (
    <section className="puzzle">
        <h3 className="puzzle__name">{puzzle.name}</h3>
    </section>
)