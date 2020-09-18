import React, { useState } from "react"

export const PuzzleContext = React.createContext()




export const PuzzleProvider = (props) => {
    const [puzzles, setPuzzles] = useState([])
    
    const getPuzzles = () => {
        return fetch("http://localhost:8088/puzzles")
        .then(res => res.json())
        .then(setPuzzles)
    }
    
    // const getPuzzlesForActiveUser = () => {
    //     const activeId = parseInt(localStorage.getItem("app_user"))
    //     let allPuzzles = getPuzzles()
        
        
    //     return fetch("http://localhost:8088/puzzles")
    //     .then(res => res.json())
    //     .then(puzzlesArray => {
            
    //         allPuzzles = puzzlesArray

    //         const puzzlesArrayForActiveUser = 
    //             allPuzzles.filter(p => {p.userId = activeId})

    //         return puzzlesArrayForActiveUser
    //         }
    //     )
    //     .then(setPuzzles)  
    // }

    const addPuzzle = puzzle => {
        return fetch("http://localhost:8088/puzzles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(puzzle)
        })
            .then(getPuzzles)
    }

    const getPuzzleById = (id) => {
        return fetch(`http://localhost:8088/puzzles/${ id }?_expand=brand&_expand=status`)
            .then(res => res.json())
    }

    const deletePuzzle = puzzleId => {
        return fetch(`http://localhost:8088/puzzles/${puzzleId}`, {
            method: "DELETE"
        })
            .then(getPuzzles)
    }

    const editPuzzle = puzzle => {
        return fetch(`http://localhost:8088/puzzles/${puzzle.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(puzzle)
        })
            .then(getPuzzles)
    }


    return (
        <PuzzleContext.Provider value={{
            puzzles, addPuzzle, getPuzzles, setPuzzles, getPuzzleById, deletePuzzle, editPuzzle
        }}>
            {props.children}
        </PuzzleContext.Provider>
    )
}