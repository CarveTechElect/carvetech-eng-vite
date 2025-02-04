import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import styles from './Header.module.css';
import FullLogo from '/Full-Logo.png';

function Header() {
    const location = useLocation(); // Get the current URL path

    return (
        <div className='header'>
            <img src={FullLogo} alt='company-logo' className='full-logo'/>
                
            <div className='header-link-container'>               
                <Link to="/" className={`${styles.links} ${location.pathname === '/' ? styles.active : ''}`}>Home</Link>
                <Link to="/gallery" className={`${styles.links} ${location.pathname === '/gallery' ? styles.active : ''}`}>Gallery</Link>
                <Link to="/about" className={`${styles.links} ${location.pathname === '/about' ? styles.active : ''}`}>About</Link>
            </div>
        </div>
    );
}

export default Header;
