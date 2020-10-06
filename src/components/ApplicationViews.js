import React from "react"
import { Route } from "react-router-dom"
import { Logout } from "./auth/Logout"
import { Stats } from "./stat/Stat"
import { PuzzleProvider } from "./puzzle/PuzzleProvider"
import { BrandProvider } from "./brand/BrandProvider"
import { StatusProvider } from "./status/StatusProvider"
import { BoxProvider } from "./box/BoxProvider"
import { TextureProvider } from "./texture/TextureProvider"
import { DustProvider } from "./dust/DustProvider"
import { PuzzleSearch } from "./search/PuzzleSearch"
import { PuzzleForm } from "./puzzle/PuzzleForm"
import { PuzzleList } from "./puzzle/PuzzleList"
import { PuzzleDetail } from "./puzzle/PuzzleDetail"
import { RelationshipProvider } from "./relationship/RelationshipProvider"
import { RelationshipForm } from "./relationship/RelationshipForm"
import { RelationshipList } from "./relationship/RelationshipList"
import { RelationshipDetail } from "./relationship/RelationshipDetail"
import { SpaceProvider } from "./space/SpaceProvider"
import { SpaceForm } from "./space/SpaceForm"
import { ImageProvider } from "./image/ImageProvider"


export const ApplicationViews = (props) => {
    return (
        <>
            <Route exact path="/">
                Hello jigsaw puzzler! 
            </Route>


            <ImageProvider>
                <PuzzleProvider>
                    <RelationshipProvider>   
                        <SpaceProvider>
                            <BrandProvider>
                                <StatusProvider>
                                    <BoxProvider>
                                        <TextureProvider>
                                            <DustProvider>

                                                <Route exact path="/puzzles" render={ 
                                                    props => <> 
                                                            <PuzzleSearch />
                                                            <PuzzleList {...props}/>
                                                            </>} />

                                                <Route exact path="/puzzles/create" render={
                                                    props => <PuzzleForm {...props} />} />

                                                <Route path="/puzzles/:puzzleId(\d+)" render={
                                                    props => <PuzzleDetail {...props}/>} /> 

                                                <Route path="/puzzles/edit/:puzzleId(\d+)" render={
                                                    props => <PuzzleForm {...props}/>} /> 
                                            
                                            </DustProvider>
                                        </TextureProvider>
                                    </BoxProvider>
                                </StatusProvider>
                            </BrandProvider>
                        </SpaceProvider>                     
                    </RelationshipProvider>
                </PuzzleProvider>
            </ImageProvider>

            
            <RelationshipProvider>
                <ImageProvider>
                    <SpaceProvider>

                        <Route exact path="/relationships" render={ 
                            props => <RelationshipList {...props}/>} />

                        <Route exact path="/relationships/create" render={
                            props => <RelationshipForm {...props} />} />

                        <Route path="/relationships/:relationshipId(\d+)" render={
                            props => <RelationshipDetail {...props}/>} /> 

                        <Route exact path="/spaces/create" render={
                            props => <SpaceForm {...props} />} />

                        <Route path="/spaces/edit/:spaceId(\d+)" render={
                            props => <SpaceForm {...props}/>} /> 

                    </SpaceProvider>
                </ImageProvider>
            </RelationshipProvider>




            <Route exact path="/stats">
                <Stats />
            </Route>

            <Route exact path="/logout">
                <Logout />
            </Route>

        </>
    )
}