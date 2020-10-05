import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PuzzleContext } from "./PuzzleProvider"
import { BrandContext } from "../brand/BrandProvider"
import { StatusContext } from "../status/StatusProvider"
import { Puzzle } from "./Puzzle";
import "./Puzzle.css"
import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'



export const PuzzleList = (props) => {
    const { puzzles, getPuzzles, chosenStatusId, chosenSpace, setSpaceLong, setSpaceShort, spaceLong, spaceShort } = useContext(PuzzleContext)
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
        const subset = (chosenStatusId === 0) ? puzzles : puzzles.filter(p => p.statusId === chosenStatusId)            
        setFilteredPuzzles(subset)
    }, [chosenStatusId])


    useEffect(() => {
        console.log('chosenSpace >>',chosenSpace)
        const chosenLengthLong = (chosenSpace === "none") ? `` : chosenSpace.lengthLong 
        const chosenLengthShort = (chosenSpace === "none") ? `` : chosenSpace.lengthShort 
        setSpaceLong(chosenLengthLong)
        setSpaceShort(chosenLengthShort)
    }, [chosenSpace])


    
    return (
        <>
            <div className="container__main">

                <div className="container__mainTop">
                    <h2>My Collection</h2>
                </div>


                <div className="container__mainMiddle">
                    <Fab size="small" 
                        className="btn btn--primary" id="btnAddPuzzle"
                        onClick={() => {props.history.push("/puzzles/create")}}
                    >
                        <AddIcon />
                    </Fab>
                </div>
                    

            <div className="container__mainBottom">
                    <section className="puzzleList">            
                        {
                            puzzlesActiveUser.map(p => {
                                return (
                                    <article key={p.id} className="puzzle__item">
                                        <Puzzle puzzle={p} />
                                        <br></br>
                                    </article>   
                                )
                        })}
                    </section>
                </div>


            </div> 

        </>

    )

}