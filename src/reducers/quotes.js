export default (state = [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      return { quotes: state }

    default:
      return state;
  }
  
}
