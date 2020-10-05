import React, {useContext} from "react"
import { Link } from "react-router-dom"
import { SpaceContext } from "../space/SpaceProvider"
import "./Relationship.css"

export const Relationship = ({ relationship }) => {

    const { spaces } = useContext(SpaceContext)

    const relationshipSpace = spaces.find(s => s.id === relationship.spaceId) || {}

    return (
        <section className="relationship__card">
            <div className="relationship__name"><b>{relationshipSpace.name}</b></div>
            <Link className="link__toRelationshipDetails" to={{pathname: `/relationships/${relationship.id}`, state: {chosenRelationship: relationship}}}>
                <img 
                    className="relationship__image" 
                    src={
                        relationshipSpace.image === undefined
                        ? "https://res.cloudinary.com/djxxamywv/image/upload/v1601754161/puzl/yxvabf25mgvvnfil3qlo.jpg"
                        : `${relationshipSpace.image}`
                    } 
                    style={{width: `200px`}}
                    alt="user workspace">                
                </img>
            </Link>
        </section>
    )
}