import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppInitResolver } from './app-init.resolver';


const routes: Routes = [
  {
    path: "",
    redirectTo: 'user-mgt',
    pathMatch: 'full',
    resolve: {
      data: AppInitResolver
    }
  }, {
    resolve: {
      data: AppInitResolver
    },
    path: 'user-mgt',
    loadChildren: () => import('./user-mgt/user-mgt.module').then(m => m.UserMgtModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
