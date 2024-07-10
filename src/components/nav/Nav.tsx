import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__links">
                <Link className="nav__link" to="/">Home</Link>
                <Link className="nav__link" to="/categories">Categories</Link>
                <Link className="nav__link" to="/products">Products</Link>
            </div>
        </div>
    );
}

export default Nav;