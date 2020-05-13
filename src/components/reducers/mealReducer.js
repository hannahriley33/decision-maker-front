import { ADD_MEAL } from '../../actions/mealActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_MEAL:
      return [...state, action.payload];
    default:
      return state;
  }
}
