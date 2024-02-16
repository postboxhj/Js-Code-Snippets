//FETCH API
const FETCH_API_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.9890648&lng=82.2474648&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

const fetchAPI = async () => {
  try {
    const data = await fetch(FETCH_API_URL);
    if (!data.ok) {
      throw new Error(`Fetching ${FETCH_API_URL} failed`);
    }
    const json = await data.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }
};
fetchAPI();
