import React, { useState } from 'react';
import { postMeal } from '../../services/mealApi';
import { useDispatch } from 'react-redux';
import { addMeal } from '../../actions/mealActions';

const HabitForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [recipe, setRecipe] = useState('');
  const [cookingMethod, setCookingMethod] = useState('');
  const [type, setType] = useState('');
  const [season, setSeason] = useState('');
  const [proteinType, setProteinType] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // send the back end a post request to create the meal <-- service
    postMeal({ name, recipe, cookingMethod, type, season, proteinType })
      .then(meal => {
        dispatch(addMeal(meal));
      });
    // after a response: 
    // add the meal to redux <-- reducer, action, possibly selectors
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={({ target }) => setName(target.value)} placeholder="Name" />

      <br></br>

      <label>Meal prep-able?</label>
      <select id="type" value={type} name="mealPrepAble" onChange={({ target }) => setType(target.value)}>
        <option value = "yes" selected>Yes</option>
        <option value = "no">No</option>
      </select>

      <br></br>

      <input type="text" value={recipe} onChange={({ target }) => setRecipe(target.value)} placeholder="Recipe URL" />

      <br></br>

      <label>Cooking Method</label>
      <select id ="mealCookMethod" value={cookingMethod} name="mealCookMethod" onChange={({ target }) => setCookingMethod(target.value)}>
        <option value = "Stove/Oven" selected>Stove/Oven</option>
        <option value = "Grill">Grill</option>
        <option value = "Other">Other</option>
      </select>

      <br></br>

      <label>Season</label>
      <select id = "mealSeason" value={season} name="mealSeason" onChange={({ target }) => setSeason(target.value)}>
        <option value = "Summer" selected>Summer</option>
        <option value = "Fall">Fall</option>
        <option value = "Winter">Winter</option>
        <option value = "Spring">Spring</option>
      </select>

      <br></br>

      <label>Protein Type</label>
      <select id = "mealProteinType" value={proteinType} name="mealProteinType" onChange={({ target }) => setProteinType(target.value)}>
        <option value = "none" selected>None</option>
        <option value = "beef" selected>Beef</option>
        <option value = "chicken">Chicken</option>
        <option value = "pork">Pork</option>
        <option value = "seafood">Seafood</option>
        <option value = "tofu">Tofu</option>
        <option value = "eggs">Egg</option>
      </select>

      <br></br>

      <button>Create Meal</button>
    </form>
    
  );
};

export default HabitForm;
