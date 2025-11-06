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
            <section className='section-form form-contact'>
                    <Contact />
                
                <img className='illustration' src='./src/assets/illustration_contact.svg'/>
            </section>
            
        </main>
        <Footer />
         
        </>
       
    )
}

export default FormContact