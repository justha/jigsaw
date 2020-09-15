import React from "react"
import { PuzzleProvider } from "./puzzle/PuzzleProvider"
import { PuzzleList } from "./puzzle/PuzzleList"
import { PuzzleForm } from "./puzzle/PuzzleForm";
import "./Jigsaw.css"

export const Jigsaw = () => (
    <>
        <h1>puzzl</h1>
        <small>an app for avid jigsaw puzzlers</small>
        {/* <br></br>
        <small>log. plan. trade.</small> */}

        <h2>Puzzles</h2>
            <PuzzleProvider>
                <PuzzleList />
                <PuzzleForm />
            </PuzzleProvider>

        <h2>Workspaces</h2>

    </>
)


