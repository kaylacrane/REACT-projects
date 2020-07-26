import React from 'react';
import '../stylesheets/_Footer.scss';
import ArrowUp from '../images/ico-arrow.svg';

function Footer() {
  return (
    <footer className="footer">
      <a
        href="#top"
        className="button button-round button-bounce"
        title="Return to top of page"
      >
        <div className="button-contents">
          <img src={ArrowUp}></img>
        </div>
      </a>

      <div className="wrapper">
        <nav className="footer__menu--sections">
          <ul>
            <li>
              <a
                className="footer__link"
                href="https://adalab.es/"
                target="_blank"
                title="Visit Adalab.es"
              >
                articles
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href="https://adalab.es/"
                target="_blank"
                title="Visit Adalab.es"
              >
                books
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href="https://adalab.es/"
                target="_blank"
                title="Visit Adalab.es"
              >
                events
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href="https://adalab.es/"
                target="_blank"
                title="Visit Adalab.es"
              >
                reasons
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href="https://adalab.es/"
                target="_blank"
                title="Visit Adalab.es"
              >
                tips
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer__menu--socialMedia">
          <ul>
            <li>
              <a
                className="footer__link"
                href="https://adalab.es/"
                target="_blank"
                title="Visit Adalab.es"
              >
                twitter
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href="https://adalab.es/"
                target="_blank"
                title="Visit Adalab.es"
              >
                instagram
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href="https://adalab.es/"
                target="_blank"
                title="Visit Adalab.es"
              >
                mastodon.social
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer__copyBlock">
          <small className="footer__copyBlock--copyText">&copy; 2020</small>
          <small className="footer__copyBlock--copyText">
            <span>we</span>
            <span className="heart">&#10084;</span>
            <span>components</span>
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
