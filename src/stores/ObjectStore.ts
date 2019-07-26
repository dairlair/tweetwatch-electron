import { observable, computed, action } from 'mobx';
import { ObjectModel } from '../models';

export interface IObjectStore {
  objects: Array<ObjectModel>;
  addObject(object: Partial<ObjectModel>): void;
}

class ObjectStore implements IObjectStore {
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
  }

  @action
  deleteObject = (id: number): void => {
    this.objects = this.objects.filter((object: ObjectModel) => object.id !== id);
  }
}

export default ObjectStore;