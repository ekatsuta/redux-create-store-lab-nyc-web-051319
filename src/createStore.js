export default function createStore(reducer) {
  // add your code here

  let state;

  function getState () {
    return state;
  }

  function dispatch (action) {
    state = reducer(state, action);
    render()
  }

  dispatch({type: "@@INIT"})

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
