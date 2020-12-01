import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    redirectTo: 'user-mgt',
    pathMatch: 'full'
  }, {
    path: 'user-mgt',
    loadChildren: () => import('./user-mgt/user-mgt.module').then(m => m.UserMgtModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
