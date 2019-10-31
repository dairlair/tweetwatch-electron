import React, { Component } from 'react'
import { Topic } from '../../api-client/src'
import { Icon } from 'antd'
import { ITopicStore } from '../../stores/TopicStore'

interface Props {
  topic: Topic
  topicStore: ITopicStore
}

class TopicPlayPauseButton extends Component<Props> {
  state = {
    loading: false
  }

  play = () => {
    this.setIsActive(true)
  }

  pause = () => {
    this.setIsActive(false)
  }

  setIsActive = async (value: boolean): Promise<void> => {
    const {topic, topicStore} = this.props
    const request = {topicId: topic.id, topic: {...topic, ...{isActive: value}}}

    this.setState({loading: true})
    await topicStore.updateTopic(request)
    this.setState({loading: false})
  }

  render() {
    const { topic } = this.props
    const { loading } = this.state

    if (loading) {
      return (
        <Icon type="loading" className="tw-topic-play-pause-button"/>
      )
    }

    return (
      <div>
        {topic.isActive && (
          <Icon type="play-circle" onClick={this.pause} className="tw-topic-play-pause-button"/>
        )}
        {!topic.isActive && (
          <Icon type="pause-circle" onClick={this.play} className="tw-topic-play-pause-button"/>
        )}
      </div>
    )
  }
}

export default TopicPlayPauseButton