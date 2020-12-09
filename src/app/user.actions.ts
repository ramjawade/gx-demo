import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { IUser } from './user-mgt/interface/user';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFailure = '[User] Load Users Failure',
  DeleteUserSuccess = '[User] Delete User Success',
  EditUserSuccess = "[User] Delete Edit Success",
  DeleteUserFailure = '[User] Delete User Failure',
  CreateUserSuccess = "[User] Delete Edit Success"
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: { data: IUser[] }) { }
}

export class LoadUsersFailure implements Action {
  readonly type = UserActionTypes.LoadUsersFailure;
  constructor(public payload: { error: string }) { }
}

export class DeleteUserSuccess implements Action {
  readonly type = UserActionTypes.DeleteUserSuccess;
  constructor(public payload: { id: number }) { }
}

export class EditUserSuccess implements Action {
  readonly type = UserActionTypes.EditUserSuccess;
  constructor(public payload: { data: Update<IUser> }) { }
}

export class CreateUserSuccess implements Action {
  readonly type = UserActionTypes.CreateUserSuccess;
  constructor(public payload: { data: IUser }) { }
}


export type UserActions = LoadUsers | LoadUsersSuccess | LoadUsersFailure | DeleteUserSuccess | EditUserSuccess | CreateUserSuccess;

