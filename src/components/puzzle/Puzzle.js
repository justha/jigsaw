import React, { useContext} from "react"
import { Link } from "react-router-dom"
import { PuzzleContext } from "./PuzzleProvider"
import "./Puzzle.css"


export const Puzzle = ({ puzzle }) => {
    const { deletePuzzle } = useContext(PuzzleContext)

    return (
        <section className="puzzle">
            <div className="puzzle__name"><b>{puzzle.name}</b></div>
            <div className="puzzle__brand">by brand {puzzle.brandId}</div>

            <Link to={`/puzzles/${puzzle.id}`}>
                <button className="btn btn--primary" id="btnPuzzleDetail">ℹ︎</button>
            </Link>
        </section>
    )

}