import React, { useContext, useEffect, useState } from "react"
import { PuzzleContext } from "./PuzzleProvider"
import "./Puzzle.css"


export const PuzzleDetail = (props) => {

   
    return (
        <section className="puzzle">
            <h4 className="puzzle__name">{puzzle.name}</h4>
            <small className="puzzle__brand">Brand: {puzzle.brandId}</small>
            <br></br>
            <div className="puzzle__count">Pieces: {puzzle.count}</div>
            <div className="puzzle__dimensions">Dimensions: {puzzle.length} in. x {puzzle.width} in.</div>
            <div className="puzzle__box">Box Size: {puzzle.boxId}</div>
            <div className="puzzle__poster">Poster Included: {puzzle.poster}</div>
            <div className="puzzle__texture">Texture: {puzzle.textureId}</div>
            <div className="puzzle__dust">Puzzledust: {puzzle.dustId}</div>
            <div className="puzzle__note">Note: {puzzle.note}</div>
            <div className="puzzle__assembled">Assembled: {puzzle.assembled}</div>
            <div className="puzzle__status">Status: {puzzle.statusId}</div>
            <div className="puzzle__favorite">Favorite: {puzzle.favorite}</div>


            <button className="btn btn--primary" id="btnPuzzleDelete"
                onClick={() => {
                    deletePuzzle(puzzle.id)
                }}
            >
            x
            </button> 

            <button className="btn btn--primary" id="btnPuzzleEdit">✎</button>
        </section>
    )


    // return (
    //     <section className="puzzle">
    //         <h4 className="puzzle__name">{puzzle.name}</h4>
    //         <small className="puzzle__brand">Brand: {puzzle.brandId}</small>
    //         <br></br>
    //         <div className="puzzle__count">Pieces: {puzzle.count}</div>
    //         <div className="puzzle__dimensions">Dimensions: {puzzle.length} in. x {puzzle.width} in.</div>
    //         <div className="puzzle__box">Box Size: {puzzle.boxId}</div>
    //         <div className="puzzle__poster">Poster Included: {puzzle.poster}</div>
    //         <div className="puzzle__texture">Texture: {puzzle.textureId}</div>
    //         <div className="puzzle__dust">Puzzledust: {puzzle.dustId}</div>
    //         <div className="puzzle__note">Note: {puzzle.note}</div>
    //         <div className="puzzle__assembled">Assembled: {puzzle.assembled}</div>
    //         <div className="puzzle__status">Status: {puzzle.statusId}</div>
    //         <div className="puzzle__favorite">Favorite: {puzzle.favorite}</div>


    //         <button className="btn btn--primary" id="btnPuzzleDelete"
    //             onClick={() => {
    //                 deletePuzzle(puzzle.id)
    //             }}
    //         >
    //         x
    //         </button> 

    //         <button className="btn btn--primary" id="btnPuzzleEdit">✎</button>
    //     </section>
    // )

    
}