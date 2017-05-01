export default function createMiddleware(logrocket, opts = {}) {
  const reduxMiddleware = logrocket.reduxMiddleware(opts);

  return (reducer) => {
    let currentState;
    const fakeDispatch = reduxMiddleware({
      getState: () => currentState,
    })(() => {});

    return (state, action) => {
      const newState = reducer(state, action);
      currentState = state;
      fakeDispatch(action);
      return newState;
    };
  };
}
