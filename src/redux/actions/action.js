
export const fetch_artist = (artist_name)=>{
  return{
    type: 'fetch_artist',
    value:artist_name
  }
}

export const empty_artist_data = ()=>{
  return{
    type: 'empty_artist_data',
  }
}
