import styled from 'styled-components';
import { device } from "../../utils/sizes";


export const Card = styled.article`

    height: 20%;
    width: 70vw;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 48px;
    box-shadow: 3px 3px 3px 0px rgb(164 164 164 /80%), -3px 3px 3px 0px rgb(164 164 164 /80%), 0px 1px 10px 0px rgb(164 164 164 /80%);

    & > div {
        padding-right: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;
    }
    & > h4 {
        margin: 0;
    }

    & > img {
        width: 100px;
        height: 100px;
        align-self: center;
        border: 1px solid black;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    @media ${device.tablet} {
        & > img {
            width: 150px;
            height: 150px;
    }

    @media ${device.laptop} {
        height: 60%;
        width: 20vw;

        & > img {
            width: 200px;
            height: 200px;
        }
}
`;

export const Italic = styled.p`
    font-style: italic;
`;