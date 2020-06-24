export const ADD_MEAL = 'ADD_MEAL';
export const addMeal = (meal) => ({
  type: ADD_MEAL,
  payload: meal
});

//what part of a meal would i even want to edit? i think this can be deleted
export const EDIT_MEAL = 'EDIT_MEAL';
export const editMeal = (meal) => ({
  type: 'EDIT_MEAL',
  payload: meal
});

export const DELETE_MEAL = 'DELETE_MEAL';
export const deleteMeal = (meal) => ({
  type: 'DELETE_MEAL',
  payload: meal
});
