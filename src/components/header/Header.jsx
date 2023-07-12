import {LinkStyles} from '../link/link.styles'
import { HeaderStyles, PodcasterStyle } from './header.styles';

function Header() {

    return (<HeaderStyles>
        <LinkStyles to='/'>
            <PodcasterStyle>Podcaster</PodcasterStyle>
        </LinkStyles>
    </HeaderStyles>)
}

export default Header;