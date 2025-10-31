import { Link } from "react-router-dom"
import './style/button.scss'

function Button({ classname, link, content, target}) {
    return (
        <Link target={target} id="button" className={classname} to={link}>{content}</Link>
    )
}

export default Button