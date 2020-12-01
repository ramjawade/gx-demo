import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller = false;
  title = 'gx-demo';
  typesOfShoes = [{
    name: 'Create User',
    route: 'user-mgt/create',
  }, {
    name: "User List",
    route: 'user-mgt/list',
  }]
}
