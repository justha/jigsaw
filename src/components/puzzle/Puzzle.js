import React, {useContext, useState, useEffect} from "react"
import { PuzzleDetail } from "./PuzzleDetail"
import "./Puzzle.css"
import { BrandContext } from "../brand/BrandProvider"
import { StatusContext } from "../status/StatusProvider"



export const Puzzle = ({ puzzle }) => {

    const puzzleId = puzzle.id

    const { brands, getBrands } = useContext(BrandContext)
    const { statuses, getStatuses } = useContext(StatusContext)

    useEffect(() => {
        console.log("PuzzleList: Initial render before data")
        getBrands()
        getStatuses()
    }, [])


    const [brand, setBrand] = useState({})
    const [status, setStatus] = useState({})

    useEffect(() => {
        const brand = brands.find(b => b.id === puzzle.brandId) || {}
        setBrand(brand)
    }, [brands])

    useEffect(() => {
        const status = statuses.find(s => s.id === puzzle.statusId) || {}
        setBrand(status)
    }, [statuses])


    return (
        <section className="puzzle">
            <div className="puzzle__name"><b>{puzzle.name}</b></div>
            <div className="puzzle__brand">by {puzzle.brandId}</div>
            <div className="puzzle__brand">by {brand.name}</div>
            <div className="puzzle__status">Status {puzzle.statusId}</div>
            {/* <div className="puzzle__status">Status {status.desc}</div> */}

            <button className="btn btn--primary"
                onClick={() => {
                    PuzzleDetail(puzzleId)
                }}
            >Details</button>

            <dialog></dialog>

        </section>
    )
}