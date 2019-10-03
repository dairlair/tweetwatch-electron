import { observable } from 'mobx';

export class TopicModel {
  public readonly id: number
  @observable public name: string
  @observable public tracks: string[]

  constructor(id: number, name: string, tracks: string[]) {
    this.id = id
    this.name = name
    this.tracks = tracks
  }
}

export default TopicModel;