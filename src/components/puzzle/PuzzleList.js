import React, { useContext, useEffect, useState } from "react"
import { PuzzleContext } from "./PuzzleProvider"
import { BrandContext } from "../brand/BrandProvider"
import { StatusContext } from "../status/StatusProvider"
import { Puzzle } from "./Puzzle"
import "./Puzzle.css"

export const PuzzleList = (props) => {
    
    const { puzzles, getPuzzles } = useContext(PuzzleContext)
    const { brands, getBrands } = useContext(BrandContext)
    const { statuses, getStatuses } = useContext(StatusContext)

    const [puzzle, setPuzzle] = useState({})
    const [brand, setBrand] = useState({})
    const [status, setStatus] = useState({})


    useEffect(() => {
        console.log("PuzzleList: Initial render before data")
        getPuzzles()
        .then(getBrands)
        .then(getStatuses)
    }, [])

    useEffect(() => {
        const brand = brands.find(b => b.id === puzzle.brandId) || {}
        setBrand(brand)
    }, [brands])

    useEffect(() => {
        const status = statuses.find(s => s.id === puzzle.statusId) || {}
        setBrand(status)
    }, [statuses])


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