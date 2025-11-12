import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './style/Contact.scss';
import Spinner from './Spiner';
import Alert from './Alert';

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJsTemplateId = import.meta.env.VITE_TEMPLATE_ID;
const emailJsKey = import.meta.env.VITE_EMAILJS_KEY;

export const Contact = () => {
    

    const [isLoading, setIsLoading] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isAlert, setIsAlert] = useState(false);
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: ""
    });

    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (isAlert) setIsAlert(false);
        if (!showButton) {
            setShowButton(true);
            setIsSuccess(false);
            setIsError(false);
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsAlert(false);

        const { user_name, user_email, message } = formData;
        if (!user_name || !user_email || !message || !validateEmail(user_email)) {
            setIsAlert(true);
            setIsLoading(false);
            return;
        }

        emailjs
            .sendForm(emailJsServiceId, emailJsTemplateId, form.current, {
                publicKey: emailJsKey,
            })
            .then(
                () => {
                    form.current.reset();
                    setFormData({ user_name: "", user_email: "", message: "" });
                    setIsLoading(false);
                    setShowButton(false);
                    setIsSuccess(true);
                },
                () => {
                    form.current.reset();
                    setFormData({ userData: "", user_email: "", message: "" });
                    setIsLoading(false);
                    setShowButton(false);
                    setIsError(true);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            {isAlert && (
                <Alert
                    imageSrc="./src/assets/logo_mark_mail.svg"
                    imageAlt="attention"
                    message="Veuillez remplir tous les champs du formulaire et vérifier votre email."
                />
            )}
            <div className='container'>
                <label htmlFor="user_name">Nom :</label>
                <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                />
            </div>
            <div className='container'>
                <label htmlFor="user_email">Email :</label>
                <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                />
            </div>
            <div className='container container__message'>
                <label htmlFor="message">Message :</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                />
            </div>
            {showButton && (
                <button
                    id='button'
                    className='main-button'
                    type="submit"
                    disabled={isLoading}
                    aria-busy={isLoading}
                >
                    {isLoading ? <Spinner /> : "Envoyer"}
                </button>
            )}

            {isSuccess && (
                <Alert
                    imageSrc='./src/assets/logo_check_mail.svg'
                    imageAlt='succès'
                    message='Message envoyé avec succès ! Vous recevrez un email de confirmation, pensez à vérifier vos spams.'
                />
            )}

            {isError && (
                <Alert
                    imageSrc='./src/assets/logo_cross_mail.svg'
                    imageAlt='erreur'
                    message="Navré, une erreur s'est produite. Veuillez réessayer ultérieurement ou essayer une autre méthode."
                />
            )}
        </form>
    );
};

export default Contact;









// ******************************************************************************************
// import { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import './style/Contact.scss'
// import Spinner from './Spiner';
// import Alert from './Alert'

// export const Contact = () => {

//     const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
//     const emailJsTemplateId = import.meta.env.VITE_TEMPLATE_ID
//     const emailJsKey = import.meta.env.VITE_EMAILJS_KEY
    

//     const [isLoading, setIsLoading] = useState(false)
//     const [btnHidden, setBtnHidden] = useState(true)
//     const [isSuccess, setIsSuccess] = useState(false)
//     const [isError, setIsError] = useState(false)
//     const [isAlert, setIsAlert] = useState(false)
//     const [formData, setFormData] = useState({user_name:"", user_email:"", message:""})
//     const form = useRef();

//     const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     const {user_name, user_email, message} = formData

//     if (!user_name || !user_email || !message) {
//         setIsLoading(false)
//         return(
//             setIsAlert(true)
//         )
//     }

//     emailjs
//       .sendForm(emailJsServiceId, emailJsTemplateId, form.current, {
//         publicKey: emailJsKey,
//       })
//       .then(
//         () => {
//           form.current.reset()
//           setIsLoading(false)
//           setBtnHidden(false)
//           setIsAlert(false)
//           setIsSuccess(true)
          
//         },
//         () => {
//           form.current.reset()
//           setIsLoading(false)
//           setBtnHidden(false)
//           setIsAlert(false)
//           setIsError(true)
          
//         },
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//         {isAlert && <Alert
//                 imageSrc="./src/assets/logo_mark_mail.svg"
//                 imageAlt="attention"
//                 message="Veuillez rentrer tous les champs du formulaire"
//             />}
//         <div className='container'>
//             <label htmlFor="user_name">Nom :</label>
//             <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} />
//         </div>
//         <div className='container'>
//             <label htmlFor="user_email">Email :</label>
//             <input type="email" name="user_email"  value={formData.user_email} onChange={handleChange} />
//         </div>
//         <div className='container container__message'>
//             <label htmlFor="message">Message :</label>
//             <textarea name="message" value={formData.message} onChange={handleChange} />
//         </div>
//         {btnHidden && <button id='button' className='main-button' type="submit"
//         style={{display: 'block'}}
//         onClick={()=> setIsLoading(true)}
//         >
//         {isLoading ? <Spinner /> : "Envoyer"}
//         </button> }
      
//         {isSuccess &&
//             <Alert
//                 imageSrc='./src/assets/logo_check_mail.svg'
//                 imageAlt='succes'
//                 message='Message envoyé avec succès ! Vous recevrez un email de confirmation, pensez à vérifier vos spams'
//             /> 
//         }
        
//         {isError &&
//             <Alert
//                 imageSrc='./src/assets/logo_cross_mail.svg'
//                 imageAlt='error'
//                 message="Navré, une erreur s'est produite. Veuillez réessayer ultérieurement ou essayer une autre méthode"
//             />
//         }
        
//     </form>
//   );
// };

// export default Contact