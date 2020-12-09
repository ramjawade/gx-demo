import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IUser } from "./user-mgt/interface/user";
import { UserActions, UserActionTypes } from './user.actions';

export const userFeatureKey = 'user';


export interface State extends EntityState<IUser> {
}

export const adaptor: EntityAdapter<IUser> = createEntityAdapter<IUser>({
});

export const initialState: State = adaptor.getInitialState({ user: [], error: '' });

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {

    case UserActionTypes.LoadUsers:
      return {
        ...state
      }
    case UserActionTypes.LoadUsersSuccess:
      return adaptor.addAll(action.payload.data, state);

    case UserActionTypes.LoadUsersFailure:
      return {
        ...state,
      }
    case UserActionTypes.DeleteUserSuccess:
      return adaptor.removeOne(action.payload.id, state);

    case UserActionTypes.EditUserSuccess:
    // return adaptor.updateOne(action.payload.data, state);

    case UserActionTypes.CreateUserSuccess:
      return adaptor.addOne(action.payload.data, state);


    default:
      return state;
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adaptor.getSelectors()