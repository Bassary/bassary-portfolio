import NavbarFix from "./NavbarFix"
import './style/Header.scss'

function Header({title}) {
    return (
        <header>
            <NavbarFix />
            <div className="background-header">
                <h1>{title}</h1>
            </div>
        </header>
    )
}

export default Header