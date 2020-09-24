import { addMeal, deleteMeal } from './mealActions';

describe('meals actions', () => {
  it('creates a ADD_MEAL action', () => {
    const action = addMeal({
      _id: '123',
      mealName: 'Scrambled Eggs',
      recipe: 'www.scrambledeggs.com',
      mealCookMethod: 'Stove/Oven',
      mealPrepAble: 'No',
      mealProteinType: 'Egg'
    });
    expect(action).toEqual({
      type: 'ADD_MEAL',
      payload: {
        _id: '123',
        mealName: 'Scrambled Eggs',
        recipe: 'www.scrambledeggs.com',
        mealCookMethod: 'Stove/Oven',
        mealPrepAble: 'No',
        mealProteinType: 'Egg'
      }
    });
  });

});

