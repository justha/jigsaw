import React, { useState } from "react"


export const PuzzleContext = React.createContext()


export const PuzzleProvider = (props) => {
    const [ puzzles, setPuzzles ] = useState([])
    const [ searchTerms, setSearchTerms ] = useState([])
    const [ chosenSpace, setChosenSpace ] = useState([])
    const [ chosenStatus, setChosenStatus ] = useState([])

    
    const getPuzzles = () => {
        return fetch("http://localhost:8088/puzzles")
        .then(res => res.json())
        .then(setPuzzles)
    }
 
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

    const deletePuzzle = id => {
        return fetch(`http://localhost:8088/puzzles/${id}`, {
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
            puzzles, addPuzzle, getPuzzles, setPuzzles, getPuzzleById, deletePuzzle, editPuzzle, chosenStatus, setChosenStatus,
            chosenSpace, setChosenSpace
        }}>
            {props.children}
        </PuzzleContext.Provider>
    )
}