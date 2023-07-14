import styled from 'styled-components';
import { device } from "../../utils/sizes";


export const EpisodesStyles = styled.article`
    height: 40vh;
    margin-top: 48px;
    box-shadow: 3px 2px 3px 0px rgb(164 164 164 /80%), -3px 2px 3px 0px rgb(164 164 164 /80%), 0px 1px 10px 0px rgb(164 164 164 /80%);
    height: fit-content;
    padding: 15px;

    @media ${device.tablet} {
        width: 90%;
        padding: 25px;

    }
    @media ${device.laptop} {
        width: 40vw;
        padding: 25px;
    }

`