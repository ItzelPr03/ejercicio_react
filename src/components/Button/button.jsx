
import{Link} from 'react-router-dom'
import './Button.css'

const Button=(props)=>{
    console.log(props.id);
    return(
        <Link  to={props.href}>
            <button>{props.name}</button>
        </Link>
    )
}

Button.defaultProps={ //si no se ingresa la info necesaria, esto es lo que sale
    
    name:"Hola", //por default
    href:"/",
}

export default Button