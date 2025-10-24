import { Link } from "react-router-dom"
import './style/button.scss'

function Button({ classname, link, content, selected }) {
    return (
        <Link id="button" className={classname} to={link}>{content}</Link>
    )
}

export default Button