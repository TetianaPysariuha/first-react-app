import { 
    TOGLE_FAVORITE, 
    LOAD_DATA, 
    SAVE_DATA,
    REFRESH_COUNTER_FAVORITE 
} from './actiions';

const initialState = {
    data: [ ],
    counterFavorite: 0
}

const cardDataReducer = (state = initialState, action) => {
switch (action.type) {
    case TOGLE_FAVORITE: {
        const newData= [...state.data];
        const index =  newData.findIndex((element) => element.art === action.payload);
        newData[index].isFavorite = (newData[index].isFavorite ? false : true);
        return {...state, data: newData};
    }
    case LOAD_DATA: {
        return {...state, data: action.payload};
    }
    case SAVE_DATA: {
        return state;
    }
    case REFRESH_COUNTER_FAVORITE: {
        const counterFavorite = state.data.filter((el) => el.isFavorite).length;
        return {...state, counterFavorite: counterFavorite};
    }
    default: {
        return state;
        }
    }
}

export default cardDataReducer;