
// Input uppercase is decorator
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
  // to get the avatar/name value from outside the component i.e., from app component
  // ! is used to reduce possibility of getting any undefined value. but its not mandatory to use
  // @Input() avatar!: string;
  // @Input() name!: string;
  // @Input() id!: string;
  // in above all three properties are accepted separately. we can accept in group as below
  @Input() user: {
    id : string;
    avatar : string;
    name : string;
  };
  // using output decorator value needed in output can be emitted. emitter stores the value in 'select'
  // string is the type of value that is emitted.. it is not mandatory to define..
  @Output() select = new EventEmitter<string>();

  // other functionalities like output,input can be used instead of @Input,@Output decorators.
  //  the below are the new in angular, not used much but still for knwing them.
  // id = input.required<string>();
  // name = input.required<string>();
  // avatar = input.required<string>();
  // select = output<string>();

// this.avatar is used when input is used separately.
  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  // this.user.avatar, when the input is taken in group of user
   get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onselectuser() {
    // select property is used to emit new value when the button is clicked.pass the value to emit(id in this case)
    // this.select.emit(this.id);
    // console.log(this.name);

    this.select.emit(this.user.id);
    console.log(this.user.name);

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