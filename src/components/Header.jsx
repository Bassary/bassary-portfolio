import RightChangeAnimation from "./animations/RightChangeAnimation"
import NavbarFix from "./NavbarFix"
import './style/Header.scss'

function Header({title}) {
    return (
        <header>
            <NavbarFix />
            <div className="background-header">
                <RightChangeAnimation>
                    <h1>{title}</h1>
                </RightChangeAnimation>
                    
            </div>
        </header>
    )
}

export default Header