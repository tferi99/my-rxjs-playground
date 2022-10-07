import { Action } from '@ngrx/store';
import { AppActionTypes, CourseReceived, ActionToReturn } from './app.actions';

export interface AppState {
  description: string;
  someString: string;
}

export const initialState: AppState = {
  description: '',
  someString: null
};

export function reducer(state = initialState, action: Action): AppState {
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

export const selectDescription = (state: AppState) => state.description;
export const getSomeString = (state: AppState) => state.someString;
