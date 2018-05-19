
import React from 'react'
import {Link} from 'react-router'
import {NavBar} from 'antd-mobile'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Register extends React.Component {
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {

//         console.log('Received values of form: ', values);
//       }
//     });
//   }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="fullheight registContent">
          <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          >注册</NavBar>

      <div className="bggray"></div>

      <Form className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            注册
          </Button>
        </FormItem>
      </Form>

      </div>
     
    );
  }
}

const RegisterForm = Form.create()(Register);

export default RegisterForm