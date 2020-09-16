import React from "react"
import { Route } from "react-router-dom"
import { PuzzleProvider } from "./puzzle/PuzzleProvider"
import { PuzzleForm } from "./puzzle/PuzzleForm"
import { PuzzleList } from "./puzzle/PuzzleList"
import { Logout } from "./auth/Logout"

export const ApplicationViews = (props) => {
    return (
        <>
            <Route exact path="/">Welcome!</Route>
            
            <Route exact path="/workspaces">Workspaces</Route>
        
            <PuzzleProvider>
                <Route exact path="/puzzles">
                    <PuzzleForm/>
                    <PuzzleList/>
                </Route>
            </PuzzleProvider>

            <Route exact path="/logout">
                <Logout />
            </Route>

        </>
    )
}