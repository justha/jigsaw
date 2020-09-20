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


    useEffect (() => {
        getPuzzleInEditMode()
    }, [puzzles])
    
    
    useEffect(() => {
        getPuzzles()
        getBrands()
        getStatuses()
        getBoxes()
        getTextures()
        getDusts()
    }, [])
    

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
    
    
    const createNewPuzzle = () => {
        const puzzleName = (name.current.value)
        const brandId = parseInt(brand.current.value)
        const statusId = parseInt(status.current.value)
        const textureId = parseInt(texture.current.value)
        const dustId = parseInt(dust.current.value)
        const boxId = parseInt(box.current.value)
        const puzzleLength = parseInt(length.current.value)
        const puzzleWidth = parseInt(width.current.value)
        const puzzleCount = parseInt(count.current.value)

        // if (puzzleName === ""){window.alert("please input a name or description")}
        // if (brandId === 0){window.alert("please select a brand")}
        // if (statusId === 0){window.alert("please select a status")}
        // if (boxId === 0){window.alert("please select a box size")}
        // if (isNaN(puzzleLength) === true){window.alert("please input a length")}
        // if (isNaN(puzzleWidth) === true){window.alert("please input a width")}
        if (
            puzzleName === "" || 
            brandId === 0 ||
            statusId === 0 ||
            boxId === 0 ||
            isNaN(puzzleLength) === true ||
            isNaN(puzzleWidth) === true 
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
                    assembled: assembled.current.value,
                    statusId,
                    boxId,
                    poster: JSON.parse(poster.current.value),
                    textureId,
                    dustId,
                    note: note.current.value,
                    length: parseInt(length.current.value),
                    width: parseInt(width.current.value),
                    favorite: false,
                    userId: 1, 
                    id: puzzle.id
                })
                .then(() => props.history.push("/puzzles"))
            }
            else {
                addPuzzle({
                    name: name.current.value,
                    brandId,
                    count: parseInt(count.current.value),
                    assembled: assembled.current.value,
                    statusId,
                    boxId,
                    poster: JSON.parse(poster.current.value),
                    textureId,
                    dustId,
                    note: note.current.value,
                    length: parseInt(length.current.value),
                    width: parseInt(width.current.value),
                    favorite: false,
                    userId: 1
                })
                .then(() => props.history.push("/puzzles"))
            }
        }
    }

    return (
        <form className="puzzleForm">
            
            <h3 className="puzzleForm__title">Add a Puzzle</h3>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleName">Puzzle Name*: </label>
                    <input type="text" 
                        id="puzzleName" 
                        ref={name} required autoFocus 
                        className="form--control" 
                        placeholder="input name or desc" 
                        defaultValue={puzzle.name} 
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleBrand">Brand*: </label>
                    <select className="form--control" 
                        id="puzzleBrand" 
                        ref={brand} 
                        name="brand" 
                        value={puzzle.brandId}
                        onChange={handleControlledInputChange}
                    >
                        <option value="0">select</option>
                            {brands.map(b => (
                                <option key={b.id} value={b.id}>
                                    {b.name}
                                </option>    
                            ))}    
                    </select>  
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleCount">Number of Pieces: </label>
                    <input type="text" 
                        id="puzzleCount" 
                        ref={count} autoFocus 
                        className="form--control" 
                        placeholder="input piece count" 
                        defaultValue={puzzle.count} 
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>


            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleBox">Box Size*: </label>
                    <select className="form--control" 
                        id="puzzleBox" 
                        ref={box} 
                        name="box" 
                        value={puzzle.boxId}
                        onChange={handleControlledInputChange}
                    >
                        <option value="0">select</option>
                            {boxes.map(b => (
                                <option key={b.id} value={b.id}>
                                    {b.size}
                                </option>    
                            ))}    
                    </select>   
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzlePoster">Poster Included: </label>
                    <select className="form--control" 
                        id="puzzlePoster" 
                        ref={poster} 
                        name="poster" 
                        value={puzzle.posterId}
                        onChange={handleControlledInputChange}
                    >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>   
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleTexture">Texture: </label>
                    <select className="form--control" 
                        id="puzzleTexture" 
                        ref={texture} 
                        name="texture" 
                        value={puzzle.textureId}
                        onChange={handleControlledInputChange}
                    >
                        <option value="0">select</option>
                            {textures.map(t => (
                                
                                <option key={t.id} value={t.id}>
                                    {t.desc}
                                </option>    

                            ))}    
                    </select>   
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleDust">Puzzledust: </label>
                    <select className="form--control" 
                        id="puzzleDust" 
                        ref={dust} 
                        name="dust" 
                        value={puzzle.dustId}
                        onChange={handleControlledInputChange}
                    >
                        <option value="0">select</option>
                            {dusts.map(d => (
                                
                                <option key={d.id} value={d.id}>
                                    {d.amount}
                                </option>    

                            ))}    
                    </select>   
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleNote">Note: </label>
                    <textarea type="text" 
                        id="puzzleNote" 
                        ref={note} autoFocus 
                        className="form--control" 
                        placeholder="additional notes" 
                        defaultValue={puzzle.note} 
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleAssembled">Date Assembled: </label>
                    <input type="date" 
                        id="puzzleAssembled" 
                        ref={assembled} autoFocus 
                        className="form--control" 
                        placeholder="if applicable" 
                        defaultValue={puzzle.assembled} 
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>

            <fieldset>    
                <div className="form-group">
                <label htmlFor="puzzleStatus">Status*: </label>
                <select className="form--control" 
                    id="puzzleStatus" 
                    ref={status} 
                    name="status" 
                    value={puzzle.statusId}
                    onChange={handleControlledInputChange} 
                >
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
                    <input type="text" 
                        id="puzzleLength" 
                        ref={length} required autoFocus 
                        className="form--control" 
                        placeholder="length" 
                        defaultValue={puzzle.length} 
                        onChange={handleControlledInputChange}
                    />
                    <div>x</div>
                    <input type="text" 
                        id="puzzleWidth" 
                        ref={width} required autoFocus 
                        className="form--control" 
                        placeholder="width" 
                        defaultValue={puzzle.width} 
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>


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