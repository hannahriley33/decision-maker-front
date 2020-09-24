import { addMeal } from '../../actions/mealActions';
import reducer from './mealReducer';

describe('meal reducer', () => {
  it('handles the ADD_MEAL action', () => {
    const state = [];
    const action = addMeal({
      _id: '123',
      mealName: 'Scrambled Eggs',
      recipe: 'www.scrambledeggs.com',
      mealCookMethod: 'Stove/Oven',
      mealPrepAble: 'No',
      mealProteinType: 'Egg'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        _id: '123',
        mealName: 'Scrambled Eggs',
        recipe: 'www.scrambledeggs.com',
        mealCookMethod: 'Stove/Oven',
        mealPrepAble: 'No',
        mealProteinType: 'Egg'
      }
    ]);
  });
});
