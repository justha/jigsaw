import React, { useContext, useRef, useEffect } from "react"
import { PuzzleContext } from "./PuzzleProvider"
import { BrandContext } from "../brand/BrandProvider"
import { BoxContext } from "../box/BoxProvider"
import { TextureContext } from "../texture/TextureProvider"
import { DustContext } from "../dust/DustProvider"
import { StatusContext } from "../status/StatusProvider"
import "./Puzzle.css"

export const PuzzleForm = (props) => {
    const { addPuzzle } = useContext(PuzzleContext)
    const { brands, getBrands } = useContext(BrandContext)
    const { statuses, getStatuses } = useContext(StatusContext)
    const { boxes, getBoxes } = useContext(BoxContext)
    const { textures, getTextures } = useContext(TextureContext)
    const { dusts, getDusts } = useContext(DustContext)


    const name = useRef(null)
    const brand = useRef(null)
    const count = useRef(null)
    const assembled = useRef(null)
    const status = useRef(null)
    const poster = useRef(null)
    const box = useRef(null)
    const texture = useRef(null)
    const dust = useRef(null)
    const note = useRef(null)
    const length = useRef(null)
    const width = useRef(null)
    // const favorite = useRef(null)


    useEffect(() => {
        getBrands()
        getStatuses()
        getBoxes()
        getTextures()
        getDusts()
    }, [])

    const createNewPuzzle = () => {
        const puzzleName = parseInt(name.current.value)
        const brandId = parseInt(brand.current.value)
        const statusId = parseInt(status.current.value)
        const textureId = parseInt(texture.current.value)
        const dustId = parseInt(dust.current.value)
        const boxId = parseInt(box.current.value)
        const puzzleLength = parseInt(length.current.value)
        const puzzleWidth = parseInt(width.current.value)

        if (puzzleName === ""){window.alert("please input a name or description")}
        if (statusId === 0){window.alert("please select a status")}
        if (brandId === 0){window.alert("please select a brand")}
        if (puzzleLength === ""){window.alert("please input a length")}
        if (puzzleWidth === ""){window.alert("please input a width")}
        if (boxId === 0){window.alert("please select a box size")}
        else {
            addPuzzle({
                userId: 1,
                name: name.current.value,
                brandId: brand.current.value,
                count: count.current.value,
                assembled: assembled.current.value,
                statusId,
                boxId,
                poster: poster.current.value,
                textureId,
                dustId,
                note: note.current.value,
                length: length.current.value,
                width: width.current.value,
                favorite: false
            })
            .then(() => props.history.push("/puzzles"))
        }
    }

    return (
        <form className="puzzleForm">
            
            <h3 className="puzzleForm__title">Add a Puzzle</h3>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleName">Puzzle Name*: </label>
                    <input type="text" id="puzzleName" ref={name} required autoFocus className="form--control" placeholder="input name or desc" />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleBrand">Brand*: </label>
                    <select className="form--control" defaultValue="" name="brand" ref={brand} id="puzzleBrand" >
                        <option value="0">select</option>
                            {brands.map(b => (
                                <option key={b.id} value={b.id}>
                                    {b.name}
                                </option>    
                            ))}    
                    </select>  
                    {/* <input type="text" id="puzzleBrand" ref={brand} required autoFocus className="form--control" placeholder="input brand name" /> */}
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleCount">Number of Pieces: </label>
                    <input type="text" id="puzzleCount" ref={count} autoFocus className="form--control" placeholder="input piece count" />
                </div>
            </fieldset>


            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleBox">Box Size*: </label>
                    <select className="form--control" defaultValue="" name="box" ref={box} id="puzzleBox" >
                        <option value="0">select</option>
                            {boxes.map(b => (
                                <option key={b.id} value={b.id}>
                                    {b.size}
                                </option>    
                            ))}    
                    </select>   
                    {/* <input type="text" id="puzzleBox" ref={box} required autoFocus className="form--control" placeholder="small, large" /> */}
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzlePoster">Poster Included: </label>
                    <select className="form--control" defaultValue="" name="poster" ref={poster} id="puzzlePoster" >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>   
                    {/* <input type="text" id="puzzlePoster" ref={poster} autoFocus className="form--control" placeholder="true, false" /> */}
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleTexture">Texture: </label>
                    <select className="form--control" defaultValue="" name="texture" ref={texture} id="puzzleTexture" >
                        <option value="0">select</option>
                            {textures.map(t => (
                                
                                <option key={t.id} value={t.id}>
                                    {t.desc}
                                </option>    

                            ))}    
                    </select>   
                    {/* <input type="text" id="puzzleTexture" ref={texture} autoFocus className="form--control" placeholder="matte, glossy, crosshatch, other" /> */}
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleDust">Puzzledust: </label>
                    <select className="form--control" defaultValue="" name="dust" ref={dust} id="puzzleDust" >
                        <option value="0">select</option>
                            {dusts.map(d => (
                                
                                <option key={d.id} value={d.id}>
                                    {d.amount}
                                </option>    

                            ))}    
                    </select>   
                    {/* <input type="text" id="puzzleDust" ref={dust} autoFocus className="form--control" placeholder="none, minimal, moderate, significant" /> */}
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleNote">Note: </label>
                    <input type="text" id="puzzleNote" ref={note} autoFocus className="form--control" placeholder="additional notes" />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleAssembled">Date Assembled: </label>
                    <input type="text" id="puzzleAssembled" ref={assembled} autoFocus className="form--control" placeholder="if applicable" />
                </div>
            </fieldset>

            <fieldset>    
                <div className="form-group">
                <label htmlFor="puzzleStatus">Status*: </label>
                <select className="form--control" defaultValue="" name="status" ref={status} id="puzzleStatus" >
                    <option value="0">select</option>
                        {statuses.map(s => (
                            <option key={s.id} value={s.id}>
                                {s.desc}
                            </option>    
                        ))}    
                </select>            
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleLength">Dimensions (Inches)*: </label>
                    <input type="text" id="puzzleLength" ref={length} required autoFocus className="form--control" placeholder="length" />
                    <input type="text" id="puzzleWidth" ref={width} required autoFocus className="form--control" placeholder="width" />
                </div>
            </fieldset>


            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleFavorite">Favorite: </label>
                    <input type="text" id="puzzleFavorite" ref={favorite} autoFocus className="form--control" placeholder="true or false" />
                </div>
            </fieldset> */}

            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleStatus">Status*: </label>
                    <input type="text" id="puzzleStatus" ref={status} required autoFocus className="form--control" placeholder="in-progress, up next, wishlist, trade" />
                </div>
            </fieldset> */}


            <button type="submit" className="btn btn--primary"
                onClick={evt => {
                    evt.preventDefault() 
                    createNewPuzzle()
                }}
            >
            Save
            </button>

        </form>
    )
}