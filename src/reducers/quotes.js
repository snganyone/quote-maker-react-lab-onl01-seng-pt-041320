export default (state = [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      return { action }

    default:
      return state;
  }
  
}
