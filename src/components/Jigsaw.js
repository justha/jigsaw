import React from "react"
import { PuzzleList } from "./puzzle/PuzzleList"
import { PuzzleProvider } from "./puzzle/PuzzleProvider"
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
            </PuzzleProvider>
    </>
)


