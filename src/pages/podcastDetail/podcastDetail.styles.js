import { styled } from "styled-components";
import { device } from "../../utils/sizes";


export const PodcastStyled = styled.section`
    margin-top: 28px;
`
export const PodcastEpisodesStyled = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: column;
    min-height: 60vh;
    box-shadow: 3px 2px 3px 0px rgb(164 164 164 /80%), -3px 2px 3px 0px rgb(164 164 164 /80%), 0px 1px 10px 0px rgb(164 164 164 /80%);
    margin-top: 25px;

    @media ${device.laptop} {
        width: 40vw;
    }

`