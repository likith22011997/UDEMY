import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // accepting input from app component
@Input() name: string;
@Input() id: string;
}
