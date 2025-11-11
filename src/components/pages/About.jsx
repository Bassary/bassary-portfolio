import '../style/About.scss'
import Header from '../Header'
import Footer from '../Footer'
import NavbarSticky from '../NavbarSticky'
import Tag from '../Tag'
import Card from '../Card'
import Button from '../Button'
import TopChangeAnimation from '../animations/TopChangeAnimation'
import TopScrollAnimation from '../animations/TopScrollAnimation'


function About() {
    return (
        <>   
            <Header
                title={<><span className="h1-design">Mon</span>
                    <span className="h1-frontend"> parcours</span></>}
            />
             
            <NavbarSticky />
            <main className='main-container'>
                <TopChangeAnimation className={"section-parcours"}>
                        <div className='container'>
                            <div className='container__content'>
                                <h2>Formation</h2>
                                <div className='container__tag'>
                                    <Tag
                                    content={"Openclassrooms"}
                                    />
                                    <Tag
                                        content={"Autodidacte"}
                                    />
                                </div>
                                <p>Développeur React Js junior de 34 ans: après un parcours dans le relationnel et l'artistique,<br></br>
                                    j’ai découvert le monde du Front-End et du design par hasard en 2021.
                                </p>
                                <p>J’ai décidé par la suite de me former professionnellement.<br></br>
                                    J’ai ainsi suivi une formation en tant qu’intégrateur web chez OpenClassrooms,
                                    qui prit fin en 2025.
                                </p>
                            </div>
                            <div className='container__content'>
                                <h2>Compétences</h2>
                                <div className='container__tag'>
                                    <Tag
                                    content={"Front-End"}
                                    />
                                    <Tag
                                    content={"React Js"}
                                    />
                                    <Tag
                                    content={"UI/UX"}
                                    />
                                    <Tag
                                        content={"Relationnel"}
                                    />
                                </div>
                                <p>Entre ma formation et les diverses compétences acquises au fil de mes expériences professionnelles,<br></br>
                                    je considère que ma force réside dans l’alliance de la créativité,
                                    de la technicité et du relationnel.
                                </p>
                                <p>Cependant,je suis convaincu qu’on n’a jamais fini d’apprendre.<br></br>
                                    Ainsi, je continue de découvrir de nouvelles manières d’améliorer mon travail,<br></br>
                                    tout en fidélisant mes compétences et outils que je maîtrise déjà.
                                </p>
                            </div>
                        </div>
                        <div className='container__illustration'>
                            <img className='illustration-parcours' src='./src/assets/illustration_parcours.svg'/>
                        </div>
                </TopChangeAnimation>
                <TopScrollAnimation className={"section-outils-about"}>
                     <div className='section-outils-about__logo'>
                        <img src='./src/assets/logo_react.svg' alt='React'/>
                        <p>React</p>
                    </div>
                    <div className='section-outils-about__logo'>
                        <img src='./src/assets/logo_js.svg' alt='JavaScript'/>
                        <p>JavaScript</p>
                    </div>
                    <div className='section-outils-about__logo'>
                        <img src='./src/assets/logo_redux.svg' alt='Redux'/>
                        <p>Redux</p>
                    </div>
                    <div className='section-outils-about__logo'>
                        <img src='./src/assets/logo_figma.svg' alt='Figma'/>
                        <p>Figma</p>
                    </div>
                    <div className='section-outils-about__logo'>
                        <img src='./src/assets/logo_sass.svg' alt='Sass'/>
                        <p>Sass</p>
                    </div>
                    <div className='section-outils-about__logo'>
                        <img src='./src/assets/logo_github.svg' alt='GitHub'/>
                        <p>Github</p>
                    </div>
                    <div className='section-outils-about__logo'>
                        <img src='./src/assets/logo_notion.svg' alt='Notion'/>
                        <p>Notion</p>
                    </div>
                </TopScrollAnimation>

                <TopScrollAnimation className={"section-devis"} delay={0.2}>
                    <div className='section-devis__card'>
                        <Card
                        image={<img src='./src/assets/logo_check.svg' alt='logo check'/>}
                        title={"Challenge accepted !"}
                        texte={"Chaque projet est un nouveau défi que j’aime relever. Prendre le temps de comprendre les enjeux de votre demande pour mettre en valeur votre projet et lui donner vie constitue la colonne vertébrale de mon métier."}
                    />
                    <Card
                        image={<img src='./src/assets/logo_oeil.svg' alt='logo check'/>}
                        title={"Voir au delà"}
                        texte={"Par expérience, je sais qu’il est difficile d’appréhender un projet dans son ensemble. C’est pourquoi je prends le temps d’aller plus loin avec vous, de voir les détails : pour éviter les mauvaises surprises et maximiser les opportunités."}
                    />
                    </div>
                    <Button
                        classname={"main-button"}
                        content={"Demander un devis"}
                        link={"/contact"}
                    />
                </TopScrollAnimation>   
            </main>
            <Footer />
        </>
        
    )
}

export default About