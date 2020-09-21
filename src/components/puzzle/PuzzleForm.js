import React, { useContext, useRef, useEffect, useState} from "react"
import { PuzzleContext } from "./PuzzleProvider"
import { BrandContext } from "../brand/BrandProvider"
import { BoxContext } from "../box/BoxProvider"
import { TextureContext } from "../texture/TextureProvider"
import { DustContext } from "../dust/DustProvider"
import { StatusContext } from "../status/StatusProvider"
import "./Puzzle.css"

export const PuzzleForm = (props) => {
    // context providers
    const { addPuzzle, puzzles, editPuzzle, getPuzzles } = useContext(PuzzleContext)
    const { brands, getBrands } = useContext(BrandContext)
    const { statuses, getStatuses } = useContext(StatusContext)
    const { boxes, getBoxes } = useContext(BoxContext)
    const { textures, getTextures } = useContext(TextureContext)
    const { dusts, getDusts } = useContext(DustContext)

    // component state
    const [puzzle, setPuzzle] = useState({})

    const editMode = props.match.params.hasOwnProperty("puzzleId")

    const handleControlledInputChange = (event) => {
        const newPuzzle = Object.assign({}, puzzle)
        newPuzzle[event.target.name] = event.target.value 
        setPuzzle(newPuzzle)
    }

    const getPuzzleInEditMode = () => {
        if (editMode) {
            const puzzleId = parseInt(props.match.params.puzzleId)
            const selectedPuzzle = puzzles.find(p => p.id === puzzleId) || {}
            setPuzzle(selectedPuzzle)
        }
    }
    
    
    useEffect(() => {
        getPuzzles()
        getBrands()
        getStatuses()
        getBoxes()
        getTextures()
        getDusts()
    }, [])


    useEffect (() => {
        getPuzzleInEditMode()
    }, [puzzles])
    

    const name = useRef(null)
    const brand = useRef(null)
    const count = useRef(null)
    const poster = useRef(null)
    const box = useRef(null)
    const length = useRef(null)
    const width = useRef(null)
    const texture = useRef(null)
    const dust = useRef(null)
    const note = useRef(null)
    const assembled = useRef(null)
    const status = useRef(null)
    const trade = useRef(null)
    const activeId = parseInt(localStorage.getItem("app_user"))
    

    const createNewPuzzle = () => {
        const puzzleName = (name.current.value)
        const brandId = parseInt(brand.current.value)
        const puzzleCount = parseInt(count.current.value)
        const boxId = parseInt(box.current.value)
        const puzzleLength = parseInt(length.current.value)
        const puzzleWidth = parseInt(width.current.value)
        const textureId = parseInt(texture.current.value)
        const dustId = parseInt(dust.current.value)
        const statusId = parseInt(status.current.value)

        // if (puzzleName === ""){window.alert("please input a name or description")}
        // if (brandId === 0){window.alert("please select a brand")}
        // if (statusId === 0){window.alert("please select a status")}
        // if (boxId === 0){window.alert("please select a box size")}
        // if (isNaN(puzzleLength) === true){window.alert("please input a length")}
        // if (isNaN(puzzleWidth) === true){window.alert("please input a width")}
        if (
            puzzleName === "" || 
            brandId === 0 ||
            boxId === 0 ||
            isNaN(puzzleWidth) === true ||
            isNaN(puzzleLength) === true ||
            statusId === 0
            )
            {window.alert("Please enter all required fields")}
        else if (
            isNaN(puzzleCount) === true 
            )
            {window.alert("Puzzle count should be a number")}
        else {
            if (editMode) {
                editPuzzle({
                    name: name.current.value,
                    brandId,
                    count: parseInt(count.current.value),
                    boxId,
                    length: parseInt(length.current.value),
                    width: parseInt(width.current.value),
                    statusId,
                    assembled: assembled.current.value,
                    trade: JSON.parse(trade.current.value),
                    note: note.current.value,
                    poster: JSON.parse(poster.current.value),
                    textureId,
                    dustId,
                    userId: activeId, 
                    id: puzzle.id,
                })
                .then(() => props.history.push("/puzzles"))
            }
            else {
                addPuzzle({
                    name: name.current.value,
                    brandId,
                    count: parseInt(count.current.value),
                    boxId,
                    length: parseInt(length.current.value),
                    width: parseInt(width.current.value),
                    statusId,
                    assembled: assembled.current.value,
                    trade: JSON.parse(trade.current.value),
                    note: note.current.value,
                    poster: JSON.parse(poster.current.value),
                    textureId,
                    dustId,
                    favorite: false, //do not allow user to edit this field via form
                    userId: activeId
                })
                .then(() => props.history.push("/puzzles"))
            }
        }
        console.log(assembled.current.value)
    }

    return (
        <form className="puzzleForm">            
            <h3 className="puzzleForm__title">{editMode ? "Edit Puzzle" : "Add a Puzzle"}</h3>

            <fieldset>
                <div className="form--group">
                    <label htmlFor="name">Puzzle Name*: </label>
                    <input 
                        className="form--control" 
                        ref={name} required autoFocus 
                        id="name" 
                        proptype="varchar"
                        type="text" 
                        placeholder="input name or desc" 
                        defaultValue={puzzle.name} 
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form--group">
                    <label htmlFor="brandId">
                        Brand*: 
                    </label>
                    <select 
                        className="form--control" 
                        ref={brand} required
                        id="brandId" 
                        proptype="int"
                        name="brandId" 
                        value={puzzle.brandId}
                        onChange={handleControlledInputChange}
                    >
                        <option value="0">select</option>
                            {brands.map(b => (
                        <option key={b.id} value={b.id}>
                            {b.name}</option>))}    
                    </select>  
                </div>
            </fieldset>

            <fieldset>
                <div className="form--group">
                    <label htmlFor="count">
                        Number of Pieces: 
                    </label>
                    <input 
                        className="form--control" 
                        ref={count} autoFocus 
                        id="count" 
                        proptype="int"
                        type="text" 
                        placeholder="input piece count" 
                        defaultValue={puzzle.count} 
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>


            <fieldset>
                <div className="form--group">
                    <label htmlFor="boxId">
                        Box Size*: 
                    </label>
                    <select 
                        className="form--control" 
                        ref={box} required
                        id="boxId" 
                        proptype="int"
                        name="boxId" 
                        value={puzzle.boxId}
                        onChange={handleControlledInputChange}
                    >
                        <option value="0">select</option>
                            {boxes.map(b => (
                        <option key={b.id} value={b.id}>
                            {b.size}</option>))}    
                    </select>   
                </div>
            </fieldset>


            <fieldset>
                <div className="form--group">
                    <label htmlFor="puzzleLength">
                        Puzzle Dimensions*: 
                    </label>
                    <div className="form__puzzleDimensions">
                        <input 
                            className="form--control" 
                            ref={length} required autoFocus 
                            id="puzzleLength" 
                            proptype="int"
                            type="text" 
                            // placeholder="length" 
                            defaultValue={puzzle.length} 
                            onChange={handleControlledInputChange}
                        />
                        <div>x</div>
                        <input 
                            className="form--control" 
                            ref={width} required autoFocus 
                            id="puzzleWidth" 
                            proptype="int"
                            type="text" 
                            // placeholder="width" 
                            defaultValue={puzzle.width} 
                            onChange={handleControlledInputChange}
                        />
                        <div>inches</div>
                    </div>
                </div>
            </fieldset>


            <fieldset>    
                <div className="form--group">
                <label htmlFor="statusId">
                    Status*: 
                </label>
                <select 
                    className="form--control" 
                    ref={status} required
                    id="statusId" 
                    proptype="int"
                    name="statusId" 
                    value={puzzle.statusId}
                    onChange={handleControlledInputChange} 
                >
                    <option value="0">select</option>
                        {statuses.map(s => (
                    <option key={s.id} value={s.id}>
                        {s.desc}</option>))}    
                </select>            
                </div>
            </fieldset>


            <fieldset>
                <div className="form--group">
                    <label htmlFor="note">
                        Notes: 
                    </label>
                    <textarea 
                        className="form--control" 
                        ref={note} autoFocus 
                        id="note" 
                        proptype="varchar"
                        type="text" 
                        placeholder="additional notes" 
                        defaultValue={puzzle.note} 
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>


            <h3>Other Details (optional)</h3>

            <fieldset>
                <div className="form--group">
                    <label htmlFor="trade">
                        Available to Trade?: 
                    </label>
                    <select 
                        className="form--control" 
                        ref={trade} 
                        id="trade" 
                        proptype="bool"
                        name="trade" 
                        value={puzzle.trade}
                        onChange={handleControlledInputChange}
                    >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>   
                </div>
            </fieldset>


            <fieldset>
                <div className="form--group">
                    <label htmlFor="poster">
                        Poster Included: 
                    </label>
                    <select 
                        className="form--control" 
                        ref={poster} 
                        id="poster" 
                        proptype="bool"
                        name="poster" 
                        value={puzzle.poster}
                        onChange={handleControlledInputChange}
                    >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>   
                </div>
            </fieldset>

            <fieldset>
                <div className="form--group">
                    <label htmlFor="textureId">
                        Texture: 
                    </label>
                    <select 
                        className="form--control" 
                        ref={texture} 
                        id="textureId" 
                        proptype="int"
                        name="textureId" 
                        value={puzzle.textureId}
                        onChange={handleControlledInputChange}
                    >
                        <option value="0">select</option>
                            {textures.map(t => (
                        <option key={t.id} value={t.id}>
                            {t.desc}</option>))}    
                    </select>   
                </div>
            </fieldset>

            <fieldset>
                <div className="form--group">
                    <label htmlFor="dustId">
                        Puzzledust: 
                    </label>
                    <select 
                        className="form--control" 
                        ref={dust} 
                        id="dustId" 
                        proptype="int"
                        name="dustId" 
                        value={puzzle.dustId}
                        onChange={handleControlledInputChange}
                    >
                        <option value="0">select</option>
                            {dusts.map(d => (
                        <option key={d.id} value={d.id}>
                            {d.amount}</option>))}    
                    </select>   
                </div>
            </fieldset>

            <fieldset>
                <div className="form--group">
                    <label htmlFor="assembled">
                        Date Assembled: 
                    </label>
                    <input 
                        className="form--control" 
                        ref={assembled} autoFocus 
                        id="assembled" 
                        proptype="date"
                        type="date" 
                        placeholder="if applicable" 
                        defaultValue={puzzle.assembled} 
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>


            


            <br></br>
            <br></br>

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