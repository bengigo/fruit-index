import baseUrl from './apiData';

const SHOW_SHOWS = 'fruit-index/shows/SHOW_SHOWS';

export const showShows = (data) => ({
  type: SHOW_SHOWS,
  data,
});

const showBasics = (data) => {
  const shows = data.map((show) => ({
    id: show.id,
    name: show.name,
    language: show.language,
    genres: show.genres,
    runtime: show.runtime,
    rating: show.rating,
    topic: show.summary,
    poster: show.image.medium,
  }));
  console.log(showShows(shows));
  return showShows(shows);
};

export const fetchShows = () => (dispatch) => {
  fetch(`${baseUrl}`)
    .then((response) => response.json())
    .then((json) => dispatch(showBasics(json)));
};

export default function ShowsReducer(state = [], action) {
  switch (action.type) {
    case SHOW_SHOWS:
      return action.data;
    default:
      return state;
  }
}
