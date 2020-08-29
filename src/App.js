import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Fragment from './components/Fragment/Fragment';
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {
  return (
    <div className='container'>
      <h2>React Bootstrap</h2>
      <Header></Header>
      <Fragment></Fragment>
      <TopHeadline></TopHeadline>
    </div>
  );
}

export default App;
