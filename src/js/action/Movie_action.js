import { ADD_ANIME, DELETE_ANIME, EDIT_ANIME } from "../types"


export const addAnime = (payload) => {
    return {
        type:ADD_ANIME,
        payload
    }
}
export const deleteAnime = (payload) => {
    return{
        type:DELETE_ANIME,
        payload
    }
}
export const editAnime = (payload) => ({
    type: EDIT_ANIME,
    payload
})


