import React, { Component, FormEvent } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { observer, inject } from 'mobx-react';
import { AppStateStore } from '../stores/AppStateStore';

interface SignUpFormProps extends FormComponentProps {
  appStateStore: AppStateStore
}

@inject('appStateStore')
@observer
class SignUpForm extends Component<SignUpFormProps, any> {

  private handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.appStateStore.login(this.props.form.getFieldValue('email'), this.props.form.getFieldValue('password'))
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: 'Please input your e-mail!' }, 
              { type: 'email', message: 'The input is not valid E-mail!'},
            ],
          })(
            <Input
              prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="E-mail"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {/* <a className="login-form-forgot" href="">
            Forgot password
          </a> */}
          <Button type="primary" htmlType="submit" className="login-form-button">
            Sign up
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
      </Form>
    );
  }
}

const WrappedSignUpForm = Form.create({ name: 'signup' })(SignUpForm);

export default WrappedSignUpForm;