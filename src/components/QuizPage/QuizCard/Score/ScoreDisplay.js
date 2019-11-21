import React, {useEffect, useState} from 'react';
import {Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import ScoreValue from './ScoreValue/ScoreValue';

const ScoreContainer = styled.div`
    width: 355px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 65px;
    background-color: #44B3C2;
    color:  #F2EDD8;
    font-family: 'Lobster', cursive;    
`;

export default function ScoreDisplay(){
    
    return(
        <ScoreContainer>
            <h3>Score:</h3>
            <ScoreValue />
        </ScoreContainer>
    )
}