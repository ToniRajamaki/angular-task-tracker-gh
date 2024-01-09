import { Component, Input } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-task-item',
  standalone: true,
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'], // Corrected from 'styleUrl' to 'styleUrls'
})

export class TaskItemComponent {
  @Input() task: Task = { id: 0, text: '', day: '', reminder: false };
}
