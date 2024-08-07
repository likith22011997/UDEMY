import { Component } from "@angular/core";
// import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";

// to define componenet inputs
import { DUMMY_USERS } from "./dummy-users";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "udemy";

  // to define component inputs
  users = DUMMY_USERS;
  // store info which user is selected.as of now initially store first user
  // selecteduserid = 'u1';
  selecteduserid?: string;

  get onselectuser() {
    // find is a method built in JS not angular. it allows to find a specific element in a array of elements
    return this.users.find((user) => user.id === this.selecteduserid)!;
  }
  // onuserselect(id: number) {
  //   console.log("selected user with id: " + id);
  // }
  onuserselect(id: string) {
    this.selecteduserid = id;
  }
}
