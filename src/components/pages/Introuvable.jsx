import Button from "../Button";
import '../style/Introuvable.scss'

function Introuvable() {
    return (
        <div className="div-error-404">
            <h1 className="error-404">404</h1>
            <h2 className="phrase-error-404">Navré... page introuvable</h2>
            <Button
             classname={"main-button"}
             link={'/'}
             content={`Revenir à l'accueil`}
            >
            </Button>
        </div>

    )
}

export default Introuvable;