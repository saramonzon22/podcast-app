import { styled } from "styled-components";

export const HeaderStyles = styled.header`    
    display: flex;
    width: 100%;
    align-items: center;
    gap: 30px;
`

export const PodcasterStyle = styled.h2`
    width: 150px;
    text-align: center;
    margin-left: 20px;
    background-color: grey;
    padding: 10px;
    color: aliceblue;
        
    &:hover {
        color: grey;
        background-color: white;
    
    }
`
