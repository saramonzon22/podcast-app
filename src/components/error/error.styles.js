import styled from 'styled-components';

export const ErrorStyled = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h4 {
        margin: 10px;
    }
`

export const ErrorMessage = styled.div`
    margin-top: 10px;
    box-shadow: 3px 2px 3px 0px rgb(164 164 164 /80%), -3px 2px 3px 0px rgb(164 164 164 /80%), 0px 1px 10px 0px rgb(164 164 164 /80%);
    padding: 15px;

    &:hover {
        background-color: #5564eb;
    }
`