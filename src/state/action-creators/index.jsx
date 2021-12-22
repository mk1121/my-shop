export const increment = (count) => {
return (dispatch) => {
  dispatch({
      type:'increment',
      payload: count
      
    })
  }
}
export const decrement =(count) => {
  return (dispatch) => {
    dispatch({
      type:'decrement',
      payload: count
    })
  }
}
