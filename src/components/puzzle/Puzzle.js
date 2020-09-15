import React from "react"
import "./Puzzle.css"

export const Puzzle = ({ puzzle }) => (
    <section className="puzzle">
        <h4 className="puzzle__name">{puzzle.name}</h4>
    
            {/* this block will move to PuzzleDetail */}
            <div className="puzzle__brand">Brand: {puzzle.brandId}</div>
            <div className="puzzle__count">Pieces: {puzzle.count}</div>
            <div className="puzzle__dimensions">Dimensions: {puzzle.length} in. by {puzzle.width} in.</div>
            <div className="puzzle__box">Box Size: {puzzle.boxId}</div>
            <div className="puzzle__poster">Poster Included: {puzzle.poster}</div>
            <div className="puzzle__texture">Texture: {puzzle.textureId}</div>
            <div className="puzzle__dust">Puzzledust Rating: {puzzle.dustId}</div>
            <div className="puzzle__note">Note: {puzzle.note}</div>
            <div className="puzzle__assembled">Assembled: {puzzle.assembled}</div>
            <div className="puzzle__status">Status: {puzzle.statusId}</div>
            <div className="puzzle__favorite">Favorite: {puzzle.favorite}</div>

            <button className="button__editPuzzle">Edit</button>
        
            <button className="button__deletePuzzle">Delete</button>
            {/* this block will move to PuzzleDetail */}


    </section>
)