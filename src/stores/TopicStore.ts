import { observable, action } from 'mobx';
import { DefaultApi, Configuration, Topic, CreateTopicRequest, UpdateTopicRequest } from '../api-client/src'
import { IAuthStore } from './AuthStore'
import appConfig from '../config'

export interface ITopicStore {
  topics: Array<Topic>
  createTopic(request: CreateTopicRequest): Promise<void>
  updateTopic(request: UpdateTopicRequest): Promise<void>
  deleteTopic(topicId: number): Promise<void>
  retrieveTopics(): Promise<void>
}

class TopicStore implements ITopicStore {
    
    @observable public topics: Array<Topic>

    private authStore: IAuthStore

    constructor(authStore: IAuthStore, fixtures: Topic[]) {
        this.authStore = authStore
        this.topics = fixtures
    }

    @action async createTopic(request: CreateTopicRequest): Promise<void> {
        await this.getApiClient().createTopic(request)
        await this.retrieveTopics()
    }

    @action async updateTopic(request: UpdateTopicRequest): Promise<void> {
        await this.getApiClient().updateTopic(request)
        await this.retrieveTopics()
    }

    @action async deleteTopic(topicId: number): Promise<void> {
        await this.getApiClient().deleteTopic({topicId})
        await this.retrieveTopics()
    }

    @action async retrieveTopics(): Promise<void> {
        if (!this.authStore.isLoggedIn) {
            return
        }
        let topics = await this.getApiClient().getUserTopics()
        console.log('Topics retrived successfully', topics)
        this.topics = topics
    }

    private getApiClient() {
        return new DefaultApi(new Configuration({
            basePath: appConfig.endpoint(),
            apiKey: String(this.authStore.token)
        }))
    }
}

export default TopicStore;