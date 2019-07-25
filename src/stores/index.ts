import { ObjectStore } from "./ObjectStore";
import { CommonStore } from "./CommonStore";
import authStore from "./AuthStore";

export const stores = {
    objectStore: new ObjectStore([]),
    commonStore: new CommonStore(),
    authStore: authStore,
}