import React, { Component } from 'react'
import { Topic } from '../../api-client/src'
import { Icon } from 'antd'
import { ITopicStore } from '../../stores/TopicStore'

interface Props {
  topic: Topic
  topicStore: ITopicStore
}

class TopicDeleteButton extends Component<Props> {

  state = {
    loading: false
  }

  delete = async (): Promise<void> => {
    const {topic, topicStore} = this.props
    this.setState({loading: true})
    await topicStore.deleteTopic(topic.id)
    this.setState({loading: false})
  }

  render() {
    const { loading } = this.state
    if (loading) {
      return (
        <div><Icon type="loading" /></div>
      )
    }

    return (
      <div>
        <Icon type="delete" onClick={this.delete}/>
      </div>
    )
  }
}

export default TopicDeleteButton