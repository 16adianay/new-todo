import React from 'react';
import css from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={css.footer}>
           <p>Contact us: <a href='mailto:16adianay@gmail.com'>16adianay@gmail.com</a></p>
        </footer>
    );
};

export default Footer;