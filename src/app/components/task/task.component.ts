import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  taskToDo: string = '';

  requirements: string[] = [
    'Functional requirement FR-51',
    'Functional requirement FR-50',
    'Functional requirement FR-49',
  ];

  toDo: string[] = [
    'Functional requirement FR-48',
    'Functional requirement FR-47',
  ];

  doing: string[] = [
    'Functional requirement FR-46',
    'Functional requirement FR-45',
  ];

  test: string[] = [
    'Functional requirement FR-44',
    'Functional requirement FR-43',
  ];

  done: string[] = [
    'Functional requirement FR-42',
    'Functional requirement FR-41',
  ];

  constructor() {}

  ngOnInit(): void {}
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  agregarTarea(): void {
    //compruebo que recoge el bindeo del banana inbox
    //console.log(this.taskToDo);
    //valido que no este vacio al darle al intro y si lo esta pues retorno para que no continue el flujo en la funcion
    if (this.taskToDo === '') {
      return;
    }
    //añado al array toDo el valor introducido en el input y recogido en la variable
    this.requirements.push(this.taskToDo);
    //reseteo el input
    this.taskToDo = '';
  }
}
