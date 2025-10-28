import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import './style/Contact.scss'
// import Spinner from './Spiner';
// import Alert from './Alert'

export const Contact = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [btnHidden, setBtnHidden] = useState(true)
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isAlert, setIsAlert] = useState(false)
    const [formData, setFormData] = useState({user_name:"", user_email:"", message:""})
    const form = useRef();

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const {user_name, user_email, message} = formData

    if (!user_name || !user_email || !message) {
        setIsLoading(false)
        return(
            setIsAlert(true)
        )
    }

    emailjs
      .sendForm('', '', form.current, {
        publicKey: '',
      })
      .then(
        () => {
          form.current.reset()
          setIsLoading(false)
          setBtnHidden(false)
          setIsAlert(false)
          setIsSuccess(true)
          
        },
        () => {
          form.current.reset()
          setIsLoading(false)
          setBtnHidden(false)
          setIsAlert(false)
          setIsError(true)
          
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        {isAlert && <Alert
                imageSrc="assets/warrning.svg"
                imageAlt="attention"
                message="Veuillez rentrer tous les champs du formulaire"
            />}
        <div className='container'>
            <label htmlFor="user_name">Nom :</label>
            <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} />
        </div>
        <div className='container'>
            <label htmlFor="user_email">Email :</label>
            <input type="email" name="user_email"  value={formData.user_email} onChange={handleChange} />
        </div>
        <div className='container container__message'>
            <label htmlFor="message">Message :</label>
            <textarea name="message" value={formData.message} onChange={handleChange} />
        </div>
        {btnHidden && <button id='button' className='main-button' type="submit"
        style={{display: 'block'}}
        onClick={()=> setIsLoading(true)}
        >
        {isLoading ? <Spinner /> : "Envoyer"}
        </button> }
      
        {isSuccess &&
            <Alert
                imageSrc='assets/check.svg'
                imageAlt='succes'
                message='Message envoyé avec succès ! Vous recevrez un email de confirmation, pensez à vérifier vos spams'
            /> 
        }
        
        {isError &&
            <Alert
                imageSrc='assets/error.svg'
                imageAlt='error'
                message="Navré, une erreur s'est produite. Veuillez réessayer ultérieurement ou essayer une autre méthode"
            />
        }
        
    </form>
  );
};

export default Contact