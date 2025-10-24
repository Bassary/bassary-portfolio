import './style/Card.scss'

function Card({title, texte, button, banner}) {
    return (
        <div className="container-card">
            <div className="container-card__texte">
                <h2>{title}</h2>
                <p>{texte}</p>
                {banner}
            </div>
            {button}
        </div>
    )
}

export default Card;