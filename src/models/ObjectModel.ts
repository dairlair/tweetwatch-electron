
import { observable } from 'mobx';

export class ObjectModel {
  readonly id: number;
  @observable public title: string;

  constructor(title: string) {
    this.id = ObjectModel.generateId();
    this.title = title;
  }

  static nextId = 1;
  static generateId() {
    return this.nextId++;
  }
}

export default ObjectModel;