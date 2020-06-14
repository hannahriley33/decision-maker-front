export const postMeal = meal => {
  return fetch(`${process.env.API_URL}/api/v1/meals`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(meal)
  })
    .then(res => res.json());
};

export const editMeal = meal => {
  return fetch(`${process.env.API_URL}/api/v1/meals`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(meal)
  })
    .then(res => res.json());
};
