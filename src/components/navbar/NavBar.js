import './NavBar.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

    const [menuResponsive, setMenuResponsive] = useState(false)

    const handleMenuChange = () => {
        setMenuResponsive(true)
    }

    const handleMenuChangeResponsive = () => {
        setMenuResponsive(false)
    }

    return (
        <nav className={menuResponsive === false ? 'navBar' : 'navBarResponsive'} >

            <Link to='/'><img className={menuResponsive === false ? 'imgLogoNavBar' : 'imgLogoNavBarResponsive'} src='./img/logo.png' alt='logo'></img></Link>

            <ul className={menuResponsive === false ? 'ulNavBar' : 'ulNavBarResponsive'} >

                <div className={menuResponsive === false ? 'divCerraNavBar' : 'divCerrarNavBarResponsive '}>
                    <img className='imgLogoNavBar imgLogoNavBarOculto' src='./img/logo.png' alt='logo'></img>
                    <button className='btnCerrarMenu' onClick={handleMenuChangeResponsive}><FontAwesomeIcon icon={faXmark} /></button>
                </div>

              <div className='d-flex divLista'>
                    <li className='liUlNavBar'><Link className='aLiUlNavBar' to="/stories">STORIES</Link></li>
                    <li className='liUlNavBar'><Link className='aLiUlNavBar' to="/features">FEATURES</Link></li>
                    <li className='liUlNavBar'><Link className='aLiUlNavBar' to="/pricing">PRICING</Link></li>
            
              </div>
                


                <div className='divBtnInvite'>

                    <hr></hr>

                    <button className='btnNavBar'>GET AN INVITE</button>
                </div>

            </ul>

            <div>
                <button onClick={handleMenuChange} className={menuResponsive === true ? 'btnMenu' : 'btnMenuResponsive'} ><FontAwesomeIcon icon={faBars} /></button>
            </div>

        </nav>
    )
}

export default NavBar