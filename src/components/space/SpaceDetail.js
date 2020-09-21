import React, { useContext, useEffect, useState } from "react"
import { SpaceContext } from "./SpaceProvider"
import "./Space.css"


export const SpaceDetail = (props) => {
    const {spaces, getSpaces, deleteSpace} = useContext(SpaceContext)

    const [space, setSpace] = useState({})

    useEffect(() => {
        getSpaces()
    }, [])

    useEffect(() => {
        const space = spaces.find (s => s.id === parseInt(props.match.params.spaceId)) || {}
        setSpace(space)
    })


    return (
        <section className="space__detail">
            <div className="space__name">{space.name}</div>
            <br></br>

            <div className="space__title">Dimensions</div>
            <div className="space__dimensions">{space.length} in. x {space.width} in.</div>
            <br></br>

            <div className="space__title">Type</div>
            <div className="space__custom">{
                (space.custom === true) 
                ? `Custom` 
                : 
                    <text>
                    Standard
                        {/* <br></br>
                        <small>(standard boards cannot be edited)</small> */}
                    </text>
                }
            </div>
            <br></br>
            

            <div>
                {
                    (space.custom === true)
                    ? 
                    (
                        <button 
                        className="btn btn--primary" 
                        id="btnSpaceEdit" 
                        onClick={() => {
                            props.history.push(`/spaces/edit/${space.id}`)
                        }}
                        >✎</button> 
                        )
                        : ""
                    }
            </div>


            <button className="btn btn--primary" id="btnSpaceDelete"
                onClick={() => {
                    deleteSpace(space.id)
                    props.history.push("/spaces")
                }}
            >X</button> 
            {/* <div>I no longer have this</div> */}

        </section>
    )

}