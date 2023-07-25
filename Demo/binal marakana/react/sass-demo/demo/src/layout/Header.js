import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <>
        <div className='c_top_header_wrap'>
            <div className='container'>
                <div className='row d_flex d_flexwrap d_justbetween d_aligncenter'>
                    <div className='c_leftside'>
                        <p>
                            <Link><span className='c_icon'><FontAwesomeIcon icon={faPhone} /> </span>+00 1234 567</Link>
                            <Link><span className='c_icon'><FontAwesomeIcon icon={faPaperPlane} /></span>youremail@email.com</Link>
                        </p>
                    </div>
                    <div className='c_leftside'>
                        <p>
                            <Link><span> </span>+00 1234 567</Link>
                            <Link><span></span>youremail@email.com</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <header class="cpq_header">
            <div class="container d_flex d_flexwrap d_justbetween d_aligncenter">
                <div class="cpq_logo_wrapper">
                    <a href="#">
                            <img src="./assets/Images/cpq_logo.svg" alt="CPQ Logo"/>
                    </a>
                </div>
                <div class="cpq_menu_wrapper">
                    <nav>
                            <div class="nav-mobile">
                                <a id="nav-toggle" href="JavaScript:;" class=""><span></span></a>
                            </div>

                            <ul class="menu_list" id="navMenus">
                                <li class="dropdown">
                                    <a href="#">Quote Generator</a>
                                    <ul class="sub-menu">
                                        <li><a href="#">2.1</a></li>
                                        <li><a href="#">2.2</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown"><a href="#">Currency</a></li>
                                <li class="dropdown"><a href="#">Plans</a></li>
                                <li class="dropdown"><a href="#">Users</a></li>
                                <li class="dropdown"><a href="#">General Settings</a></li>
                                <li class="dropdown"><a href="#">Proposals</a></li>
                            </ul>

                            <div class="profile_wrapper">
                                <div class="profile_img">
                                    <img src="./assets/Images/cpq_profile.jpg" alt="CPQ Profile"/>

                                    <div class="dropdown_icon_wrapper">
                                        <i class="fa fa-angle-down"></i>
                                        <ul class="dropdown_list">
                                                <li><a href="#"><i class="fa fa-key"></i> Logout</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </nav>
                </div>
            </div>
        </header>
    </>
  )
}

