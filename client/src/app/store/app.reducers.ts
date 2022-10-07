import { Action } from '@ngrx/store';
import { AppActionTypes, CourseReceived, ActionToReturn } from './app.actions';

export interface State {
  description: string;
  someString: string;
}

export const initialState: State = {
  description: '',
  someString: null
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case AppActionTypes.CourseReceived: {
      return {
        ...state,
        description: (<CourseReceived>action).description
      };
    }

    case AppActionTypes.ActionToReturn: {
      return {
        ...state,
        someString: (<ActionToReturn>action).payload
      };
    }

    default:
      return state;
  }
}

export const getName = (state: State) => state.description;
export const getSomeString = (state: State) => state.someString;
