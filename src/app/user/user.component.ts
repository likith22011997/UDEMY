
// Input uppercase is decorator
import { Component, Input, OnInit } from '@angular/core';

// lowercase input is a function. to provide input using signals without using decorator
// import { input } from '@angular/core';

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
// class to display avatar and names randomly when clicked
// export class UserComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }
//   // drawing only 1 user from users.ts
//   // selectedUser = DUMMY_USERS[2];

//   // drawing dynamic users from users.ts upto max length of datas in dummy.users.ts
//   // the use of the randomdata is ** if the page is refreshed then the data of name/id/image displayed changes everytime refreshed randomly**

//   selectedUser = DUMMY_USERS[randomdata];

//   //a method function inside a class to access properties . Note as it is inside a fucntion in class THIS keyword is mandatory in JS
//   // return** is mandatory when get is used in any method
//   get imagePath (){
//     return 'assets/users/' + this.selectedUser.avatar
//   }

//   // event listener method for click. when ever clicked , msg is displayed in console
//   onselectuser(){
//     console.log("Clicked !!");
//     // const declared locally only inside this method. when clicked then images and names change without refreshing page everytime
//     const randomdata = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser = DUMMY_USERS[randomdata];
//   }
// }

// class using input decorator binding values and display in user component
export class UserComponent implements OnInit {

  constructor() { }

    ngOnInit() {
    }
//     // to get the avatar/name value from outside the component i.e., from app component
@Input () avatar : string;
@Input () name : string;

 get imagePath (){
  return 'assets/users/' + this.avatar;
}
onselectuser(){
}
}

// using signals to provide inputs without using decorator(ex : @Input)
// export class UserComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }
//   // below syntax is TS not of angular**. telling TS which type of input given for property avatar
//   avatar = input.required<string>();
//   name = input.required<string>();
//   // passing signals
//   imagePath = computed(() => {
//     return 'assests/users/' + this.avatar();
//   });
//   onselectuser() {

//   }
// }