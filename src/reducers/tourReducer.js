const initialState = {
  tours: []
};

export default function(state = initialState, action){

    switch(action.type){

        case "SET_MY_SAVED_WORDS":
            return Object.assign({}, state, {
                wordList: action.words
            });

        default:
            return state;
    }

}