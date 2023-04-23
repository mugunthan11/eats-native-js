import {YELP_API_KEY, YELP_API_URL} from '@env';

const apiCall = async (path, options) => {
  try {
    const response = await fetch(`${YELP_API_URL}/${path}`, options);
    const result = await response.json();
    return result;
  } catch (err) {
    console.log('Api call error : ', err);
    return err;
  }
};

export const getRestaurant = async city => {
  const response = await apiCall(
    `businesses/search?term=restaurants&location=${city}&limit=7`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    },
  );
  return response;
};
