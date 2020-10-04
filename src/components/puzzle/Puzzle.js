import React, {useContext, useEffect} from "react"
import { BrandContext } from "../brand/BrandProvider"
import { StatusContext } from "../status/StatusProvider"
import { PuzzleContext } from "../puzzle/PuzzleProvider"
import "./Puzzle.css"




export const Puzzle = ({ puzzle }) => {
    
    const { brands } = useContext(BrandContext)
    const { statuses } = useContext(StatusContext)
    const { spaceLong, spaceShort } = useContext(PuzzleContext)
    
    const puzzleBrand = brands.find(b => b.id === puzzle.brandId) || {}
    const puzzleStatus = statuses.find(s => s.id === puzzle.statusId) || {}


    return (
        <section className="puzzle__card">
            <div className="puzzle__name"><b>{puzzle.name}</b></div>
            <div className="puzzle__brand">
                {
                (puzzleBrand.name === "other")
                ? ``
                : `by ${puzzleBrand.name}`
                }
            </div>
            <img 
                className="puzzle__image" 
                src={
                    puzzle.image === ""
                    ? "http://res.cloudinary.com/djxxamywv/image/upload/v1600972086/puzl/ytyff89cctmzim0gfsns.jpg"
                    : `${puzzle.image}`
                } 
                style={{width: `200px`}}
                alt="user puzzle">                
            </img>
            <div className="puzzle__status"><small>{puzzleStatus.desc}</small></div>
            <div className="puzzle__fit">
                <small>
                    {
                        (spaceLong === undefined || spaceShort === undefined)
                        ? ``
                        : (puzzle.lengthLong < spaceLong && puzzle.lengthShort < spaceShort)
                            ? "Yes"
                            : "No"
                    }
                </small>
            </div>
        </section>
    )
}