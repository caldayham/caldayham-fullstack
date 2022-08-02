import React from 'react'
import { PrimaryContainer } from '../globalstyles'

const CousinPage = () => {
  return (
    <PrimaryContainer>
        <div style={{display: "flex", position: "relative", alignItems: "center", justifyContent: "center "}}>
            <div style={{ backgroundColor: "red", color: "black"}}>
                <h1>
                    MY LOVELY FAMILY MEMBERS NAMES ARE:
                </h1>
                <h2 style={{backgroundColor: "yellow"}}>Theo!</h2>
                <h2>Row!</h2>
                <h2>John!</h2>
                <h2>Eleni!</h2>
                <h2>Felix!</h2>
                <h2>Ozzy!</h2>
            </div>
            <div style={{position: "absolute", zIndex: 5}}>   
                <div style={{backgroundColor: "red", height: "100px"}}/>
                <div style={{backgroundColor: "orange", height: "100px"}}/>
                <div style={{backgroundColor: "yellow", height: "100px"}}/>
                <div style={{backgroundColor: "green", height: "100px"}}/>
                <div style={{backgroundColor: "rgb(0, 0, 255)", height: "100px"}}/>
                <div style={{backgroundColor: "purple", height: "100px"}}/>
            </div>
        </div>
        </PrimaryContainer>
  )
}

export default CousinPage