import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interface/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-mgt-create',
  templateUrl: './user-mgt-create.component.html',
  styleUrls: ['./user-mgt-create.component.scss']
})
export class UserMgtCreateComponent implements OnInit {


  id: number = null;

  user: User = { address: {}, company: {} };
  formGroup = new FormGroup({ "name": new FormControl() });
  viewMode: 'edit' | 'create' = "create";

  constructor(
    private us: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.user = this.us.getUserById(param.id);
      this.id = param.id;
      if (param.id) {
        this.viewMode = "edit";
      }
    })

  }

  createUser() {
    this.us.addUser(this.user);
    this.router.navigateByUrl('user-mgt/list')
  }

  updateUser() {
    this.us.updateUser(this.id, this.user)
    this.router.navigateByUrl('user-mgt/list')
  }

}
