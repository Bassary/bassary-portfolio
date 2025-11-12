import TopChangeAnimation from "../animations/TopChangeAnimation"
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
            <TopChangeAnimation className={'section-form form-contact'}>
                <div className='section-form__texte-form'>
                    <div className='texte'>
                        <h2>Comme une lettre à la poste</h2>
                        <p>Un projet, un devis, des questions : je suis là pour vous !</p>
                    </div>
                    <Contact />
                </div>
                <img className='illustration' src='assets/illustration_contact.svg'/>
            </TopChangeAnimation>
            
        </main>
        <Footer />
         
        </>
       
    )
}

export default FormContact