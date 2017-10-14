export default function({ dispatch }) {
  return next => action => {
    if (!action.payload || !action.payload.then){
      console.log(action);
      return next(action);
    }
  }
}