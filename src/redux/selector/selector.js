import { createSelector } from 'reselect'

const get_artist_data = state => state.artist_data;

export const reselect_artist_data = createSelector([get_artist_data],
    (artist_data)=>{
        if(artist_data)
        return artist_data
    })