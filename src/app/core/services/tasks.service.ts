import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { Task } from "../interfaces/task";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  tasks: Array<Task> = [
    {
      title: "1",
      description: "Hello",
    },
    {
      title: "2",
      description: "Hello",
    },
    {
      title: "3",
      description: "Hello",
    },
  ];

  constructor() {}

  deleteTask(i) {
    this.tasks.splice(i, 1);
  }
}
