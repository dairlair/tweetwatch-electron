import { Button, Form, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import React, { Component, FormEvent } from 'react';
import { Redirect } from 'react-router';
import { ITopicStore } from '../stores/TopicStore';

interface CreateTopicFormProps extends FormComponentProps {
  topicStore: ITopicStore
}

@inject('topicStore')
@observer
class CreateTopicForm extends Component<CreateTopicFormProps, any> {

  private handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tracksString: string = this.props.form.getFieldValue('tracks')
    const name: string = this.props.form.getFieldValue('name')
    const tracks: Array<string> = tracksString.split(',')
    const isActive: boolean = this.props.form.getFieldValue('isActive') ? true : false
    this.props.topicStore.createTopic({topic:{name: name, tracks: tracks, isActive: isActive}})
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="create-topic-form">
        <Form.Item>
          {getFieldDecorator('name', {})(
            <Input placeholder="Name" />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('tracks', {})(
            <Input placeholder="Keywords"/>,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('isActive', {})(
            <Input type="checkbox" placeholder="isActive" />,
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

const WrappedCreateTopicForm = Form.create({ name: 'createTopic' })(CreateTopicForm);

export default WrappedCreateTopicForm;