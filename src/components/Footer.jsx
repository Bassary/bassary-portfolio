import Button from "./Button"

function Footer() {
    return (
        <footer>
            <img src="./src/assets/logo.svg" alt="logo bassary" />
            <div>
                <Button
                    classname={""}
                    link={""}
                    content={"Mon parcours"}
                />
                <Button
                    classname={""}
                    link={""}
                    content={"Mes projets"}
                />
                <Button
                    classname={""}
                    link={""}
                    content={"Contact"}
                />
            </div>
            <p>Tout droit réserver - ©Bassary 2025</p>
        </footer>
    )
}

export default Footer