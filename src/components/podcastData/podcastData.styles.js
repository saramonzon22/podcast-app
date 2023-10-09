import styled from 'styled-components';


export const List = styled.li`
  display: grid;
  list-style: none;
  padding: 10px;
  grid-template-columns: 3fr 1fr 1fr;
  margin: 0;
  color: black;
  margin-left: 15px;
  border-bottom: 1px solid #c2c2c2;

  &:hover {
    color: grey;
  }
`;
export const TitleEpisode = styled.span`
    color: #0044d0;

    &:hover {
        color: grey;
    }
`