import React from 'react';
import Landing from '../Landing/Landing.jsx';
import Header from '../site-wide/Header';
import MealContainer from '../MealComponents/MealContainer';

export default function App() {
  return (
    <>
      <Landing />
      <Header />
      <MealContainer /> 
    </>
  );
}

