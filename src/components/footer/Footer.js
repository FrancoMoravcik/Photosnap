import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <main className='mainFooter'>
           <div className='m-5'>          
              <img className='logoBlanco' src='img/logoBlanco.png' alt='logo'></img>
              <div className='divRedesYUl'>
              <div className='divRedesFooter'>
                <img className='imgRedesFoter' src='img/facebook.svg' alt='redes'></img>
                <img className='imgRedesFoter' src='img/youtube.svg' alt='redes'></img>
                <img className='imgRedesFoter' src='img/twitter.svg' alt='redes'></img>
                <img className='imgRedesFoter' src='img/pinterest.svg' alt='redes'></img>
                <img className='imgRedesFoter' src='img/instagram.svg' alt='redes'></img>
              </div> 

              <ul className='ulFooter'>
                   <li className='liFooter'><Link className='aLiFooter' to="/">HOME</Link></li>
                    <li className='liFooter'><Link className='aLiFooter' to="/stories">STORIES</Link></li>
                    <li className='liFooter'><Link className='aLiFooter' to="/features">FEATURES</Link></li>
                    <li className='liFooter'><Link className='aLiFooter' to="/pricing">PRICING</Link></li>
              </ul>
              </div>
           </div>

           <div className='div2Footer'>
           <button className='btnDiv1Seccion1Photosnap m-1'>GET AN INVITE<img className='imgFlechaPhotosnap' src='img/flechaBlanca.png' alt=''></img></button>
           <p className='pFooter'>Challenge by <a className='aDiv2Footer' href='https://www.frontendmentor.io/challenges/photosnap-multipage-website-nMDSrNmNW'>Frontend Mentor</a>. Coded by <a className='aDiv2Footer' href='https://github.com/FrancoMoravcik?tab=repositories'>Franco Moravcik</a></p>
           </div>
        </main>
    )
}

export default Footer