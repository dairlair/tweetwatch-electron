import React, { Component } from 'react';
import Button from 'antd/es/button';
import { observer, inject } from 'mobx-react';
import { ITopicStore } from '../stores/TopicStore';
import { TopicModel } from '../models';

@inject('topicStore')
@observer
class Topics extends Component<{topicStore: ITopicStore}> {

  componentDidMount() {
    this.props.topicStore.getTopicsAsync();
  }

  render() {
    const {topics} = this.props.topicStore!;
    return (
      <div>
          <Button onClick={this.addTopic}>Add topic</Button>
          {topics.map((topic: TopicModel, key) =>
              <div key={key}>
                #{topic.id} - {topic.name}
              </div>
          )}
      </div>
    );
  }

  private addTopic = () => {
    const {addTopic} = this.props.topicStore!;
    addTopic({name: "Topic #" + (new Date()).getMilliseconds()})
  }
}

export default Topics;