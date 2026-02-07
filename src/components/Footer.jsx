import { Link } from "react-router-dom";
import './style/Footer.scss';

function Footer() {
    return (
        <footer>
            <div className="container-footer">
                <img src="assets/logo.svg" alt="logo bassary" />
            <div>
                <Link to={"/mon-parcours"} className="footer-button">
                    Mon parcours
                </Link>
                <Link to={"/mes-projets"} className="footer-button">
                    Mes projets
                </Link>
                <Link to={"/contact"} className="footer-button">
                    Contact
                </Link>
            </div>
            <p>Tous droits réservés - ©Bassary 2026</p>

            </div>
            
        </footer>
    )
}

export default Footer