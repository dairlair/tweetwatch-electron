import { observable, action } from 'mobx';
import { DefaultApi, Configuration, Topic, CreateTopicRequest } from '../api-client/src'
import { TopicModel } from '../models';
import { IAuthStore } from './AuthStore'
import appConfig from '../config'

export interface ITopicStore {
  topics: Array<TopicModel>;
  createTopic(topic: CreateTopicRequest): Promise<Topic>;
  retrieveTopics(): void;
}

class TopicStore implements ITopicStore {
    
    @observable public topics: Array<TopicModel>

    private authStore: IAuthStore
    private apiClient: DefaultApi

    constructor(authStore: IAuthStore, fixtures: TopicModel[]) {
        this.authStore = authStore
        this.topics = fixtures
        this.apiClient = new DefaultApi(new Configuration({
            basePath: appConfig.endpoint(),
            apiKey: String(authStore.token)
        }))
    }

    @action createTopic = (request: CreateTopicRequest): Promise<Topic> => {
        return this.apiClient.createTopic(request)
    }

    @action async retrieveTopics() {
        if (!this.authStore.isLoggedIn) {
            console.warn('Unauthorized user can not see topics')
            return
        }

        this.apiClient.getUserTopics().then((topics: Array<Topic>) => {
            console.log('Topics retrived successfully', topics)
            this.topics = topics
        }).catch((error: any) => {
            console.error('Topics retrieving failed', error)
        })
    }
}

export default TopicStore;