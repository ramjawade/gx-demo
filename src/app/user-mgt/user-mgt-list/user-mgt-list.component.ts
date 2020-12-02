import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-mgt-list',
  templateUrl: './user-mgt-list.component.html',
  styleUrls: ['./user-mgt-list.component.scss']
})
export class UserMgtListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'edit'];

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(data => this.dataSource = data)
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(x => {
      this.userService.getUserData().subscribe(data => this.dataSource = new MatTableDataSource(data))
    });
  }

  editUser(id: number) {
    this.router.navigate(['user-mgt', "edit"], { queryParams: { id: id } })
  }

}
