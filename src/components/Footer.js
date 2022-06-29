import { Link } from 'react-router-dom'

const Footer = () => {
    
    return(
       <div className='footer'>
        Click on a photo for more info<br/>
         <Link to="./">Go to story list</Link>   
      </div>
    )
}

export default Footer