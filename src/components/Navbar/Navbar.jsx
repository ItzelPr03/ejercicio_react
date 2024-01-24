import Button from '../Button/button.jsx';
import './Navbar.css';

const Navbar=(props)=>{
    return(
        
        <div className='nav-container'>
            <div className='navbar'>
                {
                    props.links.map((link)=>(
                        <Button key={link.id} { ... link}/>
                    ))
                }
            </div>
           
        </div>
    )
    
    // const divStyle={
    //     backgroundColor:'#F3D7CA',
    //     width:'100vw',
    //     height:'150px',
    // } esto se hizo antes del documento navbar.css para los estilos
}

export default Navbar;