import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { UserMgtListComponent } from './user-mgt-list/user-mgt-list.component';
import { UserMgtCreateComponent } from './user-mgt-create/user-mgt-create.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: "full"
  }, {
    path: 'list',
    component: UserMgtListComponent
  }, {
    path: 'create',
    component: UserMgtCreateComponent
  }, {
    path: 'edit',
    component: UserMgtCreateComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class UserMgtRoutingModule { }
