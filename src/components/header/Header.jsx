import { LinkStyles } from '../link/link.styles'
import { HeaderStyles, PodcasterStyle } from './header.styles';
import Loading from '../loading/Loading';

function Header(props) {

    return (
        <>
            {props.isLoading ? (
                <HeaderStyles>
                    <LinkStyles to='/'>
                        <PodcasterStyle>Podcaster</PodcasterStyle>
                    </LinkStyles>
                    <Loading />
                </HeaderStyles>

            ) : (
                <HeaderStyles>
                    <LinkStyles to='/'>
                        <PodcasterStyle>Podcaster</PodcasterStyle>
                    </LinkStyles>
                </HeaderStyles>
            )}
        </>
    );
}

export default Header;