import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { LoadUsersFailure, LoadUsersSuccess, UserActionTypes } from './user.actions';
import { catchError, map, mergeMap } from "rxjs/operators";
import { UserService } from './user-mgt/services/user.service';


@Injectable()
export class UserEffects {



  constructor(private actions$: Actions, private userService: UserService) { }

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(UserActionTypes.LoadUsers),
    mergeMap(action => this.userService.getUsers().pipe(
      map(users => (new LoadUsersSuccess({ data: users }))),
      catchError(err => of(new LoadUsersFailure({ error: err })))
    ))
  )

}
