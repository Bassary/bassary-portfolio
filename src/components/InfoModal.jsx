import './style/Modal.scss'

function InfoModal({title, texte, image}) {
    return (
        <div className="info-modal__container">
            {image}
            <h2>{title}</h2>
            <p>{texte}</p>
        </div>
    )
}

export default InfoModal;