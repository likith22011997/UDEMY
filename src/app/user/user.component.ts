import { Component, OnInit } from '@angular/core';
// import dummy users data to make use in user component
import { DUMMY_USERS } from '../dummy-users';

// for choosing dynamic random data from dummy.users.ts upto the max length of the data
// the below line cant be written inside class and hence it is outside class
const randomdata = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // drawing only 1 user from users.ts
  // selectedUser = DUMMY_USERS[2];

  // drawing dynamic users from users.ts upto max length of datas in dummy.users.ts
  // the use of the randomdata is ** if the page is refreshed then the data of name/id/image displayed changes everytime refreshed randomly**

  selectedUser = DUMMY_USERS[randomdata];
}
