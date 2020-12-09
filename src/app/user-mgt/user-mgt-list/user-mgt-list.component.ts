import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { DeleteUserSuccess } from 'src/app/user.actions';
import { adaptor } from 'src/app/user.reducer';
import { getUsers } from 'src/app/user.selectors';
import { IUser } from '../interface/user';

@Component({
  selector: 'app-user-mgt-list',
  templateUrl: './user-mgt-list.component.html',
  styleUrls: ['./user-mgt-list.component.scss']
})
export class UserMgtListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'edit'];

  dataSource: IUser[] = [];

  selectors = adaptor.getSelectors();

  @ViewChild("dialog") dialogTemplate: TemplateRef<any>;
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private store: Store
  ) { }
  // 


  /**
   * @ignore
   */
  ngOnInit(): void {
    this.store.pipe(select(getUsers)).subscribe((data: IUser[]) => {
      console.log(data);
      this.dataSource = data
    });
  }

  /**
   * Delete user
   * @param id 
   */
  deleteUser(id: number) {
    this.store.dispatch(new DeleteUserSuccess({ id: id }))
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
