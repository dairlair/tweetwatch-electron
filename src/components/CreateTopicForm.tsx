import { Button, Form, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import React, { Component, FormEvent } from 'react';
import { ITopicStore } from '../stores/TopicStore';
import { RouteComponentProps, withRouter  } from "react-router-dom";
import { Topic } from '../api-client/src';

interface CreateTopicFormProps extends FormComponentProps, RouteComponentProps  {
  topicStore: ITopicStore
}

@inject('topicStore')
@observer
class CreateTopicForm extends Component<CreateTopicFormProps> {

  private handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const name: string = this.props.form.getFieldValue('name')
    const isActive: boolean = this.props.form.getFieldValue('isActive') ? true : false
    this.props.topicStore.createTopic({topic:{name: name, isActive: isActive}}).then((topic: Topic) => {
      console.log('Topic created succesfully')
      this.props.history.replace('/topics')
    }).catch(e => {
      console.error('Topic creation error', e)
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form   
    return (
      <Form onSubmit={this.handleSubmit} className="create-topic-form">
        <Form.Item>
          {getFieldDecorator('name', {})(
            <Input placeholder="Name" />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('isActive', {})(
            <Input type="checkbox" placeholder="isActive"/>,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="create-topic-form-button">
            Create
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedCreateTopicForm = Form.create({ name: 'createTopic' })(withRouter(CreateTopicForm));

export default WrappedCreateTopicForm;