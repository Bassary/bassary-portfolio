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
                                <p>Porté par l’envie de créer une application, j’ai commencé à coder sans aucune connaissance préalable.<br></br>
                                    Grâce à ma détermination, je la développe aujourd’hui par moi-même, ce qui me permet d’acquérir de nouvelles compétences.
                                </p>
                                <p>
                                    Ma patience, ma logique et mon adaptabilité sont mes principaux atouts. <br></br>
                                    J’ai appris le développement Front-End en autodidacte,
                                    puis j’ai approfondi mes connaissances avec OpenClassrooms.
                                    Aujourd’hui, je me diversifie de plus en plus vers des compétences full-stack.
                                </p>
                            </div>
                            <div className='container__content'>
                                <h2>Compétences</h2>
                                <div className='container__tag'>
                                    <Tag
                                    content={"React Js"}
                                    />
                                    <Tag
                                    content={"React Native"}
                                    />
                                    <Tag
                                    content={"JavaScript/TypeScript"}
                                    />
                                    <Tag
                                    content={"UI/UX"}
                                    />
                                </div>
                                <div className='container__tag'>
                                    <Tag
                                        content={"Relationnel"}
                                    />
                                    <Tag
                                        content={"Organisation"}
                                    />
                                    <Tag
                                        content={"Communication"}
                                    />
                                    <Tag
                                        content={"Patience"}
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
                            <img className='illustration-parcours' src='assets/illustration_parcours.svg'/>
                        </div>
                </TopChangeAnimation>
                <TopScrollAnimation className={"section-outils-about"}>
                     <div className='section-outils-about__logo'>
                        <img src='assets/logo_react.svg' alt='React'/>
                        <p>React</p>
                    </div>
                    <div className='section-outils-about__logo'>
                        <img src='assets/logo_js.svg' alt='JavaScript'/>
                        <p>JavaScript</p>
                    </div>
                    <div className='section-outils-about__logo'>
                        <img src='assets/logo_redux.svg' alt='Redux'/>
                        <p>Redux</p>
                    </div>
                    <div className='section-outils-about__logo'>
                        <img src='assets/logo_figma.svg' alt='Figma'/>
                        <p>Figma</p>
                    </div>
                    <div className='section-outils-about__logo'>
                        <img src='assets/logo_sass.svg' alt='Sass'/>
                        <p>Sass</p>
                    </div>
                    <div className='section-outils-about__logo'>
                        <img src='assets/logo_github.svg' alt='GitHub'/>
                        <p>Github</p>
                    </div>
                    <div className='section-outils-about__logo'>
                        <img src='assets/logo_notion.svg' alt='Notion'/>
                        <p>Notion</p>
                    </div>
                </TopScrollAnimation>

                <TopScrollAnimation className={"section-devis"} delay={0.2}>
                    <div className='section-devis__card'>
                        <Card
                        image={<img src='assets/logo_check.svg' alt='logo check'/>}
                        title={"Challenge accepted !"}
                        texte={"Chaque projet est un nouveau défi que j’aime relever. Prendre le temps de comprendre les enjeux de votre demande pour mettre en valeur votre projet et lui donner vie constitue la colonne vertébrale de mon métier."}
                    />
                    <Card
                        image={<img src='assets/logo_oeil.svg' alt='logo check'/>}
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