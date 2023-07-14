import { LinkStyles } from "../link/link.styles";
import { ErrorStyled, ErrorMessage } from './error.styles'

function Error() {
    return <><ErrorStyled>
        <h4>Could not connect to the server</h4>
        <ErrorMessage>
            <LinkStyles to='/'>
                <p>Click here to go back home</p>
            </LinkStyles>
        </ErrorMessage>
    </ErrorStyled></>
}

export default Error;