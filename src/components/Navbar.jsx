import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <ul>
            <li>
                <Link to={'/'}>home</Link>
            </li>
            <li>
                <Link to={'/about'}>about</Link>
            </li>
            <li>
                <Link to={'article'}>article</Link>
            </li>
        </ul>
    )
}

export default Navbar;