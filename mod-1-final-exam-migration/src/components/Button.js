import React from 'react';

class Button extends React.Component {
  render() {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        onClick={this.props.eventListener}
        href=""
        title="See more reasons to purchase"
        className={`button button-${this.props.btnClass}`}
      >
        <span className="button-contents">{this.props.linkText}</span>
      </a>
    );
  }
}

export default Button;
