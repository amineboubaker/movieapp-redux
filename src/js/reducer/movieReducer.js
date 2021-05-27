import {animedata}from '../../data'
import { ADD_ANIME, DELETE_ANIME, EDIT_ANIME } from '../types';
const initialState = {
  animeList:animedata
}
const movieReducer = (state=initialState,{type,payload}) => {
  switch (type) {
    case ADD_ANIME :
        return {...state,animeList:[...state.animeList,payload]};
    case DELETE_ANIME :
      return {...state,animeList:state.animeList.filter(anime => anime.id !== payload)}     
     
    case EDIT_ANIME :
     return {...state,animeList:state.animeList.map(anime => anime.id === payload.id ? {...anime,...payload} : anime ),};

    default:
      return state;
  }
}



export default movieReducer;