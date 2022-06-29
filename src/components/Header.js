import { Link } from 'react-router-dom'

const Header = () => {
    
    return(
        <>
        <div className='header'>
            <img src="../media/header.png" alt="xxx"/><br/>
            <Link to="./">Story List</Link>            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              
            <a target="_blank" href="https://www.youtube.com/channel/UCYKrylqF7lBdwAyDvRTLr1A">Youtube Channel</a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a target="_blank" href="https://www.facebook.com/ken.knittel">Facebook Account</a>
           
            <hr/>
        </div>
        </>
       
    )
}

export default Header