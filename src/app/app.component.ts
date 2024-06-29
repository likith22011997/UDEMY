import { Component } from '@angular/core';
// import { HeaderComponent } from './header/header.component';

// to define componenet inputs
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy';

  // to define component inputs
  users = DUMMY_USERS;

}
