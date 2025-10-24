import Button from "./Button"
import "./style/NavbarFix.scss"

function NavbarFix() {
    return (
        <div className="navbar">
            <img src="./src/assets/logo.svg" alt="logo bassary" />
            <Button
                classname={"main-button z-index-button"}
                link={""}
                content={"Me contacter"}
            />
        </div>
    )
}

export default NavbarFix