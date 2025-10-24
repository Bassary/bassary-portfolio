function BannerMove() {
    return (
        <div className="conteneur__liste-image-defilement">
            <div className="liste-image-defilement">
                <img className="image-defilement" src="./src/assets/logo_lokowls.svg" alt="Site Lokowls"/>
                <img className="image-defilement" src="./src/assets/logo_sophie_bluel.svg" alt="Site Sophie bluel architect"/>
                <img className="image-defilement" src="./src/assets/logo_kasa.svg" alt="Site kasa"/>
                <img className="image-defilement" src="./src/assets/logo_ohmyfood.svg" alt="Site ohmyfood"/>
                {/* dupliquer pour un meilleur effet */}
                <img className="image-defilement" src="./src/assets/logo_lokowls.svg" alt="Site Lokowls"/>
                <img className="image-defilement" src="./src/assets/logo_sophie_bluel.svg" alt="Site Sophie bluel architect"/>
                <img className="image-defilement" src="./src/assets/logo_kasa.svg" alt="Site kasa"/>
                <img className="image-defilement" src="./src/assets/logo_ohmyfood.svg" alt="Site ohmyfood"/>
            </div>
        </div>
    )
}

export default BannerMove