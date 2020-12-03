import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  @ViewChild("dialog") dialogTemplate: TemplateRef<any>;
  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog,
  ) { }

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.userService.getUserData().subscribe(data => this.dataSource = data)
  }

  /**
   * Delete user
   * @param id 
   */
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(x => {
      this.userService.getUserData().subscribe(data => this.dataSource = new MatTableDataSource(data))
    });
  }

  /**
   * Edit user 
   * @param id 
   */
  editUser(id: number) {
    this.router.navigate(['user-mgt', "edit"], { queryParams: { id: id } })
  }



  onDelete(id: number) {
    this.dialog.open(this.dialogTemplate).afterClosed().subscribe(resp => {
      if (resp === "yes") {
        this.deleteUser(id);
      }
    })
  }

}
