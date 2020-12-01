import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-mgt-list',
  templateUrl: './user-mgt-list.component.html',
  styleUrls: ['./user-mgt-list.component.scss']
})
export class UserMgtListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'edit'];

  dataSource = []
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(data => this.dataSource = data)
  }

}
