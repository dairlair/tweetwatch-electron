import ObjectStore from "./ObjectStore";
import CommonStore from "./CommonStore";
import AuthStore from "./AuthStore";

export const stores = {
    objectStore: new ObjectStore([]),
    commonStore: new CommonStore(),
    authStore: new AuthStore(),
}