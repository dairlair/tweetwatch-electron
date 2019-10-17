// tslint:disable
/**
 * Tweetwatch Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// eslint-disable-next-line
import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateTopic
 */
export interface CreateTopic {
    /**
     * 
     * @type {string}
     * @memberof CreateTopic
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateTopic
     */
    isActive: boolean;
}

export function CreateTopicFromJSON(json: any): CreateTopic {
    return CreateTopicFromJSONTyped(json, false);
}

export function CreateTopicFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTopic {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'isActive': json['isActive'],
    };
}

export function CreateTopicToJSON(value?: CreateTopic | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'isActive': value.isActive,
    };
}


