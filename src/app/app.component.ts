import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask!: string;
  tasksList: Array<string> = [];
  taskDone: Array<string> = [];

  add(){
this.tasksList.push(this.newTask);
this.newTask = '';

  }

  remove(task: string){
    this.tasksList = this.tasksList.filter(e => e !==task);
  }

  done(task: string){
this.taskDone.push(task);
this.remove(task);

  }
}
