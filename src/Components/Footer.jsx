import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';
import styles from './Footer.module.css';
import facebook from './Facebook.png';
import instagram from './Instagram.png';
import linkedin from './LinkedIn.png';
import youtube from './YouTubeIcon.png';
import whatsapp from './WhatsApp.png';

function Footer() {
  return (
    <footer>
    <div className="footer-main-container">
    <div className="footer-container">

      <div className="footer-links-container">
      <span className="heading">
                Page Links:
            </span>
      <Link to="/" className={styles.links}>Home</Link>
      <Link to="/gallery" className={styles.links}>Gallery</Link>
      <Link to="/about" className={styles.links}>About</Link>
      </div>

      <div className="address-container">
            <span className="heading">
                Head Office:
            </span>
            <span className="content">
                103b Yemi Alimi Street, <br />
                Ori-Okuta, <br />
                Owutu, Ikorodu, <br />
                Lagos State
            </span>
        </div>

        <div className="telephone-container">
            <span className="heading">
                Telephone:
            </span>
            <span className="content">
                08094683329 <br />
                07088642775 <br />
                07026980888 <br />
                08115067339
            </span>
        </div>

        <div className="email-container">
            <span className="heading">
                Email:
            </span>
            <span className="content">
                carvetech2@gmail.com <br />
                carvetechcomputertutorial@yahoo.com <br />
                carvetech2@outlook.com
            </span>
        </div>

        <div className="social-container">
                <span className="heading">Social Handles:</span>
                <div className="content-socials">
                    <a href="https://wa.me/2348094683328" target="_blank" rel="noopener noreferrer">
                        <img src={whatsapp} alt="whatsapp" className="socials" />
                    </a>
                    <a href="https://www.facebook.com/carvetechengineering" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="facebook" className="socials" />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/carvetecheng" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin" className="socials" />
                    </a>
                    <a href="https://www.youtube.com/@carvetechengineering" target="_blank" rel="noopener noreferrer">
                        <img src={youtube} alt="youtube" className="socials" />
                    </a>
                    <a href="https://www.instagram.com/carvetech2?igsh=MXZ4MnZtoWJIeThz" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="instagram" className="socials" />
                    </a>
                </div>
            </div>
    </div>
    <div className="copyright">
          <p className="copyright-text">&copy; {new Date().getFullYear()} CarveTech Engineering</p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
