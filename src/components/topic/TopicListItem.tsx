import React, { Component } from 'react'
import { Topic } from '../../api-client/src'
import { Card } from 'antd'
import TopicStreams from './TopicStreams'
import { IStreamStore } from '../../stores/StreamStore'
import { ITopicStore } from '../../stores/TopicStore'
import TopicPlayPauseButton from './TopicPlayPauseButton'
import TopicDeleteButton from './TopicDeleteButton'
const { Meta } = Card

interface Props {
  topic: Topic
  streamStore: IStreamStore
  topicStore: ITopicStore
}

class TopicListItem extends Component<Props> {

  render() {
    const { topic, topicStore, streamStore } = this.props
    return (
      <div>
        <Card style={{ marginBottom: 16 }}>
          <div className="tw-topic-list__item">
            <div className="tw-topic-list__play-button-container">
              <TopicPlayPauseButton topic={topic} topicStore={topicStore}/>
            </div>
            <div className="tw-topic-list__name-container">
              <Meta title={topic.name}/> 
            </div>
            <div className="tw-topic-list__streams-container">
              <TopicStreams topic={topic} streamStore={streamStore}></TopicStreams>
            </div>
            <div className="tw-topic-list__delete-button-container">
              <TopicDeleteButton topic={topic} topicStore={topicStore}/>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

export default TopicListItem