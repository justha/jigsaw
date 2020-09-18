import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PuzzleContext } from "./PuzzleProvider"
import { BrandContext } from "../brand/BrandProvider"
import { StatusContext } from "../status/StatusProvider"
import { Puzzle } from "./Puzzle";
import "./Puzzle.css"


export const PuzzleList = (props) => {
    
    const { puzzles, getPuzzles } = useContext(PuzzleContext)
    const { brands, getBrands } = useContext(BrandContext)
    const { statuses, getStatuses } = useContext(StatusContext)
    
    const [puzzle, setPuzzle] = useState ({ brand: {}, status: {}})
    
    useEffect(() => {
        console.log("PuzzleList: Initial render before data")
        getPuzzles()
        getBrands()
        getStatuses()
    }, [])


    return (
        <>
            <button className="btn btn--primary" id="btnAddPuzzle"
                onClick={() => {props.history.push("/puzzles/create")}}
            >
            +
            </button>  
            

            <div className="puzzleList">
                {puzzles.map(p => {
                    return (
                        <article>
                            <Puzzle key={p.id} puzzle={p} />

                            <Link to={{
                                    pathname: `/puzzles/${p.id}`,
                                    state: { chosenPuzzle: p }
                                    }}
                            ><button>ℹ︎</button></Link>

                        </article>   
                    )
                })}
            </div> 


            {/* <div className="puzzleList">
                {puzzles.map(puzzle => {
                    const puzzleBrand = brands.find(b => b.id === puzzle.brandId) || {}
                    const puzzleStatus = statuses.find(s => s.id === puzzle.statusId) || {}

                    return (
                        <article className="puzzle">
                            <div><b>{puzzle.name}</b></div>
                            <div>by {puzzleBrand.name}</div>

                            <Link to={{
                                    pathname: `/puzzles/${puzzle.id}`,
                                    state: { chosenPuzzle: puzzle }
                                    }}
                            >
                                <button className="btn btn--primary" id="btnPuzzleDetail">ℹ︎</button>
                            </Link>
                        </article>                        
                    )
                })}
            </div>  */}
            

        </>
    )

}