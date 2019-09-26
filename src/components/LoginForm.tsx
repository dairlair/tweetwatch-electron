import React, { Component, FormEvent } from 'react';
import { Redirect } from 'react-router';
import { Form, Icon, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { observer, inject } from 'mobx-react';
import { IAuthStore } from '../stores/AuthStore';

interface LoginFormProps extends FormComponentProps {
  authStore: IAuthStore
}

@inject('authStore')
@observer
class LoginForm extends Component<LoginFormProps, any> {

  private handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.authStore.login(this.props.form.getFieldValue('email'), this.props.form.getFieldValue('password'))
  }

  render() {

    if (this.props.authStore.isLoggedIn) {
      return <Redirect to='/' />
    }

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
            Log in
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);

export default WrappedLoginForm;