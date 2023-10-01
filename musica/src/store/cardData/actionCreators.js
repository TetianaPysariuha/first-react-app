import { 
  TOGLE_FAVORITE, 
  LOAD_DATA, 
  SAVE_DATA,
  REFRESH_COUNTER_FAVORITE 
} from './actiions';

export const togleFavoriteAC = (payload) => ({type: TOGLE_FAVORITE, payload});
export const refreshCounterFavoriteAC = () => ({type: REFRESH_COUNTER_FAVORITE});
export const loadDataAC = () => (dispatch) => {
    if (localStorage.getItem('data') && JSON.parse(localStorage.getItem('data')).length !== 0) {
        const newData = JSON.parse(localStorage.getItem('data'));
        dispatch({type: LOAD_DATA, payload: newData});
    } else {
      (async () => {
        const newData = await fetch('./data.json').then(res => res.json());
        const newCardData = newData.map(el => ({...el, isFavorite: false}));
        localStorage.setItem('data', JSON.stringify(newCardData));
        dispatch({type: LOAD_DATA, payload: newCardData});
       })();
    };
};
export const saveDataAC = (dataCards) => (dispatch) => {
  localStorage.setItem('data', JSON.stringify(dataCards));
  dispatch({type: SAVE_DATA});
};

