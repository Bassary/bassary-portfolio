import './style/CardSiteWeb.scss';

function CardSiteWeb({title, texteCategorie, texteRealisation, texteTechnologie, backgroundImage}) {
    return (
        <div className='container-site-web__card'>
            {backgroundImage}
            <div className="background-shadow">
                <div className="texte">
                    <h2>{title}</h2>
                    <div className="texte-content">
                        <h3>Catégorie</h3>
                        <p>{texteCategorie}</p>
                    </div>
                    <div className="texte-content">
                        <h3>Réalistation</h3>
                        <p>{texteRealisation}</p>
                    </div>
                    <div className="texte-content">
                        <h3>Technologies</h3>
                        <p>{texteTechnologie}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSiteWeb