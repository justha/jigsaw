import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Jigsaw.css"
// import { PuzzleProvider } from "./puzzle/PuzzleProvider"
// import { PuzzleForm } from "./puzzle/PuzzleForm";
// import { PuzzleList } from "./puzzle/PuzzleList"

export const Jigsaw = () => (
    <>

        <NavBar />
        <ApplicationViews />

        {/* <h1>puzzl</h1>
        <small>an app for avid jigsaw puzzlers</small>
        <br></br>
        <small>log. plan. trade.</small>

        <h2>Puzzles</h2>
            <PuzzleProvider>
                <PuzzleForm />
                <PuzzleList />
            </PuzzleProvider>

        <h2>Workspaces</h2> */}

    </>
)


