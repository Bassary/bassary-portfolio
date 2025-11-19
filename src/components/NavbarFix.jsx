import Button from "./Button"
import "./style/NavbarFix.scss"

function NavbarFix() {
    return (
        <div className="navbar">
            <img src="assets/logo.svg" alt="logo bassary" height={"54px"} width={"166"} />
            <Button
                classname={"main-button z-index-button"}
                link={"/contact"}
                content={"Me contacter"}
            />
        </div>
    )
}

export default NavbarFix