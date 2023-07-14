import styled from 'styled-components';
import { device } from "../../utils/sizes";


export const EpisodesStyles = styled.h2`
    box-shadow: 3px 2px 3px 0px rgb(164 164 164 /80%), -3px 2px 3px 0px rgb(164 164 164 /80%), 0px 1px 10px 0px rgb(164 164 164 /80%);
    padding: 15px;

    @media ${device.tablet} {
        width: 80vw;
    }
    @media ${device.laptop} {
        width: 39vw;
        padding: 10px;
    }
`