import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title= 'angular-http-client';

  constructor(private taskService:TaskService) {}
  getAllTasks() {
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      console.log(tasks);
    });
  }

  getTasks() {
    this.taskService.getTask('1')
    .subscribe(task => {
      console.log(task);
    });
  }
}
