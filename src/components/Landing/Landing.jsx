import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  const handleSubmit = event => {
    event.preventDefault();
  };



  return (
    <>
      <h2>Decision Maker</h2>
      <p>where life becomes easy</p>
      
      <form>
        <p>pick a category</p>
        <select name="categories" id="categorySelector">
          <option value="plants">Plants</option>
          <option value="meals">Meals</option>
        </select>
        <p>go!</p>
      </form>
    </>
  );
};
export default Landing;
