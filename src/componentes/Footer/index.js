import React from 'react';
import './styles.css';

const Footer = () => (
    <footer className="colored-tematic" id="footer">
        <span className="copyright">direitos reservados, <i>{new Date().getFullYear()}</i></span>
    </footer>
);

export default Footer;