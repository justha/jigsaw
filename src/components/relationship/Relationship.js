import React, {useContext} from "react"
import { SpaceContext } from "../space/SpaceProvider"
import "./Relationship.css"

export const Relationship = ({ relationship }) => {

    const { spaces } = useContext(SpaceContext)

    const relationshipSpace = spaces.find(s => s.id === relationship.spaceId) || {}

    return (
        <section className="relationship">
            {/* <div className="relationship__spaceId"><b>{relationship.spaceId}</b></div> */}
            <div className="relationship__spaceName"><b>{relationshipSpace.name}</b></div>
        </section>
    )

}