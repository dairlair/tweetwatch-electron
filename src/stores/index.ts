import ObjectStore from "./ObjectStore";
import TopicStore from "./TopicStore";
import CommonStore from "./CommonStore";
import AuthStore from "./AuthStore";

const authStore: AuthStore = new AuthStore()
const topicStore: TopicStore = new TopicStore(authStore, [])
const commonStore: CommonStore = new CommonStore()
const objectStore: ObjectStore = new ObjectStore([])

export const stores = {
    objectStore: objectStore,
    topicStore: topicStore,
    commonStore: commonStore,
    authStore: authStore,
}