import React, {useContext} from "react"
import { SpaceContext } from "../space/SpaceProvider"
import "./Relationship.css"

export const Relationship = ({ relationship }) => {

    const { spaces } = useContext(SpaceContext)

    const relationshipSpace = spaces.find(s => s.id === relationship.spaceId) || {}

    return (
        <section className="relationship__card">
            <div className="relationship__name"><b>{relationshipSpace.name}</b></div>
            <img className="relationship__image" src={relationshipSpace.image} style={{width: `200px`}} alt="user workspace"></img>
        </section>
    )
}