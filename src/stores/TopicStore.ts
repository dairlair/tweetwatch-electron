import { observable, action } from 'mobx';
import { DefaultApi, Configuration, Topic, CreateTopicRequest } from '../api-client/src'
import { TopicModel } from '../models';
import { IAuthStore } from './AuthStore'
import appConfig from '../config'

export interface ITopicStore {
  topics: Array<TopicModel>;
  createTopic(topic: CreateTopicRequest): void;
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

    @action createTopic = (request: CreateTopicRequest): void => {
        console.log('CreateTopicRequest', request)
        this.apiClient.createTopic(request).then(() => {
            console.log('Topic created successfully') 
        }).catch(() => {
            console.error('Topic creation failed') 
        })
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