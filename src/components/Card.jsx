import './style/Card.scss'

function Card({title, texte, button, banner, image}) {
    return (
        <div className="container-card">
            <div className="container-card__texte">
                <div className='container-card__texte--image'>{image}</div>
                <h2>{title}</h2>
                <p>{texte}</p>
                {banner}
            </div>
            {button}
        </div>
    )
}

export default Card;