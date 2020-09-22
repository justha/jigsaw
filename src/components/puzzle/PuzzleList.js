import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { PuzzleContext } from "./PuzzleProvider"
import { BrandContext } from "../brand/BrandProvider"
import { StatusContext } from "../status/StatusProvider"
import { Puzzle } from "./Puzzle";
import "./Puzzle.css"


export const PuzzleList = (props) => {
    const { puzzles, getPuzzles } = useContext(PuzzleContext)
    const { getBrands } = useContext(BrandContext)
    const { getStatuses } = useContext(StatusContext)
    
    //filter list by active user
    const activeId = parseInt(localStorage.getItem("app_user"))
    const puzzlesActiveUser = puzzles.filter(p => p.userId === activeId)
    let filteredPuzzles = puzzlesActiveUser

    useEffect(() => {
        console.log("PuzzleList: Initial render before data")
        getPuzzles()
        getBrands()
        getStatuses()
    }, [])
    
    
    return (
        <>
            
            <div className="puzzleList">
            <h2>My Collection</h2>
            
                {
                filteredPuzzles.map(p => {
                    return (
                        <article key={p.id}>

                            <Link className="link__toPuzzleDetails" 
                                to={{
                                    pathname: `/puzzles/${p.id}`,
                                    state: { chosenPuzzle: p }
                                }}
                            >
                                <Puzzle puzzle={p} />
                                <br></br>

                            </Link>

                        </article>   
                    )
                })}

            </div> 


            <button className="btn btn--primary" id="btnAddPuzzle"
                onClick={() => {props.history.push("/puzzles/create")}}
            >
            +
            </button>  
        
        </>
    )

}