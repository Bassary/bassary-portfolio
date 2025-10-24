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

function Home() {
    return (
        <>
            <Header
                title={<><span className="h1-frontend">Front-End</span>
                    <span className="h1-design"> / Design</span></>}
            />
            <NavbarSticky />
            <main>
                <section>
                    <Card
                        title={"Qui suis-je ?"}
                        texte={"Développer et designer Front-End depuis 2025, je crée un équilibre entre technicité, praticité et créativité au service de votre site"}
                        button={<Button classname={"main-button"} content={"Découvrez mon parcours"} link={"/mon-parcours"}/>}
                        banner={<BannerFix/>}
                    />
                    <Card
                        title={"Mes projets"}
                        texte={"De l’intégration, ou d’un site créé de A à Z, découvrez les projets sur lesquels j’ai travaillé"}
                        button={<Button classname={"main-button"} content={"Découvrez mon travail"} link={"/mes-projets"}/>}
                        banner={<BannerMove />}
                    />
                </section>
                <section>
                    <div className='container__buttons'>
                        <Button classname={"second-button"} content={"Télécharger mon CV"}/>
                        <Button classname={"second-button"} content={"GitHub"}/>
                    </div>
                </section>
                <section>
                    <h2>Mes outils de travail</h2>
                    <div className='container__mes-outils'>
                        <Modal
                            title={"React"}
                            image={<img src='./src/assets/logo_react.svg' alt='Logo React'/>}
                            className={"button__default button__react"}
                        />
                        <Modal
                            title={"Redux"}
                            image={<img src='./src/assets/logo_redux.svg' alt='Logo React'/>}
                            className={"button__default button__redux"}
                        />
                        <Modal
                            title={"JavaScript"}
                            image={<img src='./src/assets/logo_js.svg' alt='Logo React'/>}
                            className={"button__default button__javascript"}
                        />
                        <Modal
                            title={"GitHub"}
                            image={<img src='./src/assets/logo_github.svg' alt='Logo GitHub'/>}
                            className={"button__default button__github"}
                        />
                        <Modal
                            title={"HTML/CSS"}
                            image={<img src='./src/assets/logo_html_css.svg' alt='Logo HTML CSS'/>}
                            className={"button__default button__html-css"}
                        />
                        <Modal
                            title={"SASS"}
                            image={<img src='./src/assets/logo_sass.svg' alt='Logo SASS'/>}
                            className={"button__default button__sass"}
                        />
                        <Modal
                            title={"Figma"}
                            image={<img src='./src/assets/logo_figma.svg' alt='Logo Figma'/>}
                            className={"button__default button__figma"}
                        />
                        <Modal
                            title={"Notion"}
                            image={<img src='./src/assets/logo_notion.svg' alt='Logo Notion'/>}
                            className={"button__default button__notion"}
                        />
                    </div>
                </section>
                <section>
                    <div>
                        <h2>Premier contact</h2>
                        <p>Vous êtes prêt à vous lancer dans un projet ?
                            Vous avez besoin de rafraîchir un site ou tout simplement des questions ?
                            Il n’y a pas meilleure façon qu’un premier contact pour briser la glace
                        </p>
                    </div>
                    <Contact />
                </section>
            </main>
            <Footer />
        </>
        
    )
}

export default Home