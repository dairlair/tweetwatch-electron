import { observable, action } from 'mobx'
import { DefaultApi, Configuration, Stream, CreateStreamRequest, DefaultSuccess } from '../api-client/src'
import { IAuthStore } from './AuthStore'
import appConfig from '../config'

export interface IStreamStore {
  streamsMap: {[key: number]: Array<Stream>}
  createStream(request: CreateStreamRequest): Promise<Stream>
  retrieveStreams(topicId: number): void
  deleteStream(topicId: number, streamId: number): Promise<DefaultSuccess>
}

class StreamStore implements IStreamStore {
    
    @observable public streamsMap: {[key: number]: Array<Stream>} = {}

    private authStore: IAuthStore

    constructor(authStore: IAuthStore, streamsMap: {[key: number]: Array<Stream>}) {
        this.authStore = authStore
        this.streamsMap = streamsMap
    }

    @action createStream = (request: CreateStreamRequest): Promise<Stream> => {
        return this.getApiClient().createStream(request)
    }

    @action deleteStream = (topicId: number, streamId: number): Promise<DefaultSuccess> => {
        return this.getApiClient().deleteStream({topicId, streamId})
    }

    @action async retrieveStreams(topicId: number) {
        if (!this.authStore.isLoggedIn) {
            console.warn('Unauthorized user can not see stream')
            return
        }

        this.getApiClient().getStreams({topicId}).then((streams: Array<Stream>) => {
            this.streamsMap[topicId] = streams
            console.log('Streams retrived successfully', streams, this.streamsMap)
        }).catch((error: any) => {
            console.error('Streams retrieving failed', error)
        })
    }

    private getApiClient() {
        return new DefaultApi(new Configuration({
            basePath: appConfig.endpoint(),
            apiKey: String(this.authStore.token)
        }))
    }
}

export default StreamStore