import { observable, runInAction, action } from 'mobx';
import { TopicModel } from '../models';
import TopicService from '../services/TopicService'
import { IAuthStore } from './AuthStore'

export interface ITopicStore {
  topics: Array<TopicModel>;
  addTopic(object: Partial<TopicModel>): void;
  getTopicsAsync(): void;
}

class TopicStore implements ITopicStore {
    private authStore: IAuthStore
    private topicService: TopicService

    constructor(authStore: IAuthStore, fixtures: TopicModel[]) {
        this.authStore = authStore
        this.topics = fixtures
        this.topicService = new TopicService()
    }

    @observable public topics: Array<TopicModel>

    @action
    addTopic = (object: Partial<TopicModel>): void => {
        // this.objects.push(new ObjectModel(object.title || 'Unknown'));
    }

    getTopicsAsync = async () => {
        if (!this.authStore.token) {
            console.error('You need to be logged in to retrieve the topic list')
            return
        }
        try {
            const data = await this.topicService.get(this.authStore.token)
            console.log('Data retrieved from topics service: ', data)
            runInAction(() => {
                this.topics = data
            })
        } catch (error) {
            console.error('Topic retrieving failed', error)
            // runInAction(() => {
            //     this.status = "error";
            // });
        }
    };
}

export default TopicStore;