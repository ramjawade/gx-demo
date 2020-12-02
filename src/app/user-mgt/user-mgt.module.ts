import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMgtListComponent } from './user-mgt-list/user-mgt-list.component';
import { UserMgtCreateComponent } from './user-mgt-create/user-mgt-create.component';
import { UserMgtRoutingModule } from './user-mgt-routing.module';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { ToolsModule } from '../tools/tools.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTableModule } from "@angular/material/table";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [UserMgtListComponent, UserMgtCreateComponent],
  imports: [
    CommonModule,
    UserMgtRoutingModule,
    MatCardModule,
    MatDividerModule,
    ToolsModule,
    FlexLayoutModule,
    MatTableModule,
    ToolsModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class UserMgtModule { }
