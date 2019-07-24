import { ObjectStore } from "./ObjectStore";
import { CommonStore } from "./CommonStore";
import appStateStore from "./AppStateStore";

export const stores = {
    objectStore: new ObjectStore([]),
    commonStore: new CommonStore(),
    appStateStore: appStateStore,
}