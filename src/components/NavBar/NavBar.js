import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                <h3>CALMER: BOOKS AND COFFEE</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/libros`} className={({isActive}) => isActive ? "ActiveOption" : "Option" }> Libros </NavLink>
                <NavLink to={`/category/cafe`} className={({isActive}) => isActive ? "ActiveOption" : "Option" }> Cafe </NavLink>
                <NavLink to={`/category/nosotros`} className={({isActive}) => isActive ? "ActiveOption" : "Option" }>Nosotros </NavLink>
                <NavLink to={`/category/contacto`} className={({isActive}) => isActive ? "ActiveOption" : "Option" }>Contacto </NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar






