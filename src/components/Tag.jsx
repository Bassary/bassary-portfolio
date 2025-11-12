import './style/Tag.scss';

function Tag({content}) {
    return (
        <div className='tag'>
            <img className='tag__image' src="assets/logo_etiquette.svg" alt="tag"/>
            <span className='tag__content'>{content}</span>
        </div>
    )
}

export default Tag