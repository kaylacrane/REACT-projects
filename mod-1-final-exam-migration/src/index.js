import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/Header';
import MainReasons from './components/MainReasons';
import MainArticles from './components/MainArticles';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header title1="anonymous" title2="proxy" />
    <MainReasons mainTitle="Reasons to sign up" />
    <MainArticles />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
