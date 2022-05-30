import React from "react";
import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram , faFacebook , faTwitter , faPinterest } from '@fortawesome/free-brands-svg-icons'

export default function Footer({}){
    return(
    <section className='footer'>
    <div className='box-1'>
    <div> <a className='tittle-footer'href='home'>SUNNYSIDE</a></div>
    <div className='nav-footer'>
    <a className='items-footer' href='#'>About</a>
    <a className='items-footer' href='#'>Servicies</a>
    <a className='items-footer' href='#'>Proyects</a>
    </div>
    
    <div className='box-2'>
    <a className='items-box-2' href='#'><FontAwesomeIcon icon={faFacebook} /></a>
    <a className='items-box-2' href='#'><FontAwesomeIcon icon={faInstagram} /></a>
    <a className='items-box-2' href='#' ><FontAwesomeIcon icon={faTwitter} /></a>
    <a className='items-box-2' href='#'><FontAwesomeIcon icon={faPinterest} /></a>
    </div>
    </div>
    </section>
    )
}
