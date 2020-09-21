import * as action_types from '../actions/action_types'
import LocalizedStrings from "react-localization";

const initialState = {
    artist_data:[],
    strings:undefined,
    temp:''
}

initialState.strings = new LocalizedStrings({
    en: {
      greetings: "Welcome To Apple iTunes",
      enter_artist_name: "Enter Artist Name",
      search_result_for_artist: `Search Result For Artist {artist_name}`,
      search_again: "click to search again...",
    },
    it: {
      greetings: "Benvenuto in Apple iTunes",
      enter_artist_name: "Inserisci il nome dell'artista",
      search_result_for_artist: "Risultato della ricerca per artista {artist_name}",
      search_again: "clicca per cercare di nuovo...",
    },
    hi:{
      greetings: "Apple iTunes में आपका स्वागत है",
      enter_artist_name: "कलाकार का नाम दर्ज करें",
      search_result_for_artist: "{artist_name} कलाकार के लिए खोज परिणाम",
      search_again: "फिर से खोज करने के लिए क्लिक करें...",
    },
    mr:{
      greetings: "Apple iTunes मध्ये आपले स्वागत आहे",
      enter_artist_name: "कलाकाराचे नाव प्रविष्ट करा",
      search_result_for_artist: " कलाकार {artist_name} साठी शोध निकाल",
      search_again: "पुन्हा शोधण्यासाठी क्लिक करा ...",
    }
  });

const reducer=(state=initialState,action)=>{
    switch (action.type){
        case action_types.fetch_artist: return {...state, artist_data:state.artist_data=action.payload.results,
          temp:state.strings.formatString(state.strings.search_result_for_artist,{artist_name:state.artist_data.length!==0?state.artist_data[0].artistName:''})
        }
        case action_types.empty_artist_data: return {...state, artist_data:state.artist_data = []}
        default: return state;
    }
}

export default reducer