import AuthStore from "./AuthStore"
import CommonStore from "./CommonStore"
import StreamStore from "./StreamStore"
import TopicStore from "./TopicStore"

const authStore: AuthStore = new AuthStore()
const commonStore: CommonStore = new CommonStore()
const streamStore: StreamStore = new StreamStore(authStore, {})
const topicStore: TopicStore = new TopicStore(authStore, [])

export const stores = {
    authStore: authStore,
    commonStore: commonStore,
    streamStore: streamStore,
    topicStore: topicStore,
}