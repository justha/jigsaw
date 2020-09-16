import React, { useContext, useRef, useEffect } from "react"
import { PuzzleContext } from "./PuzzleProvider"
// import { BrandContext } from "../brand/BrandProvider"
// import { BoxContext } from "../box/BoxProvider"
// import { TextureContext } from "../texture/TextureProvider"
// import { DustContext } from "../dust/DustProvider"
// import { StatusContext } from "../status/StatusProvider"
import "./Puzzle.css"

export const PuzzleForm = (props) => {
    const { addPuzzle } = useContext(PuzzleContext)
    // const { brands, getBrands } = useContext(BrandContext)
    // const { statuses, getStatuses } = useContext(StatusContext)
    // const { boxes, getBoxes } = useContext(BoxContext)
    // const { textures, getTextures } = useContext(TextureContext)
    // const { dusts, getDusts } = useContext(DustContext)


    const name = useRef(0)
    const brand = useRef(0)
    const count = useRef(0)
    const assembled = useRef(0)
    const status = useRef(0)
    const poster = useRef(false)
    const length = useRef(0)
    const width = useRef(0)
    const box = useRef(0)
    const texture = useRef(0)
    const dust = useRef(0)
    const note = useRef(0)
    const favorite = useRef(false)


    // useEffect(() => {
    //    getBrands().then(getStatuses).then(getBoxes).then(getTextures).then(getDusts)
    // }, [])

    const createNewPuzzle = () => {
        // const puzzleName = parseInt(name.current.value)
        // const brandId = parseInt(brand.current.value)
        // const puzzleLength = parseInt(length.current.value)
        // const puzzleWidth = parseInt(width.current.value)
        // const statusId = parseInt(status.current.value)
        // const boxId = parseInt(box.current.value)

        // if (puzzleName === 0){window.alert("please enter a name or description")}
        // if (brandId === 0){window.alert("please select a brand")}
        // if (puzzleLength === 0){window.alert("please enter a dimension")}
        // if (puzzleWidth === 0){window.alert("please enter a dimension")}
        // if (boxId === 0){window.alert("please select a box size")}
        // if (statusId === 0){window.alert("please select a status")}
        // else {
            addPuzzle({
                userId: 1,
                name: name.current.value,
                brandId: brand.current.value,
                count: count.current.value,
                assembled: assembled.current.value,
                statusId: status.current.value,
                length: length.current.value,
                width: width.current.value,
                boxId: box.current.value,
                poster: poster.current.value,
                textureId: texture.current.value,
                dustId: dust.current.value,
                note: note.current.value,
                favorite: favorite.current.value
            })
            .then(() => props.history.push("/puzzles"))
        }
    // }

    return (
        <form className="puzzleForm">
            
            <h3 className="puzzleForm__title">Add a Puzzle</h3>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleName">Puzzle Name*: </label>
                    <input type="text" id="puzzleName" ref={name} required autoFocus className="form--control" placeholder="puzzle name or desc" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleBrand">Brand*: </label>
                    <input type="text" id="puzzleBrand" ref={brand} required autoFocus className="form--control" placeholder="puzzle brand" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleCount">Piece Count: </label>
                    <input type="text" id="puzzleCount" ref={count} autoFocus className="form--control" placeholder="piece count" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleLength">Length*: </label>
                    <input type="text" id="puzzleLength" ref={length} required autoFocus className="form--control" placeholder="length (inches)" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleWidth">Width*: </label>
                    <input type="text" id="puzzleWidth" ref={width} required autoFocus className="form--control" placeholder="width (inches)" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleBox">Box Size*: </label>
                    <input type="text" id="puzzleBox" ref={box} required autoFocus className="form--control" placeholder="box size (small or large)" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzlePoster">Poster Included: </label>
                    <input type="text" id="puzzlePoster" ref={poster} autoFocus className="form--control" placeholder="true or false" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleTexture">Texture: </label>
                    <input type="text" id="puzzleTexture" ref={texture} autoFocus className="form--control" placeholder="puzzle texture (e.g., matte, glossy, crosshatch, unknown)" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleDust">Puzzledust Rating: </label>
                    <input type="text" id="puzzleDust" ref={dust} autoFocus className="form--control" placeholder="e.g., none, minimal, moderate, significant" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleNote">Note: </label>
                    <input type="text" id="puzzleNote" ref={note} autoFocus className="form--control" placeholder="additional notes" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleFavorite">Favorite: </label>
                    <input type="text" id="puzzleFavorite" ref={favorite} autoFocus className="form--control" placeholder="true or false" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleAssembled">Date Assembled: </label>
                    <input type="text" id="puzzleAssembled" ref={assembled} autoFocus className="form--control" placeholder="date if applicable" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleStatus">Status*: </label>
                    <input type="text" id="puzzleStatus" ref={status} required autoFocus className="form--control" placeholder="e.g., in-progress, up next, wishlist, trade" /></div></fieldset>

            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="brand">Assign to brand: </label>
                    <select defaultValue="" name="brand" ref={brand} id="puzzleBrand" className="form--control" >
                        <option value="0">Select a brand</option>
                        {brands.map(b => (
                            <option key={b.id} value={b.id}>
                                {b.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset> */}


            <button type="submit" className="btn btn--primary"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    createNewPuzzle()
                }}
            >
            Save
            </button>

        </form>
    )
}