function Alert({message, imageSrc, imageAlt}) {
    return (
        <div className='message' style={{display: 'flex'}}>
            <img src={imageSrc} alt={imageAlt}/>
            <span>{message}</span>
        </div>
    )
}

export default Alert