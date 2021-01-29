import React, { useContext, useEffect } from "react"
import { RelationshipContext } from "../relationship/RelationshipProvider"
import { PuzzleContext } from "../puzzle/PuzzleProvider"
import { SpaceContext } from "../space/SpaceProvider"
import { StatusContext } from "../status/StatusProvider"
import { Button } from '@material-ui/core'


export const PuzzleSearch = () => {
    const { relationships, getRelationships } = useContext(RelationshipContext)
    const { setChosenStatusId, setChosenSpace } = useContext(PuzzleContext)
    const { spaces, getSpaces } = useContext(SpaceContext)
    const { statuses } = useContext(StatusContext)   
    
    
    useEffect(() => {
        getRelationships()
        getSpaces()
    }, [])
  



    const activeId = parseInt(localStorage.getItem("app_user"))
    const relationshipsActiveUser = relationships.filter(r => r.userId === activeId)
    const spaceName = relationshipObj => {
        const matchingSpaceObj = spaces.find(s => s.id === relationshipObj.spaceId) || {}
        return (matchingSpaceObj.name)
    }

    return (
        <>
            <div className="searchbar">

                <section className="searchbar__container">
                    <article className="searchbar__workspace">
                        <fieldset>
                            <div className="form--group">
                                <label htmlFor="spaceId">
                                    DOES IT FIT WORKSPACE?
                                </label>
                                <select 
                                    className="form--control" 
                                    // ref={space} 
                                    required
                                    id="spaceId" 
                                    proptype="int"
                                    name="spaceId" 
                                    value={relationshipsActiveUser.spaceId}
                                    onChange={changeEvent => {
                                        (parseInt(changeEvent.target.value) === 0)
                                        ? setChosenSpace("none")
                                        : setChosenSpace(spaces.find(s => s.id === parseInt(changeEvent.target.value)) || {})}
                                    }
                                >
                                    <option value="0">select...</option>
                                        {   
                                            relationshipsActiveUser.map(r => 
                                                <option key={r.spaceId} value={r.spaceId}> 
                                                    {spaceName(r)}
                                                </option> 
                                            )
                                        }
                                </select> 
                            </div>
                        </fieldset>
                            <button
                                className="btn btn--searchbar"
                                value="0"
                                onClick={clickEvent => {setChosenSpace("none")}}
                            >
                                clear
                            </button>
                    </article>


                    <article className="searchbar__status">
                        <button
                            className="btn btn--searchbar"
                            value="0"
                            onClick={clickEvent => {setChosenStatusId(parseInt(clickEvent.target.value))}}
                        >
                            All
                        </button>

                        {statuses.map(s => {
                            return (
                                <button 
                                    className="btn btn--searchbar" 
                                    key={s.id}
                                    value={s.id}
                                    onClick={clickEvent => {setChosenStatusId(parseInt(clickEvent.target.value))}}
                                    >
                                        {s.desc
                                        .toUpperCase()}
                                </button>
                            )
                        })}
                    </article>
                    
                </section>                
            </div>

        </>
    )

}