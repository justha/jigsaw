import React, {useContext} from "react"
import { BrandContext } from "../brand/BrandProvider"
// import { StatusContext } from "../status/StatusProvider"
import "./Puzzle.css"


export const Puzzle = ({ puzzle }, props, key ) => {

    const { brands, getBrands } = useContext(BrandContext)
    // const { statuses, getStatuses } = useContext(StatusContext)

    const puzzleBrand = brands.find(b => b.id === puzzle.brandId) || {}
    // const puzzleStatus = statuses.find(s => s.id === puzzle.statusId) || {}

    return (
        <section className="puzzle">
            <div className="puzzle__name"><b>{puzzle.name}</b></div>
            <div className="puzzle__brand">by {puzzleBrand.name}</div>
            {/* <div className="puzzle__brand">{puzzleStatus.message}</div> */}

                
            {/* <button className="btn btn--primary" id="btnPuzzleDetail" 
                onClick={() => {props.history.push("/puzzles/${puzzle.id}")}}
            >
            ℹ︎
            </button>
            
            <Link to={{
                    pathname: `/puzzles/${puzzle.id}`,
                    state: { chosenPuzzle: puzzle }
                    }}
            >
                <button className="btn btn--primary" id="btnPuzzleDetail">ℹ︎</button>
            </Link> */}

        </section>
    )

}

