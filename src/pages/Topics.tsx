import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { ITopicStore } from '../stores/TopicStore';
import { TopicModel } from '../models';
import { Link } from 'react-router-dom';

@inject('topicStore')
@observer
class Topics extends Component<{topicStore: ITopicStore}> {

  componentDidMount() {
    this.props.topicStore.retrieveTopics();
  }

  render() {
    const {topics} = this.props.topicStore!;
    return (
      <div>
          <Link to="/topics/create">Create topic</Link>
          {topics.map((topic: TopicModel, key) =>
              <div key={key}>
                #{topic.id} - {topic.name}
              </div>
          )}
      </div>
    )
  }
}

export default Topics;