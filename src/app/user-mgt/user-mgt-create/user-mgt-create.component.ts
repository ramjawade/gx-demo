import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CreateUserSuccess } from 'src/app/user.actions';
import { IUser } from '../interface/user';
import { UserService } from '../services/user.service';
import { selectEntity } from "./../../user.selectors";

@Component({
  selector: 'app-user-mgt-create',
  templateUrl: './user-mgt-create.component.html',
  styleUrls: ['./user-mgt-create.component.scss']
})
export class UserMgtCreateComponent implements OnInit {


  id: number = null;
  user: IUser = { address: {}, company: {} };
  formGroup = new FormGroup({ "name": new FormControl() });
  viewMode: 'edit' | 'create' = "create";

  constructor(
    private us: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store
  ) { }

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.id = param.id;
      if (param.id) {
        this.viewMode = "edit";
        this.store.select(selectEntity, { id: this.id }).subscribe((user) => this.user = user)
      }
    })

  }

  /**
   * Create user 
   */
  createUser() {
    this.store.dispatch(new CreateUserSuccess({ data: this.user }))
    this.us.addUser(this.user);
    this.router.navigateByUrl('user-mgt/list')
  }

  /**
   * update user
   */
  updateUser() {
    this.us.updateUser(this.id, this.user)
    this.router.navigateByUrl('user-mgt/list')
  }

}
