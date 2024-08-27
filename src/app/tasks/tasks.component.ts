import { Component, OnInit, Input } from '@angular/core';
import { title } from 'process';

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
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all basic and advanced features of angular',
      duedate: '2025-12-10'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'MSME TL',
      summary: 'Learn the journey of both CV and NCV',
      duedate: '2025-09-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Micro Mitra WC',
      summary: 'Learn the journey of MMWC DPN',
      duedate: '2025-07-23'
    }
  ]
}
