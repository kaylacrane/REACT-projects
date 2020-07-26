import React from 'react';
import '../stylesheets/_MainArticles.scss';
import Button from './Button';

class MainArticles extends React.Component {
  render() {
    const onClickListener = (event) => {
      alert('You clicked me??');
    };
    return (
      <section className="main__articles">
        <div className="wrapper">
          <article className="main__articles--post">
            <span className="main__articles--postCategory">insomnia tips</span>
            <h2 className="main__articles--postTitle">
              looking through a window
            </h2>
            <p className="main__articles--postText">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              tempora, molestias esse voluptatem magnam, nobis autem similique?
            </p>
            <Button
              eventListener={onClickListener}
              linkText="Go go go!"
              btnClass="bigger"
            />
          </article>
        </div>
      </section>
    );
  }
}

export default MainArticles;
