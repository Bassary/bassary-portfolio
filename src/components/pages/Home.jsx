import Header from '../Header'
import Card from '../Card'
import Button from '../Button'
import BannerFix from '../BannerFix'
import BannerMove from '../BannerMove'
import '../style/Home.scss'
import Modal from '../Modal'
import Contact from '../Contact'
import Footer from '../Footer'
import NavbarSticky from '../NavbarSticky'
import CV from '../../assets/CV_Bassary_Alexandre_Hariri.pdf'
import '../style/Modal.scss'
import InfoModal from '../InfoModal'
import TopChangeAnimation from '../animations/TopChangeAnimation'
import TopScrollAnimation from '../animations/TopScrollAnimation'

function Home() {
    return (
        <>
            <Header
                title={<><span className="h1-frontend">Front-End</span>
                    <span className="h1-design"> / Design</span></>}
            />
            <NavbarSticky />
            <main>
                <section className='section-introduction'>
                <TopChangeAnimation>
                    <Card
                        title={"Qui suis-je ?"}
                        texte={"Développer et designer Front-End depuis 2025, je crée un équilibre entre technicité, praticité et créativité au service de votre site"}
                        button={<Button classname={"main-button"} content={"Découvrez mon parcours"} link={"/mon-parcours"}/>}
                        banner={<BannerFix/>}
                    />
                </TopChangeAnimation>
                <TopChangeAnimation delay={0.2}>
                    <Card
                        title={"Mes projets"}
                        texte={"De l’intégration ou d’un site créé de A à Z, découvrez les projets sur lesquels j’ai travaillé"}
                        button={<Button classname={"main-button"} content={"Découvrez mes projets"} link={"/mes-projets"}/>}
                        banner={<BannerMove />}
                    />
                </TopChangeAnimation>
                </section>
                
                <section>
                    <div className='container__buttons'>
                        <Button classname={"second-button"} content={"Télécharger mon CV"} link={CV} target={"_blank"}/>
                        <Button classname={"second-button"} content={"GitHub"} link={"https://github.com/Bassary"} target={"_blank"}/>
                    </div>
                </section>
                <TopScrollAnimation className={"section-outils"}>
                    <h2>Mes outils de travail</h2>
                    <div className='container__mes-outils'>
                        <Modal
                            buttonTitle={"React"}
                            image={<img src='assets/logo_react.svg' alt='Logo React'/>}
                            className={"modal__content info-modal__react"}
                            buttonClassName={"button__default button__react"}
                            children={
                                <InfoModal
                                    image={<img src='assets/logo_react.svg' alt='Logo React'/> }
                                    title={'React'}
                                    texte={'React est une des bibliothèques les plus utilisées (ex. FaceBook, Instagram, Netflix) Elle permet de créer des interfaces utilisateur dynamiques, des applications web modernes, interactives et facilite la maintenance du code'}
                                />
                            }
                        />
                        <Modal
                            buttonTitle={"Redux"}
                            image={<img src='assets/logo_redux.svg' alt='Logo React'/>}
                            className={"modal__content info-modal__redux"}
                            buttonClassName={"button__default button__redux"}
                            children={
                                <InfoModal
                                    image={<img src='assets/logo_redux.svg' alt='Logo Redux'/> }
                                    title={'Redux'}
                                    texte={"Souvent utilisé avec React. Redux est un gestionnaire d’état pour les applications JavaScript. Il centralise toutes les données de l’application dans un seul endroit, ce qui facilite la gestion des données complexes, le partage d'information et la maintenance du code"}
                                />
                            }
                        />
                        <Modal
                            buttonTitle={"JavaScript"}
                            image={<img src='assets/logo_js.svg' alt='Logo React'/>}
                            className={"modal__content info-modal__javascript"}
                            buttonClassName={"button__default button__javascript"}
                            children={
                                <InfoModal
                                    image={<img src='assets/logo_js.svg' alt='Logo JavaScript'/> }
                                    title={'JavaScript'}
                                    texte={'JavaScript est un langage de programmation qui permet d’ajouter de l’interactivité aux pages web. Comme des animations, automatiser des tâches ou encore communiquer avec des serveurs pour récupérer ou envoyer des données'}
                                />
                            }
                        />
                        <Modal
                            buttonTitle={"GitHub"}
                            image={<img src='assets/logo_github.svg' alt='Logo GitHub'/>}
                            className={"modal__content info-modal__github"}
                            buttonClassName={"button__default button__github"}
                            children={
                                <InfoModal
                                    image={<img src='assets/logo_github.svg' alt='Logo github'/> }
                                    title={'GitHub'}
                                    texte={'GitHub est une plateforme en ligne incontournable, qui permet d’héberger et de sauvegarder du code source. C’est un réseau social pour développeurs qui participe à la collaboration et au partage du code'}
                                />
                            }

                        />
                        <Modal
                            buttonTitle={"L'IA"}
                            image={<img src='assets/logo_ia.svg' alt='Logo IA'/>}
                            className={"modal__content info-modal__ia"}
                            buttonClassName={"button__default button__ia"}
                            children={
                                <InfoModal
                                    image={<img src='assets/logo_ia.svg' alt='Logo IA'/> }
                                    title={"L'IA"}
                                    texte={"L'IA est devenue un outil redoutable et indispensable dans la vie des développeurs. Bien utilisé, il permet de gagner du temps, d'optimiser des tâches répétitives, de vulgariser des aspects techniques ainsi que de corriger certains bugs."}
                                />
                            }

                        />
                        <Modal
                            buttonTitle={"SASS"}
                            image={<img src='assets/logo_sass.svg' alt='Logo SASS'/>}
                            className={"modal__content info-modal__sass"}
                            buttonClassName={"button__default button__sass"}
                            children={
                                <InfoModal
                                    image={<img src='assets/logo_sass.svg' alt='Logo SASS'/> }
                                    title={'SASS'}
                                    texte={"SASS est une extension de CSS qui permet d’écrire du style de manière plus efficace. Il ajoute des fonctionnalités, ce qui évite les répétitions et améliorer l'organisation et la maintenance du code"}
                                />
                            }
                        />
                        <Modal
                            buttonTitle={"Figma"}
                            image={<img src='assets/logo_figma.svg' alt='Logo Figma'/>}
                            className={"modal__content info-modal__figma"}
                            buttonClassName={"button__default button__figma"}
                            children={
                                <InfoModal
                                    image={<img src='assets/logo_figma.svg' alt='Logo Figma'/> }
                                    title={'Figma'}
                                    texte={'Figma est un outil très populaire de design collaboratif en ligne. Il permet de créer des maquettes d’interfaces et prototypes interactifs avant de coder. Cela évite de gagner du temps en testant le parcours utilisateur.'}
                                />
                            }
                        />
                        <Modal
                            buttonTitle={"Notion"}
                            image={<img src='assets/logo_notion.svg' alt='Logo Notion'/>}
                            className={"modal__content info-modal__notion"}
                            buttonClassName={"button__default button__notion"}
                             children={
                                <InfoModal
                                    image={<img src='assets/logo_notion.svg' alt='Logo Notion'/> }
                                    title={'Notion'}
                                    texte={"Notion est un outil collaboratif tout-en-un qui combine prise de notes, gestion de projets, bases de données et wiki. Il est très populaire pour organiser son travail ou ses études. Idéal pour suivre l'avancée d'un projet"}
                                />
                            }
                        />
                    </div>
                </TopScrollAnimation>
                <TopScrollAnimation className={"section-form"} delay={0.2}>
                    <div className='section-form__texte-form'>
                        <div className='texte'>
                            <h2>Premier contact</h2>
                            <p>Vous êtes prêt à vous lancer dans un projet ?
                            Vous avez besoin de rafraîchir un site ou tout simplement des questions ?<br></br>
                            Il n’y a pas meilleure façon qu’un premier contact pour briser la glace
                            </p>
                        </div>
                        <Contact />
                    </div>
                    <img className='illustration' src='assets/illustration_contact.svg'/>
                </TopScrollAnimation>
            </main>
            <Footer />
        </>
        
    )
}

export default Home