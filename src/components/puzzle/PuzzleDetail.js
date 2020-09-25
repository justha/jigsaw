import React, { useContext, useEffect, useState } from "react"
import { PuzzleContext } from "./PuzzleProvider"
import { BrandContext } from "../brand/BrandProvider"
import { BoxContext } from "../box/BoxProvider"
import { TextureContext } from "../texture/TextureProvider"
import { DustContext } from "../dust/DustProvider"
import { StatusContext } from "../status/StatusProvider"
import "./Puzzle.css"


export const PuzzleDetail = (props) => {
    const {puzzles, getPuzzles, deletePuzzle} = useContext(PuzzleContext)
    const {brands, getBrands} = useContext(BrandContext)
    const {boxes, getBoxes} = useContext(BoxContext)
    const {textures, getTextures} = useContext(TextureContext)
    const {dusts, getDusts} = useContext(DustContext)
    const {statuses, getStatuses} = useContext(StatusContext)

    const [puzzle, setPuzzle] = useState({})
    const [brand, setBrand] = useState({})
    const [box, setBox] = useState({})
    const [texture, setTexture] = useState({})
    const [dust, setDust] = useState({})
    const [status, setStatus] = useState({})
        
  
    useEffect(() => {
        getPuzzles()
        getBrands()
        getBoxes()
        getTextures()
        getDusts()
        getStatuses()
    }, [])

    // access properties associated with puzzleId in ApplicationViews by using `props.match.params.puzzleId` 
    useEffect(() => {
        const puzzle = puzzles.find (p => p.id === parseInt(props.match.params.puzzleId)) || {}
        setPuzzle(puzzle)
    }, [puzzles])

    useEffect(() => {
        const brand = brands.find (b => b.id === puzzle.brandId) || {}
        setBrand(brand)
    }, [brands])

    useEffect(() => {
        const box = boxes.find (b => b.id === puzzle.boxId) || {}
        setBox(box)
    }, [boxes])

    useEffect(() => {
        const texture = textures.find (t => t.id === puzzle.textureId) || {}
        setTexture(texture)
    }, [textures])

    useEffect(() => {
        const dust = dusts.find (d => d.id === puzzle.dustId) || {}
        setDust(dust)
    }, [dusts])

    useEffect(() => {
        const status = statuses.find (s => s.id === puzzle.statusId) || {}
        setStatus(status)
    }, [statuses])

    return (
        <section className="puzzle__detail">
            <button 
                className="btn btn--primary" 
                id="btnPuzzleBack" 
                onClick={() => {
                    props.history.push(`/puzzles`)
                }}
            >⇦</button>


            <div className="puzzle__name">{puzzle.name}</div>
            <div className="puzzle__brand">by {brand.name}</div>
            <br></br>
            

            <div className="puzzle__title"></div>
            <div className="puzzle__count">{puzzle.count} pieces</div>
            <div className="puzzle__dimensions">{puzzle.length} in. x {puzzle.width} in.</div>
            <div className="puzzle__box">Box Size: {box.size}</div> 
            <br></br>
            

            <div className="puzzle__title">Details</div>
            <div className="puzzle__poster">Poster Included: { 
                    (puzzle.poster === true)
                    ? "Yes"
                    : "No"
                }
            </div>
            <div className="puzzle__texture">{ 
                    (puzzle.textureId === 0)
                    ? ``
                    : `Texture: ${texture.desc}`
                }
            </div>
            <div className="puzzle__dust">{ 
                    (puzzle.dustId === 0)
                    ? ``
                    : `Puzzledust: ${dust.amount}`
                }
            </div>
            <div className="puzzle__assembled">{ 
                    (status.id === 4 && puzzle.assembledId !== "")
                    ? `Assembled: ${puzzle.assembled}`
                    : ``
                }
            </div>
            <br></br>


            { 
                (puzzle.note === "")
                ? ``
                : (
                    <article>
                        <div className="puzzle__title">Notes</div>
                        <div className="puzzle__note">{puzzle.note}</div> 
                    </article>
                    )
            }
            <br></br>




            <button className="btn btn--primary" id="btnDeletePuzzle"
                onClick={() => {
                    deletePuzzle(puzzle.id)
                    props.history.push("/puzzles")
                }}
            >X</button> 


            <button 
                className="btn btn--primary" 
                id="btnPuzzleEdit" 
                onClick={() => {
                    props.history.push(`/puzzles/edit/${puzzle.id}`)
                }}
            >✎</button>

           
        </section>
    )

    
}