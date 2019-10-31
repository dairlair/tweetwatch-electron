import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { ITopicStore } from '../stores/TopicStore';
import { IAuthStore } from '../stores/AuthStore';
import { IStreamStore } from '../stores/StreamStore';
import { EmptyWidget, PageHeaderWidget } from '../components/widgets'
import { reaction } from 'mobx';
import { Topic } from '../api-client/src';
import TopicListItem from '../components/topic/TopicListItem'

interface Props {
  authStore: IAuthStore
  streamStore: IStreamStore
  topicStore: ITopicStore
}

@inject('authStore', 'streamStore', 'topicStore')
@observer
class TopicsListPage extends Component<Props> {

  constructor(props: Props) {
    super(props)
    reaction(
      () => this.props.authStore.isLoggedIn,
      (isLoggedIn: boolean) => { 
        if (isLoggedIn) {
          this.retrieve()
        }
      }
    )
  }

  componentDidMount() {
    this.retrieve()
  }

  render() {
    const {topics} = this.props.topicStore;

    if (topics.length === 0) {
      return (
        <EmptyWidget description="What the fuck is going on?" path="/topics/create" label="Creare your first topic"></EmptyWidget>
      )
    }

    return (
      <div>
          <PageHeaderWidget title="Topics" subTitle="" path="/topics/create" label="Create topic"></PageHeaderWidget>
          {topics.map((topic: Topic, key) =>
              <div key={key}>
                <TopicListItem topic={topic} topicStore={this.props.topicStore} streamStore={this.props.streamStore}></TopicListItem>
              </div>
          )}
      </div>
    )
  }

  private retrieve() {
    this.props.topicStore.retrieveTopics()
  }
}

export default TopicsListPage;