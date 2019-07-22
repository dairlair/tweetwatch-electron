import { observable, computed, action } from 'mobx';
import { ObjectModel } from '../models';

export interface IObjectStore {
  objects: Array<ObjectModel>;
  addObject(object: Partial<ObjectModel>): void;
}

export class ObjectStore implements IObjectStore {
  constructor(fixtures: ObjectModel[]) {
    this.objects = fixtures;
  }

  @observable public objects: Array<ObjectModel>;

  @computed
  get activeObjects() {
    return this.objects.filter((object: ObjectModel) => true);
  }


  @action
  addObject = (object: Partial<ObjectModel>): void => {
    this.objects.push(new ObjectModel(object.title || 'Unknown'));
  };

//   @action
//   editTodo = (id: number, data: Partial<TodoModel>): void => {
//     this.todos = this.todos.map((todo) => {
//       if (todo.id === id) {
//         if (typeof data.completed == 'boolean') {
//           todo.completed = data.completed;
//         }
//         if (typeof data.text == 'string') {
//           todo.text = data.text;
//         }
//       }
//       return todo;
//     });
//   };

  @action
  deleteObject = (id: number): void => {
    this.objects = this.objects.filter((object: ObjectModel) => object.id !== id);
  };

//   @action
//   completeAll = (): void => {
//     this.todos = this.todos.map((todo) => ({ ...todo, completed: true }));
//   };

//   @action
//   clearCompleted = (): void => {
//     this.todos = this.todos.filter((todo) => !todo.completed);
//   };
}

export default ObjectStore;


// import { observable, action, reaction, computed } from 'mobx'

// interface Object {
//   id: number
//   title: string
//   isDeleted: boolean
// }

// export class ObjectStore {
//   @observable objectList: Object[] = []

//   constructor() {
//   }

//   @computed
//   get objectsCount(): number {
//     return this.objectList.length
//   }

//   @action
//   addTodo(id: number, title: string) {
//     this.objectList.push({ id, title, isDeleted: false })
//   }

// //   @action
// //   completeTodo(completedTodo: Todo) {
// //     this.todoList.find((todo) => todo === completedTodo).isComplete = true
// //   }
// }

// export const objectStore = new ObjectStore()