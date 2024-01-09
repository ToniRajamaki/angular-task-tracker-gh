import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule,TaskItemComponent], // Include CommonModule here
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  tasks: Task[] = TASKS;
  ngOnInit() {
    console.log('tasks', this.tasks)
  }

}
