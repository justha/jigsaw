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


    const name = useRef(null)
    const brand = useRef(null)
    const count = useRef(null)
    const assembled = useRef(null)
    const status = useRef(null)
    const poster = useRef(null)
    const length = useRef(null)
    const width = useRef(null)
    const box = useRef(null)
    const texture = useRef(null)
    const dust = useRef(null)
    const note = useRef(null)
    const favorite = useRef(null)


    // useEffect(() => {
    //    getBrands().then(getStatuses).then(getBoxes).then(getTextures).then(getDusts)
    // }, [])

    const createNewPuzzle = () => {
        // const brandId = parseInt(brand.current.value)
        // const statusId = parseInt(status.current.value)
        // const boxId = parseInt(box.current.value)
        // const textureId = parseInt(texture.current.value)
        // const dustId = parseInt(dust.current.value)

        // if (brandId === 0) {
        //     window.alert("Please select a brand")
        // } else {
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
        // }
    }

    return (
        <form className="puzzleForm">
            
            <h2 className="puzzleForm__title">Add a Puzzle</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleName">Puzzle Name: </label>
                    <input type="text" id="puzzleName" ref={name} required autoFocus className="form-control" placeholder="puzzle name or desc" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleBrand">Brand: </label>
                    <input type="text" id="puzzleBrand" ref={brand} required autoFocus className="form-control" placeholder="puzzle brand" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleCount">Piece Count: </label>
                    <input type="text" id="puzzleCount" ref={count} autoFocus className="form-control" placeholder="piece count" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleLength">Length: </label>
                    <input type="text" id="puzzleLength" ref={length} required autoFocus className="form-control" placeholder="length (inches)" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleWidth">Width: </label>
                    <input type="text" id="puzzleWidth" ref={width} required autoFocus className="form-control" placeholder="width (inches)" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleBox">Box Size: </label>
                    <input type="text" id="puzzleBox" ref={box} required autoFocus className="form-control" placeholder="box size (small or large)" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzlePoster">Poster Included: </label>
                    <input type="text" id="puzzlePoster" ref={poster} autoFocus className="form-control" placeholder="true or false" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleTexture">Texture: </label>
                    <input type="text" id="puzzleTexture" ref={texture} autoFocus className="form-control" placeholder="puzzle texture (e.g., matte, glossy, crosshatch, unknown)" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleDust">Puzzledust Rating: </label>
                    <input type="text" id="puzzleDust" ref={dust} autoFocus className="form-control" placeholder="e.g., none, minimal, moderate, significant" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleNote">Note: </label>
                    <input type="text" id="puzzleNote" ref={note} autoFocus className="form-control" placeholder="additional notes" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleFavorite">Favorite: </label>
                    <input type="text" id="puzzleFavorite" ref={favorite} autoFocus className="form-control" placeholder="true or false" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleAssembled">Date Assembled: </label>
                    <input type="text" id="puzzleAssembled" ref={assembled} autoFocus className="form-control" placeholder="date if applicable" /></div></fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="puzzleStatus">Status: </label>
                    <input type="text" id="puzzleStatus" ref={status} required autoFocus className="form-control" placeholder="e.g., in-progress, up next, wishlist, trade" /></div></fieldset>

            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="brand">Assign to brand: </label>
                    <select defaultValue="" name="brand" ref={brand} id="puzzleBrand" className="form-control" >
                        <option value="0">Select a brand</option>
                        {brands.map(b => (
                            <option key={b.id} value={b.id}>
                                {b.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset> */}


            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    createNewPuzzle()
                }}
                className="btn btn-primary">
                Save
            </button>

        </form>
    )
}