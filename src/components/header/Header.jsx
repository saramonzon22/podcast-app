import { Link } from "react-router-dom";
import './header.css';

function Header() {

    return (<header className="header">
        <Link to='/' className="link"><h2 className="back">Podcaster</h2></Link>
    </header>)
}

export default Header;