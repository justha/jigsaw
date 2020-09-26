import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PuzzleContext } from "./PuzzleProvider"
import { BrandContext } from "../brand/BrandProvider"
import { StatusContext } from "../status/StatusProvider"
import { Puzzle } from "./Puzzle";
import "./Puzzle.css"


export const PuzzleList = (props) => {
    const { puzzles, getPuzzles, chosenStatusId, chosenSpaceSize } = useContext(PuzzleContext)
    const { getBrands } = useContext(BrandContext)
    const { getStatuses } = useContext(StatusContext)

    const [ filteredPuzzles, setFilteredPuzzles ] = useState([])
    
    //filter list by active user
    const activeId = parseInt(localStorage.getItem("app_user"))

    const puzzlesActiveUser = 
        filteredPuzzles
        .filter(p => p.userId === activeId)
        .sort((a,b) => (a.statusId > b.statusId) ? 1 : -1)

        
    useEffect(() => {
        getPuzzles()
        getBrands()
        getStatuses()
        setFilteredPuzzles(puzzles)
    }, [])

    
    // listens for a change to `puzzles` >> invokes setFitleredPuzzeles() 
    useEffect(() => {
        setFilteredPuzzles(puzzles)
    }, [puzzles])


    useEffect(() => {
        console.log('chosenStatusId >>',chosenStatusId)
        const subset = 
            chosenStatusId !== 0
            ? puzzles.filter(p => p.statusId === chosenStatusId)
            : puzzles            
        setFilteredPuzzles(subset)

    }, [chosenStatusId])


    useEffect(() => {


        console.log('chosenSpaceSize >>',chosenSpaceSize)

    }, [chosenSpaceSize])

    
    
    return (
        <>
            <h2>My Collection</h2>

            <button className="btn btn--primary" id="btnAddPuzzle"
                onClick={() => {props.history.push("/puzzles/create")}}
            >
            +
            </button>


            <div className="puzzleList">            
            
                {
                    puzzlesActiveUser.map(p => {
                        return (
                            <article 
                            key={p.id} 
                            className="puzzle__item"
                            >

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


        </>

    )

}