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


import * as runtime from '../runtime';
import {
    CreateStream,
    CreateStreamToJSON,
    CreateTopic,
    CreateTopicToJSON,
    Credentials,
    CredentialsToJSON,
    DefaultSuccess,
    DefaultSuccessFromJSON,
    Stream,
    StreamFromJSON,
    Topic,
    TopicFromJSON,
    Tweet,
    TweetFromJSON,
    User,
    UserFromJSON,
} from '../models';

export interface CreateStreamRequest {
    topicId: number;
    stream: CreateStream;
}

export interface CreateTopicRequest {
    topic: CreateTopic;
}

export interface DeleteStreamRequest {
    topicId: number;
    streamId: number;
}

export interface DeleteTopicRequest {
    topicId: number;
}

export interface GetStreamsRequest {
    topicId: number;
}

export interface GetTopicTweetsRequest {
    topicId: number;
}

export interface LoginRequest {
    user: Credentials;
}

export interface SignupRequest {
    user: Credentials;
}

export interface UpdateStreamRequest {
    topicId: number;
    streamId: number;
    stream: CreateStream;
}

export interface UpdateTopicRequest {
    topicId: number;
    topic: CreateTopic;
}

/**
 * no description
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     */
    async createStreamRaw(requestParameters: CreateStreamRequest): Promise<runtime.ApiResponse<Stream>> {
        if (requestParameters.topicId === null || requestParameters.topicId === undefined) {
            throw new runtime.RequiredError('topicId','Required parameter requestParameters.topicId was null or undefined when calling createStream.');
        }

        if (requestParameters.stream === null || requestParameters.stream === undefined) {
            throw new runtime.RequiredError('stream','Required parameter requestParameters.stream was null or undefined when calling createStream.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/topics/{topicId}/streams`.replace(`{${"topicId"}}`, encodeURIComponent(String(requestParameters.topicId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateStreamToJSON(requestParameters.stream),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StreamFromJSON(jsonValue));
    }

    /**
     */
    async createStream(requestParameters: CreateStreamRequest): Promise<Stream> {
        const response = await this.createStreamRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async createTopicRaw(requestParameters: CreateTopicRequest): Promise<runtime.ApiResponse<Topic>> {
        if (requestParameters.topic === null || requestParameters.topic === undefined) {
            throw new runtime.RequiredError('topic','Required parameter requestParameters.topic was null or undefined when calling createTopic.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/topics`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateTopicToJSON(requestParameters.topic),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TopicFromJSON(jsonValue));
    }

    /**
     */
    async createTopic(requestParameters: CreateTopicRequest): Promise<Topic> {
        const response = await this.createTopicRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete desired stream by Topic ID and Stream ID
     */
    async deleteStreamRaw(requestParameters: DeleteStreamRequest): Promise<runtime.ApiResponse<DefaultSuccess>> {
        if (requestParameters.topicId === null || requestParameters.topicId === undefined) {
            throw new runtime.RequiredError('topicId','Required parameter requestParameters.topicId was null or undefined when calling deleteStream.');
        }

        if (requestParameters.streamId === null || requestParameters.streamId === undefined) {
            throw new runtime.RequiredError('streamId','Required parameter requestParameters.streamId was null or undefined when calling deleteStream.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/topics/{topicId}/streams/{streamId}`.replace(`{${"topicId"}}`, encodeURIComponent(String(requestParameters.topicId))).replace(`{${"streamId"}}`, encodeURIComponent(String(requestParameters.streamId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DefaultSuccessFromJSON(jsonValue));
    }

    /**
     * Delete desired stream by Topic ID and Stream ID
     */
    async deleteStream(requestParameters: DeleteStreamRequest): Promise<DefaultSuccess> {
        const response = await this.deleteStreamRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete desired topic by Topic ID
     */
    async deleteTopicRaw(requestParameters: DeleteTopicRequest): Promise<runtime.ApiResponse<DefaultSuccess>> {
        if (requestParameters.topicId === null || requestParameters.topicId === undefined) {
            throw new runtime.RequiredError('topicId','Required parameter requestParameters.topicId was null or undefined when calling deleteTopic.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/topics/{topicId}`.replace(`{${"topicId"}}`, encodeURIComponent(String(requestParameters.topicId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DefaultSuccessFromJSON(jsonValue));
    }

    /**
     * Delete desired topic by Topic ID
     */
    async deleteTopic(requestParameters: DeleteTopicRequest): Promise<DefaultSuccess> {
        const response = await this.deleteTopicRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getStatusRaw(): Promise<runtime.ApiResponse<User>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/status`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async getStatus(): Promise<User> {
        const response = await this.getStatusRaw();
        return await response.value();
    }

    /**
     * Returns list of streams inside the topic
     */
    async getStreamsRaw(requestParameters: GetStreamsRequest): Promise<runtime.ApiResponse<Array<Stream>>> {
        if (requestParameters.topicId === null || requestParameters.topicId === undefined) {
            throw new runtime.RequiredError('topicId','Required parameter requestParameters.topicId was null or undefined when calling getStreams.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/topics/{topicId}/streams`.replace(`{${"topicId"}}`, encodeURIComponent(String(requestParameters.topicId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StreamFromJSON));
    }

    /**
     * Returns list of streams inside the topic
     */
    async getStreams(requestParameters: GetStreamsRequest): Promise<Array<Stream>> {
        const response = await this.getStreamsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Returns list of tweets retrieved for this topic
     */
    async getTopicTweetsRaw(requestParameters: GetTopicTweetsRequest): Promise<runtime.ApiResponse<Array<Tweet>>> {
        if (requestParameters.topicId === null || requestParameters.topicId === undefined) {
            throw new runtime.RequiredError('topicId','Required parameter requestParameters.topicId was null or undefined when calling getTopicTweets.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/topics/{topicId}/tweets`.replace(`{${"topicId"}}`, encodeURIComponent(String(requestParameters.topicId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TweetFromJSON));
    }

    /**
     * Returns list of tweets retrieved for this topic
     */
    async getTopicTweets(requestParameters: GetTopicTweetsRequest): Promise<Array<Tweet>> {
        const response = await this.getTopicTweetsRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async getUserTopicsRaw(): Promise<runtime.ApiResponse<Array<Topic>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/topics`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TopicFromJSON));
    }

    /**
     */
    async getUserTopics(): Promise<Array<Topic>> {
        const response = await this.getUserTopicsRaw();
        return await response.value();
    }

    /**
     */
    async loginRaw(requestParameters: LoginRequest): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling login.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CredentialsToJSON(requestParameters.user),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async login(requestParameters: LoginRequest): Promise<User> {
        const response = await this.loginRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async signupRaw(requestParameters: SignupRequest): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.user === null || requestParameters.user === undefined) {
            throw new runtime.RequiredError('user','Required parameter requestParameters.user was null or undefined when calling signup.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/signup`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CredentialsToJSON(requestParameters.user),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async signup(requestParameters: SignupRequest): Promise<User> {
        const response = await this.signupRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update desired stream by Topic ID and Stream ID
     */
    async updateStreamRaw(requestParameters: UpdateStreamRequest): Promise<runtime.ApiResponse<Stream>> {
        if (requestParameters.topicId === null || requestParameters.topicId === undefined) {
            throw new runtime.RequiredError('topicId','Required parameter requestParameters.topicId was null or undefined when calling updateStream.');
        }

        if (requestParameters.streamId === null || requestParameters.streamId === undefined) {
            throw new runtime.RequiredError('streamId','Required parameter requestParameters.streamId was null or undefined when calling updateStream.');
        }

        if (requestParameters.stream === null || requestParameters.stream === undefined) {
            throw new runtime.RequiredError('stream','Required parameter requestParameters.stream was null or undefined when calling updateStream.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/topics/{topicId}/streams/{streamId}`.replace(`{${"topicId"}}`, encodeURIComponent(String(requestParameters.topicId))).replace(`{${"streamId"}}`, encodeURIComponent(String(requestParameters.streamId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CreateStreamToJSON(requestParameters.stream),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StreamFromJSON(jsonValue));
    }

    /**
     * Update desired stream by Topic ID and Stream ID
     */
    async updateStream(requestParameters: UpdateStreamRequest): Promise<Stream> {
        const response = await this.updateStreamRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update desired topic by Topic ID
     */
    async updateTopicRaw(requestParameters: UpdateTopicRequest): Promise<runtime.ApiResponse<Topic>> {
        if (requestParameters.topicId === null || requestParameters.topicId === undefined) {
            throw new runtime.RequiredError('topicId','Required parameter requestParameters.topicId was null or undefined when calling updateTopic.');
        }

        if (requestParameters.topic === null || requestParameters.topic === undefined) {
            throw new runtime.RequiredError('topic','Required parameter requestParameters.topic was null or undefined when calling updateTopic.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // JWT authentication
        }

        const response = await this.request({
            path: `/topics/{topicId}`.replace(`{${"topicId"}}`, encodeURIComponent(String(requestParameters.topicId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CreateTopicToJSON(requestParameters.topic),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TopicFromJSON(jsonValue));
    }

    /**
     * Update desired topic by Topic ID
     */
    async updateTopic(requestParameters: UpdateTopicRequest): Promise<Topic> {
        const response = await this.updateTopicRaw(requestParameters);
        return await response.value();
    }

}
