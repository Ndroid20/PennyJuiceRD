import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <figure>
          <img
            src="https://le-cdn.hibuwebsites.com/767557674d6e4362acfa088c81c84a89/dms3rep/multi/opt/pennyjuice-logo-462w.png"
            className="footer_logo--img"
            alt="logo"
          />
        </figure>
        <div className="footer__list">
          <a
            href="#"
            className="footer__link
          link__hover-effect
          link__hover-effect--black
        "
          >
            {' '}
            HOME{' '}
          </a>
          <a
            href="#"
            className="footer__link
          link__hover-effect
          link__hover-effect--black
        "
          >
            {' '}
            ABOUT{' '}
          </a>
          <a
            href="#"
            className="footer__link
          link__hover-effect
          link__hover-effect--black
        "
          >
            {' '}
            SHOP{' '}
          </a>
          <a
            href="#"
            className="footer__link
          link__hover-effect
          link__hover-effect--black"
          >
            {' '}
            CONTACT{' '}
          </a>
        </div>
        <div className="footer__icon">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div className="sub-footer">PennyJuiceCo. ©2022</div>
      </div>
    </footer>
  );
}

export default Footer;
