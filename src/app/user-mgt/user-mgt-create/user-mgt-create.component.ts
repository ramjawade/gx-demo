import { Component, Input, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-mgt-create',
  templateUrl: './user-mgt-create.component.html',
  styleUrls: ['./user-mgt-create.component.scss']
})
export class UserMgtCreateComponent implements OnInit {


  @Input() id: number = null;

  user: User = { address: {}, company: {} };
  constructor(
    private us: UserService
  ) { }

  ngOnInit(): void {
    this.user = this.us.getUserById(this.id)
  }

  createUser() {
    this.us.addUser(this.user);
  }

}
