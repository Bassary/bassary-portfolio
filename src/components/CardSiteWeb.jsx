import { useState } from 'react';
import './style/CardSiteWeb.scss';

function CardSiteWeb({ title, texteCategorie, texteRealisation, texteTechnologie, backgroundImage }) {
    const [isActive, setIsActive] = useState(false);

    const toggleInfo = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className={`container-site-web__card ${isActive ? 'active' : ''}`}
            onClick={toggleInfo}
            role="button"
            tabIndex="0"
            aria-expanded={isActive}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    toggleInfo();
                }
            }}
        >
            {backgroundImage}
            <div className="background-shadow">
                <div className="texte">
                    <h2>{title}</h2>
                    <div className="texte-content">
                        <h3>Catégorie</h3>
                        <p>{texteCategorie}</p>
                    </div>
                    <div className="texte-content">
                        <h3>Réalisation</h3>
                        <p>{texteRealisation}</p>
                    </div>
                    <div className="texte-content">
                        <h3>Technologies</h3>
                        <p>{texteTechnologie}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardSiteWeb;


// *****************************************
// import './style/CardSiteWeb.scss';


// function CardSiteWeb({title, texteCategorie, texteRealisation, texteTechnologie, backgroundImage}) {


//     return (
//         <div
//             onClick={!isClicked}
//             className='container-site-web__card'>
//                 {backgroundImage}

//                 {}
//                 <div className="background-shadow">
//                     <div className="texte">
//                         <h2>{title}</h2>
//                         <div className="texte-content">
//                             <h3>Catégorie</h3>
//                             <p>{texteCategorie}</p>
//                         </div>
//                         <div className="texte-content">
//                             <h3>Réalistation</h3>
//                             <p>{texteRealisation}</p>
//                         </div>
//                         <div className="texte-content">
//                             <h3>Technologies</h3>
//                             <p>{texteTechnologie}</p>
//                         </div>
//                     </div>
//                 </div>
//         </div>
//     )
// }

// export default CardSiteWeb