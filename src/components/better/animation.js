import React, { useRef, useState, useEffect } from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const noAnimate = css`
    .pulse, circle {
      animation: none !important;
    }
    .pulse circle {
      opacity: 0.75;
      transform: scale(0.25);
    }
    .pulse circle:nth-child(2) {
      opacity: 0.25;
      transform: scale(0.75);
    }
    .pulse circle:nth-child(3) {
      opacity: 0.5;
      transform: scale(0.5);
    }
`
const Demo = styled.div`
.animationToggle {
    background-color: black;
    border: none;
    border-radius: 0;
    color: white;
    font-size: 1rem;
    padding: 0.5em 1em;
  }
 .animationTarget {
    height: 400px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: 400px; 
  }
  .pulse {
      z-index: 1;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 30rem;
      
      circle {
        fill: #ff5154;
        transform: scale(0);
        opacity: 0.4;
        transform-origin: 50% 50%;
        animation: pulse 2.5s cubic-bezier(.5,.5,0,1) infinite;
        
        &:nth-child(2) {
            fill: #7fc6a4;
            animation: pulse 2.5s 0.75s cubic-bezier(.5,.5,0,1) infinite;
        }
        
        &:nth-child(3) {
            fill: #e5f77d;
            animation: pulse 2.5s 1.5s cubic-bezier(.5,.5,0,1) infinite;
        }
          
      }
      
  }
  
  @keyframes pulse {
      25% {
        opacity: 0.4;
      }
      
      100% {
        transform: scale(1);
        opacity: 0;
      }	
  }
`

const AccessibleAnimationDemo = () => {

    return (
        <Demo>
            <div
                className={`animationTarget`}
                id="animation-target"
            >
                <svg className="pulse" viewBox="0 0 1024 1024" aria-labelledby="svg-title">
                    <title id="svg-title">Animating circles</title>
                    <circle cx="512" cy="512" r="512"></circle>
                    <circle cx="512" cy="512" r="512"></circle>
                    <circle cx="512" cy="512" r="512"></circle>
                </svg>
            </div>
            <div style={{textAlign: 'center'}}>

            </div>
        </Demo>
    )
}

export default AccessibleAnimationDemo
