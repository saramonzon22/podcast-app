import { styled } from "styled-components";
import { device } from "../../utils/sizes";


export const MainStyled = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SectionMain = styled.section`
    display: flex;
    justify-content: space-evenly;
    min-height: 40vh;
    width: 90%;
    flex-wrap: wrap;
    
    @media ${device.tablet} {
    height: 15%;
    width: 80vw;
    }
    @media ${device.laptop} {
        flex-wrap: no-wrap;
        min-height: 70vh;

    }
`