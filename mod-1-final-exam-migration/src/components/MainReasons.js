import React from 'react';
import '../stylesheets/_MainReasons.scss';
import ReasonBlock from './ReasonBlock';
import Button from './Button';

const reasonsArray = [
  {
    title: 'Got A Minute?',
    text: "Who says you can't have it all? Me, that's who.",
  },
  {
    title: 'The Way It Goes',
    text: "Blah and blah and blah. That's all I have to say.",
  },
  {
    title: 'Take a Break and Eat Cake',
    text: 'Cake is very therapeutic and you should eat a slice.',
  },
];
class MainReasons extends React.Component {
  render() {
    const { mainTitle } = this.props;
    const reasonsHTML = reasonsArray.map((reason) => (
      <ReasonBlock title={reason.title} text={reason.text} />
    ));
    console.log('reasonsHTML', reasonsHTML);
    return (
      <section className="main__reasons" id="main__reasons">
        <div className="wrapper">
          <h2 className="main__reasons--title">{mainTitle}</h2>
          {reasonsHTML}
          <Button linkText="More Reasons" btnClass="colorFill" />
        </div>
      </section>
    );
  }
}

export default MainReasons;
