import styled from 'styled-components';

export const List = styled.ul`
    display: grid;
    list-style: none;
    padding: 10px;
    grid-template-columns: 4fr 1fr 1fr;    
    margin: 0;
    color: black;
    margin-left: 15px;
    border-bottom: 1px solid #c2c2c2;

    &:hover {
        color: grey;
}
`