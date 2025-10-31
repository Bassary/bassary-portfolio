import Contact from "../Contact"
import Footer from "../Footer"
import Header from "../Header"
import NavbarSticky from "../NavbarSticky"

function FormContact () {
    return(
        <>
        <Header
                title={<><span className="h1-design">Me</span>
                    <span className="h1-frontend"> contacter</span></>}
            />
            <NavbarSticky />
        <main>
            <section className='section-form'>
                <div className='section-form__texte-form'>
                    <div className='texte'>
                        <h2>Faisons connaissance</h2>
                        <p>Vous êtes prêt à vous lancer dans un projet ?
                        Vous avez besoin de rafraîchir un site ou tout simplement des questions ?<br></br>
                        Il n’y a pas meilleure façon qu’un premier contact pour briser la glace
                        </p>
                    </div>
                    <Contact />
                </div>
                <img className='illustration' src='./src/assets/illustration_contact.svg'/>
            </section>
            
        </main>
        <Footer />
         
        </>
       
    )
}

export default FormContact