export default (state = {
  quotes: [],
}, action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      return { quotes: state.quotes.concat(action.payload.content)}


    default:
      return state;
  }
  
}
