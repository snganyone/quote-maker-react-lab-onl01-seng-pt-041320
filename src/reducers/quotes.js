export default function reducer(state = {
  quotes: [],
}, action) {
  switch(action.type){
    case 'ADD_QUOTE':
      return { quotes: state.quotes }

    default:
      return state;
  }
  
}
