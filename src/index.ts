import { StoreModule, ActionReducer, MetaReducer, Action } from '@ngrx/store';
import * as LogRocket from 'logrocket';


export interface Options {
  /** Sanitizer function to scrub state */
  stateSanitizer?(state: Object): Object,
  /** Sanitizer function to scrub or ignore specific actions */
  actionSanitizer?(action: Object): null | Object,
}

/** Create a metareducer that sends data to LogRocket */
export default function createMetaReducer(
  /** LogRocket instance, after calling init() */
  logrocket: typeof LogRocket,
  /** Sanitizer options, same as LogRocket.reduxMiddleware */
  options?: Options
): MetaReducer<any> {
  const reduxMiddleware: any = logrocket.reduxMiddleware(options);
  let currentState: any;
  let store: any;

  // return a metareducer
  return function (reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state: any, action: Action) {
      const newState = reducer(state, action);
      currentState = state;
      if (!store) {
        store = reduxMiddleware({
          getState: () => currentState,
        });
      }
      store(() => newState)(action);
      return newState;
    };
  };
}
