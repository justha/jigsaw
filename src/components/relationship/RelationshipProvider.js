import React, { useState } from "react"

export const RelationshipContext = React.createContext()

export const RelationshipProvider = (props) => {
    const [relationships, setRelationships] = useState([])
    
    const getRelationships = () => {
        return fetch("http://localhost:8088/relationships")
        .then(res => res.json())
        .then(setRelationships)
    }
 
    const addRelationship = relationship => {
        return fetch("http://localhost:8088/relationships", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(relationship)
        })
            .then(getRelationships)
    }

    const getRelationshipById = (id) => {
        return fetch(`http://localhost:8088/relationships/${ id }?_expand=space`)
        .then(res => res.json())
    }

    const deleteRelationship = id => {
        return fetch(`http://localhost:8088/relationships/${id}`, {
            method: "DELETE"
        })
            .then(getRelationships)
    }

    const editRelationship = relationship => {
        return fetch(`http://localhost:8088/relationships/${relationship.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(relationship)
        })
            .then(getRelationships)
    }


    return (
        <RelationshipContext.Provider value={{
            getRelationships, relationships, setRelationships, addRelationship, deleteRelationship, editRelationship, getRelationshipById
        }}>
            {props.children}
        </RelationshipContext.Provider>
    )
}