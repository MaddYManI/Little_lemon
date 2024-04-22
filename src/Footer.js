import { useNavigate } from 'react-router-dom';
import './Footer.css'

function Footer (){
    const navigate  =useNavigate()

    const trigger_navigate=()=>{
        navigate('/')
    }
    return(
        <footer className='box' >
                  <ul className='navigation'><b>Navigation</b>
                    <li className='footer2' onClick={trigger_navigate}>Home</li>
                    <li className='footer2'>About</li>
                    <li className='footer2'>menu</li>
                    <li className='footer2'>reservation</li>
                    <li className='footer2'>Order Online</li>
                    <li className='footer2'>Login</li>
                </ul>
                <ul className='contact'><b>Contact</b>
                    <li className='footer2'>Address</li>
                    <li className='footer2'>Phone number</li>
                    <li className='footer2'>Email</li>
                </ul>
                <ul className='socialmedia'><b>Social Media Links</b>
                    <li className='footer2'>Facebook</li>
                    <li className='footer2'>Twitter</li>
                    <li className='footer2'>Whatsapp</li>
                </ul>
        </footer>
      )

}
export default Footer;