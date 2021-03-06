import React from 'react';
import styled from 'styled-components';

const Celeb = styled.div`
    font-family: 'lobster', cursive;
    color: #E45641;
`;

const CelebContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 20px;
`;


export default function Celebrity({name, imageurl}){

    return (
        <CelebContainer>
            <Celeb>
                <h3>{name}</h3>
                <img src={imageurl} alt='' />
            </Celeb> 
        </CelebContainer>
    );
}