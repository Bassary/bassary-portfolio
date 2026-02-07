import '../style/Work.scss'
import Header from '../Header'
import Footer from '../Footer'
import NavbarSticky from '../NavbarSticky'
import Tag from '../Tag'
import Button from '../Button'
import CardSiteWeb from '../CardSiteWeb'
import TopChangeAnimation from '../animations/TopChangeAnimation'

function Work() {
    return (
        <>
             <Header
                title={<><span className="h1-design">Mes</span>
                    <span className="h1-frontend"> projets</span></>}
            />
            <NavbarSticky />
            <main className='main-container'>
                <TopChangeAnimation className={"section-card-site-web"}>
                    <h2>Sélection de site web</h2>
                    <div className='parent'>
                        <div className='container-site-web'>
                            <CardSiteWeb
                                backgroundImage={<img className='background-image' src='assets/capture-baladi.png'/>}
                                title={"Baladi"}
                                texteCategorie={"Restaurant libanais situé à Paris"}
                                texteRealisation={"Direction artistique, design, maquette, intégration, production"}
                                texteTechnologie={"React + Vite, TypeScript, Figma"}
                            />
                            <div className='container-site-web__button-tag'>
                                <div className='flex-tag'>
                                    <Tag content={"Design"}/>
                                    <Tag content={"React"}/>
                                    <Tag content={"SEO"}/>
                                </div>
                                <div className='container-site-web__button'>
                                    <Button classname={"main-button"} content={"Visiter le site"} link={"https://www.restaurant-baladi.fr/"} target={'_blank'}/>
                                    <Button classname={"second-button"} content={"GitHub"} link={"https://github.com/Bassary/Baladi"} target={'_blank'}/>
                                </div>
                            </div>
                        </div>
                        <div className='container-site-web'>
                            <CardSiteWeb
                                backgroundImage={<img className='background-image' src='assets/capture-lokowls.png'/>}
                                title={"Lokowls"}
                                texteCategorie={"Site vitrine pour monteur vidéo"}
                                texteRealisation={"Direction artistique, design, maquette, intégration, production"}
                                texteTechnologie={"React js + Vite, Email.js, Figma"}
                            />
                            <div className='container-site-web__button-tag'>
                                <div className='flex-tag'>
                                    <Tag content={"Design"}/>
                                    <Tag content={"React"}/>
                                    <Tag content={"SEO"}/>
                                </div>
                                <div className='container-site-web__button'>
                                    <Button classname={"main-button"} content={"Visiter le site"} link={"https://lokowls.com/"} target={'_blank'}/>
                                    <Button classname={"second-button"} content={"GitHub"} link={"https://github.com/Bassary/Lokowls"} target={'_blank'}/>
                                </div>
                            </div>
                        </div>
                        <div className='container-site-web'>
                            <CardSiteWeb
                                backgroundImage={<img className='background-image' src='assets/capture-ohmyfood.png'/>}
                                title={"Ohmyfood"}
                                texteCategorie={"Composition de menu"}
                                texteRealisation={"intégration, responsive, animation, transition"}
                                texteTechnologie={"SASS, CSS animation"}
                            />
                            <div className='container-site-web__button-tag'>
                                <div className='flex-tag'>
                                    <Tag content={"Responsive"}/>
                                    <Tag content={"CSS Animation"}/>
                                </div>
                                <Button classname={"second-button"} content={"GitHub"} link={"https://github.com/Bassary/OhMyFood"} target={"_blank"}/>
                            </div>
                        </div>
                        <div className='container-site-web'>
                            <CardSiteWeb
                                backgroundImage={<img className='background-image' src='assets/capture-argentbank.png'/>}
                                title={"ArgentBank"}
                                texteCategorie={"Application bancaire"}
                                texteRealisation={"Intégration, connexion, récupération des données"}
                                texteTechnologie={"React js + Vite, NodeJs"}
                            />
                            <div className='container-site-web__button-tag'>
                                <div className='flex-tag'>
                                    <Tag content={"Login"}/>
                                    <Tag content={"NodeJs"}/>
                                </div>
                                <Button classname={"second-button"} content={"GitHub"} link={"https://github.com/Bassary/Argent-Bank-FrontEnd"} target={"_blank"}/>
                            </div>
                        </div>
                    </div>
                </TopChangeAnimation>
                
            </main>
            <Footer />
        </>
        
    )
}

export default Work