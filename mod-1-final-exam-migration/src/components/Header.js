import React from 'react';
import '../stylesheets/_Header.scss';
import Hamburger from '../images/ico-menu.svg';
import ScrollDown from '../images/ico-scroll-down.svg';
import ImageButton from './ImageButton';
const mouseOverListener = (event) => {
  const titleText = document.querySelector('header__title');
  titleText.style.color = 'green';
};
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const onClickListener = (event) => {
      alert('You clicked me??');
    };

    const { title1, title2 } = this.props;
    return (
      <header className="header">
        <a
          className="header__menu-button"
          href="https://adalab.es/"
          target="_blank"
          title="Visit Adalab.es"
        >
          <img src={Hamburger}></img>
        </a>

        <div className="wrapper hero" id="top">
          <h1 className="header__title">
            <span className="header__title--span">{title1}</span>
            <span className="header__title--span">{title2}</span>
          </h1>
          <span className="header__claim">
            In hac habitasse platea dictumst.
          </span>
          <ImageButton
            eventListener={onClickListener}
            btnClass="round"
            imgLink={ScrollDown}
            effectClass="displace"
          />
        </div>
      </header>
    );
  }
}

export default Header;
