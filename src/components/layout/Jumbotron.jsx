import React from 'react'

import Logo from '../../img/campus.png'
import Facebook from '../../img/facebook.png'
import Twitter from '../../img/twitter.png'
import Youtube from '../../img/youtube.png'
import Instagram from '../../img/instagram.png'

import '../css/jumbotron.css'

const Jumbotron = () => {
    return ( 
        <div className="jumbotron jumbotron-fluid">
            {/* <div className="container jumbo">
                <div className="container-logo">
                    <img className="logo" src={Logo} alt=""/>
                    <h4>Blog de noticias para el campus virtual</h4>
                </div>
                <div className="container-redes">
                    
                    <div className="item2">

                        <h2 className="titulo-redes">Visítanos En</h2>
                    </div>
                    <div className="item">
                        <img className="" src={Facebook} alt=""/>      
                    </div>
                    <div className="item">
                        <img className="" src={Twitter} alt=""/>

                    </div>
                    <div className="item">
                        <img className="" src={Youtube} alt=""/>

                    </div>
                    <div className="item">
                        <img className="" src={Instagram} alt=""/>

                    </div>
                </div>
            </div> */}
        </div>
     );
}
 
export default Jumbotron;