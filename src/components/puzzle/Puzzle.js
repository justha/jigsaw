import React, {useContext} from "react"
import { BrandContext } from "../brand/BrandProvider"
import { StatusContext } from "../status/StatusProvider"
import "./Puzzle.css"


export const Puzzle = ({ puzzle }) => {

    const { brands } = useContext(BrandContext)
    const { statuses } = useContext(StatusContext)

    const puzzleBrand = brands.find(b => b.id === puzzle.brandId) || {}
    const puzzleStatus = statuses.find(s => s.id === puzzle.statusId) || {}

    // const [puzzleMax, puzzleMin] = [puzzle.length, puzzle.width].sort((a, b) => b - a)


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
                style={{width: `200px`}}>                
            </img>
            <div className="puzzle__status"><small>{puzzleStatus.desc}</small></div>
            <div className="puzzle__fit"><small></small></div>
        </section>
    )
}