import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './navigation.css';

const Layout = () => {
    return (
        <>
            <nav className='class'>
                <span className='nav_logo'>
                    <img src='https://corretto.qodeinteractive.com/wp-content/themes/corretto/assets/img/logo-light.png' className='logo_image' />
                </span>
                <ul className='header_main'>
                    <li className='header_navigation'>
                        <Link id='link' to="/">Home</Link>
                    </li>
                    <li className='header_navigation'>
                        <Link id='link' to="/about">About</Link>
                    </li>
                    <li className='header_navigation'>
                        <Link id='link' to="/contact">Contact Us</Link>
                    </li>
                    <li className='header_navigation'>
                        <Link id='link' to="/product">Product List</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;