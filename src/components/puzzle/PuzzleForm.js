import React, { useContext, useRef, useEffect, useState} from "react"
import { PuzzleContext } from "./PuzzleProvider"
import { BrandContext } from "../brand/BrandProvider"
import { BoxContext } from "../box/BoxProvider"
import { TextureContext } from "../texture/TextureProvider"
import { DustContext } from "../dust/DustProvider"
import { StatusContext } from "../status/StatusProvider"
import { ImageContext } from "../image/ImageProvider"
import "./Puzzle.css"
import { Button, IconButton } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import PhotoCamera from '@material-ui/icons/PhotoCamera'



export const PuzzleForm = (props) => {
    // context providers
    const { addPuzzle, puzzles, editPuzzle } = useContext(PuzzleContext)
    const { uploadImage, loading, imageURL, setImageURL } = useContext(ImageContext)
    const { brands, getBrands } = useContext(BrandContext)
    const { statuses, getStatuses } = useContext(StatusContext)
    const { boxes, getBoxes } = useContext(BoxContext)
    const { textures, getTextures } = useContext(TextureContext)
    const { dusts, getDusts } = useContext(DustContext)

    // component state
    const [ puzzle, setPuzzle ] = useState({})

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
            setImageURL(selectedPuzzle.image)
            setPuzzle(selectedPuzzle)
        }
    }
    
    
    useEffect(() => {
        getBrands()
        getStatuses()
        getBoxes()
        getTextures()
        getDusts()
        setImageURL("")
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
    
    // positions cursor to initial input field 
    useEffect(() => {
        name.current.focus()
    }, [name])
    
    
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
        const puzzleNote = note.current.value
        const puzzlePoster = JSON.parse(poster.current.value)
        const puzzleAssembled = assembled.current.value
        const puzzleTrade = JSON.parse(trade.current.value)
        // const defaultImage = "http://res.cloudinary.com/djxxamywv/image/upload/v1600972086/puzl/ytyff89cctmzim0gfsns.jpg"
        // const imageLink = (
        //     imageURL === ""
        //     ? defaultImage
        //     : imageURL
        // )
       
        //NOTE: addPuzzle function below 1)takes a copy of textureId, then 2) evaluates it to determine whether it is a truthy or falsy value (e.g., id 0 does not exist and therefore w/b falsy)
        // if truthy, saves new property to the database, otherwise it does not save anything
        if (
            puzzleName === "" || 
            brandId === 0 ||
            puzzleCount === "" || 
            boxId === 0 ||
            isNaN(puzzleWidth) === true ||
            isNaN(puzzleLength) === true ||
            statusId === 0
            )
            {window.alert("Please complete all required fields")}
        else if (
            isNaN(puzzleCount) === true 
            )
            {window.alert("Puzzle count should be a number")}
        else {
            if (editMode){
                editPuzzle({
                    name: puzzleName,
                    ...(brandId && {brandId}),
                    count: puzzleCount,
                    ...(boxId && {boxId}),
                    lengthLong: Math.max(puzzleLength,puzzleWidth),
                    lengthShort: Math.min(puzzleLength,puzzleWidth),
                    ...(statusId && {statusId}),
                    ...(puzzleNote && {note: puzzleNote}),
                    ...(puzzlePoster && {poster: puzzlePoster}),
                    ...(textureId && {textureId}),
                    ...(dustId && {dustId}),
                    ...(puzzleAssembled && {assembled: puzzleAssembled}),
                    ...(puzzleTrade && {trade: puzzleTrade}),
                    ...(imageURL && {image: imageURL}),
                    userId: activeId, 
                    id: puzzle.id,
                })
                .then(setImageURL(""))
                .then(() => props.history.push("/puzzles"))
            }
            else {
                addPuzzle({
                    name: puzzleName,
                    ...(brandId && {brandId}),
                    count: puzzleCount,
                    ...(boxId && {boxId}),
                    lengthLong: Math.max(puzzleLength,puzzleWidth),
                    lengthShort: Math.min(puzzleLength,puzzleWidth),
                    ...(statusId && {statusId}),
                    ...(puzzleNote && {note: puzzleNote}),
                    ...(puzzlePoster && {poster: puzzlePoster}),
                    ...(textureId && {textureId}),
                    ...(dustId && {dustId}),
                    ...(puzzleAssembled && {assembled: puzzleAssembled}),
                    ...(puzzleTrade && {trade: puzzleTrade}),
                    ...(imageURL && {image: imageURL}),
                    favorite: false, //do not allow user to edit this field via form
                    userId: activeId
                })
                .then(setImageURL(""))
                .then(() => props.history.push("/puzzles"))
            }
        }
    }

    return (
        <form className="puzzleForm">   
        
            <div className="container__main">
                <div className="container__mainTop">
                    <h2 className="puzzleForm__title">{editMode ? "Edit Puzzle" : "Add a Puzzle"}</h2>

                    <Button type="submit" className="btn btn--primary" 
                        size="small"
                        variant="outlined"
                        startIcon={<SaveIcon />}
                        onClick={evt => {
                            evt.preventDefault() 
                            createNewPuzzle()
                        }}
                    >
                        Save
                    </Button>
                </div>  


                <div className="container__mainMiddle"></div>    


                <div className="container__mainBottom">
                    <h3>Basic Details</h3>
                    <fieldset>
                        <div className="form--group">
                            <label htmlFor="name">Puzzle Name*: </label>
                            <input 
                                className="form--control" 
                                ref={name} 
                                required 
                                autoFocus 
                                id="name" 
                                proptype="varchar"
                                type="text" 
                                placeholder="name or description" 
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
                                ref={brand} 
                                required
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
                                Number of Pieces*: 
                            </label>
                            <input 
                                className="form--control" 
                                ref={count} 
                                autoFocus 
                                id="count" 
                                proptype="int"
                                type="text" 
                                placeholder="puzzle count" 
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
                                ref={box} 
                                required
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
                            <label htmlFor="puzzleDimensions">
                                Puzzle Dimensions*: 
                            </label>
                            <div className="form__puzzleDimensionsInputGroup">
                                <input 
                                    className="form--control" 
                                    ref={length} 
                                    required 
                                    autoFocus 
                                    id="puzzleLength" 
                                    proptype="int"
                                    type="text" 
                                    // placeholder="length" 
                                    defaultValue={puzzle.lengthLong} 
                                    onChange={handleControlledInputChange}
                                />
                                <div>x</div>
                                <input 
                                    className="form--control" 
                                    ref={width} 
                                    required 
                                    autoFocus 
                                    id="puzzleWidth" 
                                    proptype="int"
                                    type="text" 
                                    // placeholder="width" 
                                    defaultValue={puzzle.lengthShort} 
                                    onChange={handleControlledInputChange}
                                />
                                <div>in.</div>
                            </div>
                        </div>
                    </fieldset>


                    <fieldset>
                        <div className="form--group">
                            <label htmlFor="note">Notes:</label>
                            <textarea 
                                className="form--control" 
                                ref={note} 
                                autoFocus 
                                id="note" 
                                proptype="varchar"
                                type="text" 
                                // placeholder="additional notes" 
                                defaultValue={puzzle.note} 
                                onChange={handleControlledInputChange}
                            />
                        </div>
                    </fieldset>


                    <fieldset>    
                        <div className="form--group">
                        <label htmlFor="statusId">Status*:</label>
                        <select 
                            className="form--control" 
                            ref={status} 
                            required
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


                    <br></br>
                    <br></br>


                    <h3>Optional</h3>
                    <fieldset>
                        <div className="form--group">
                            <label htmlFor="trade">Available to Trade?:</label>
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
                            <label htmlFor="poster">Poster Included:</label>
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
                            <label htmlFor="textureId">Texture:</label>
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
                            <label htmlFor="dustId">Puzzledust:</label>
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
                            <label htmlFor="assembled">Date Assembled:</label>
                            <input 
                                className="form--control" 
                                ref={assembled} 
                                autoFocus 
                                id="assembled" 
                                proptype="date"
                                type="date" 
                                placeholder="if applicable" 
                                defaultValue={puzzle.assembled} 
                                onChange={handleControlledInputChange}
                            />
                        </div>
                    </fieldset>


                    <fieldset>
                        <div className="form--group">
                            <label htmlFor="image">Upload Image:</label>
                            <input 
                                className="form--control" 
                                autoFocus 
                                id="image" 
                                name="file"
                                type="file"  // renders "Choose File" button & file input field
                                onChange={uploadImage}
                            />
                            <label htmlFor="image">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                                {                           
                                    editMode
                                    ?  
                                        (imageURL === ""
                                            ? ``
                                            : (
                                                <div>
                                                    <img src={imageURL} style={{width: `300px`}} />
                                                    <br></br>
                                                    <Button className="deleteImageBtn"
                                                    size="small"
                                                    variant="outlined"
                                                    startIcon={<DeleteIcon />}
                                                        onClick={() => {
                                                            setImageURL("")
                                                        }}
                                                    >
                                                        Image
                                                    </Button>
                                                </div>
                                            )
                                        )
                                    : 
                                        (
                                        loading 
                                        ? (<h4>Loading...</h4>)
                                        : (
                                            <div>
                                                <img src={imageURL} style={{width: `300px`}} />
                                            </div>
                                            )
                                        )
                                }
                        </div>
                    </fieldset>

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>                
            </div>     

        </form>
    )
}