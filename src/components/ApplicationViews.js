import React from "react"
import { Route } from "react-router-dom"
import { Logout } from "./auth/Logout"
import { PuzzleProvider } from "./puzzle/PuzzleProvider"
import { BrandProvider } from "./brand/BrandProvider"
import { StatusProvider } from "./status/StatusProvider"
import { BoxProvider } from "./box/BoxProvider"
import { TextureProvider } from "./texture/TextureProvider"
import { DustProvider } from "./dust/DustProvider"
import { PuzzleForm } from "./puzzle/PuzzleForm"
import { PuzzleList } from "./puzzle/PuzzleList"
import { PuzzleDetail } from "./puzzle/PuzzleDetail"
import { RelationshipProvider } from "./relationship/RelationshipProvider"
import { RelationshipForm } from "./relationship/RelationshipForm"
import { SpaceProvider } from "./space/SpaceProvider"
import { SpaceList } from "./space/SpaceList"
import { SpaceForm } from "./space/SpaceForm"
import { SpaceDetail } from "./space/SpaceDetail"


export const ApplicationViews = (props) => {
    return (
        <>
            <Route exact path="/">
                Hello there jigsaw puzzler! 
            </Route>


            <PuzzleProvider>
                <BrandProvider>
                    <StatusProvider>
                        <BoxProvider>
                            <TextureProvider>
                                <DustProvider>

                                    <Route exact path="/puzzles" render={ 
                                        props => <PuzzleList {...props}/>
                                    } />

                                    <Route exact path="/puzzles/create" 
                                        render={props => 
                                            <PuzzleForm {...props} />
                                    } />

                                    <Route path="/puzzles/:puzzleId(\d+)" render={
                                        props => <PuzzleDetail {...props}/>
                                    } /> 

                                    <Route path="/puzzles/edit/:puzzleId(\d+)" render={
                                        props => <PuzzleForm {...props}/>
                                    } /> 
                                
                                </DustProvider>
                            </TextureProvider>
                        </BoxProvider>
                    </StatusProvider>
                </BrandProvider>
            </PuzzleProvider>

            
            <RelationshipProvider>
                <SpaceProvider>
                    <Route exact path="/spaces" render={ 
                        props => <SpaceList {...props}/>
                    } />

                    <Route exact path="/spaces/relationships/create" 
                        render={props => 
                            <RelationshipForm {...props} />
                    } />

                    {/* <Route exact path="/spaces/create" 
                        render={props => 
                            <SpaceForm {...props} />
                    } /> */}

                    <Route path="/spaces/:spaceId(\d+)" render={
                        props => <SpaceDetail {...props}/>
                    } /> 

                    <Route path="/relationships/edit/:relationshipId(\d+)" render={
                        props => <RelationshipForm {...props}/>
                    } /> 

                    {/* <Route path="/spaces/edit/:spaceId(\d+)" render={
                        props => <SpaceForm {...props}/>
                    } />  */}
                </SpaceProvider>
            </RelationshipProvider>




            <Route exact path="/logout">
                <Logout />
            </Route>

        </>
    )
}