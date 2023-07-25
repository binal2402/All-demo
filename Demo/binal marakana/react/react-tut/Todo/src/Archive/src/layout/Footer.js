import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

// Components
// import Newsletter from "../components/Newsletter";


class Footer extends Component {
  gotoPage(e,page){
    this.props.history.push(page); 
  }
  goto(Link) {
    window.open(Link, "_self")
  }
  render() {
    return (
      <footer>
        {/* Newsletter */}
        {/* <Newsletter /> */}

        {/* Footer */}
        <div className="sd_flex sd_aligncenter sd_justbetween">
            <div className="sd_large_container">
            <div className="sd_footer_wpr sd_flex sd_aligncenter sd_justbetween">
                <div className="sd_flex sd_aligncenter sd_flex_1_auto sd_justbetween">
                    <div className="sd_footer_logo">
                        <div className="sd_footer_logos sd_aligncenter sd_flex">
                        <div className="sd_footer_main_logo">
                        <Link onClick={this.goto.bind(this, process.env.REACT_APP_HOME_OLD_URL)} rel="noopener noreferrer" >
                            <img src="/images/footer_logo.svg" alt="Sundance Institute" title="Sundance Institute" />
                        </Link>
                        </div>
                    </div>
                        <p>
                        {" "}
                        Copyright &copy; {new Date().getFullYear()} Sundance Institute,
                        All Rights Reserved.{" "}
                    </p>
                    </div>
                    <div className="sd_footer_navbar">  
                        <ul>
                            <li>
                                <Link onClick={(e)=>this.gotoPage(e,"/about")} > About Sundance Institute </Link>
                            </li>
                            <li>
                                <Link onClick={(e)=>this.gotoPage(e,"/help")}> Help </Link>
                            </li>
                            <li>
                                <Link onClick={(e)=>this.gotoPage(e,"/code-of-conduct")}> Code of Conduct</Link>
                            </li>
                        </ul>
                    </div>
                </div>  
                <div className="sd_footer_navigation_bar">
                <div className="sd_footer_nav">
                <ul className="sd_flex sd_aligncenter">
                    <li>
                    <a
                        href="https://collab.sundance.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                        src="/images/sundance_collab.svg"
                        alt="Sundance Collab"
                        title="Sundance Collab"
                        />
                    </a>
                    </li>
                    <li>
                    <ul className="sd_flex sd_aligncenter">
                        <li>
                        <a
                            href="https://www.instagram.com/sundanceorg/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                            src="/images/instagram_icon.svg"
                            alt="Instagram"
                            title="Instagram"
                            />
                        </a>
                        </li>
                        <li>
                        <a
                            href="https://twitter.com/sundancefest"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                            src="/images/twitter_icon.svg"
                            alt="Twitter"
                            title="Twitter"
                            />
                        </a>
                        </li>
                        <li>
                        <a
                            href="https://www.facebook.com/sundance"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                            src="/images/facebook_icon.svg"
                            alt="Facebook"
                            title="Facebook"
                            />
                        </a>
                        </li>
                        <li>
                        <a
                            href="https://www.youtube.com/c/sundancefilmfestival"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                            src="/images/youtube_icon.svg"
                            alt="Youtube"
                            title="Youtube"
                            />
                        </a>
                        </li>
                    </ul>
                    </li>
                </ul>
                <ul className="sd_flex sd_aligncenter">
                    <li>
                    <a
                        href="https://www.sundance.org/about/privacy-policy"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Privacy Policy
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://www.sundance.org/about/privacy-policy"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Terms &amp; Conditions 
                    </a>
                    </li>
                </ul>
                </div>
            </div>
                <div className="sd_footer_copyright sd_hidden">
                <p>
                    {" "}
                    Copyright &copy; {new Date().getFullYear()} Sundance Institute,
                    All Rights Reserved.
                </p>
                </div>
            </div>
            </div>
            
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);