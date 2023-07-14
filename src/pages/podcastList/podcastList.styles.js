import { styled } from "styled-components";
import { device } from "../../utils/sizes";

export const Home = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`

export const MainHome = styled.main ` 
    display: grid;
    grid-template-columns: 1fr;
    align-self: center;
    gap: 20px;

    @media ${device.tablet} {
        grid-template-columns: 1fr 1fr;
      }
    
      @media ${device.laptop} {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px;
        width: 70vw;
        align-self: center;
      }
`

export const MainSearch = styled.div`
        display: flex;
        width: 100%;
        height: 100px;
        margin-left: -5px;
        justify-content: flex-end;
        align-items: baseline;
        gap: 15px;
    
    & > span {
        background-color: cadetblue;
        width: 30px;
        height: 20px;
        padding: 5px;
        border-radius: 5px;
        color: white;
        text-align: center;  
    }
    & > input {
        height: 30px;
        padding-left: 15px;
        padding-right: 15px;    
    }
    @media ${device.tablet} {

    }

    @media ${device.laptop} {
        width: 82vw;
    
        & > input {
            height: 30px;
            padding-left: 15px;
            padding-right: 15px;    
        }
      }
`

export const MainCard = styled.div `

    width: 250px;
    height: fit-content;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 50px;
    text-align: center;
    box-shadow: 3px 3px 3px 0px rgb(164 164 164 /80%), -3px 3px 3px 0px rgb(164 164 164 /80%), 0px 1px 10px 0px rgb(164 164 164 /80%);
    & > img {
        border-radius: 50%;
        width: 150px;
        height: 150x;
        transform: translateY(-40px);
    }
    & > h4 {
        margin: 0;
        text-transform: uppercase;
        transform: translateY(-20px);
    }
    & > p {
        font-size: 14px;
        color: gray;
        transform: translateY(-20px);
    }
    }
`


