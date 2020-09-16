import React from "react"
import { Route } from "react-router-dom"
import { PuzzleProvider } from "./puzzle/PuzzleProvider"
import { PuzzleForm } from "./puzzle/PuzzleForm"
import { PuzzleList } from "./puzzle/PuzzleList"

export const ApplicationViews = (props) => {
    return (
        <>
            <Route exact path="/"></Route>
        
            <PuzzleProvider>
                <Route exact path="/puzzles">
                    <PuzzleForm/>
                    <PuzzleList/>
                </Route>
            </PuzzleProvider>


        </>
    )
}