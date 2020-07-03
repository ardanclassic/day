const _add = () => ({
  type: "ADD",
});

const _substract = () => ({
  type: "SUBSTRACT",
});

export function incrementAsync() {
  return async (dispatch) => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => console.log(json));
    dispatch({
      type: "GET_DATA",
    });

    setTimeout(() => {
      dispatch(_add());
    }, 5000);
  };
}

export function decrementAsync() {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(_substract());
    }, 5000);
  };
}
