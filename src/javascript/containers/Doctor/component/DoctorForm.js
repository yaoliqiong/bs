
import React from 'react'
import moment from 'moment'
import { Form, Input, Button, Checkbox, Icon, DatePicker, TimePicker } from 'antd';
const FormItem = Form.Item;
const MonthPicker = DatePicker.MonthPicker;
const RangePicker = DatePicker.RangePicker;

class DoctorForm extends React.Component {
    constructor(props,context){
        super(props,context)
    }
 
    onSubmit(e){

      const {validateFields } = this.props.form;
    
     
      validateFields((err, values) => {        
        if (!err) {
          console.log(values)
        }else{
          return
        }
      });
    }

  render() {
    const formItemLayout = {
      wrapperCol: {span:12},
      labelCol:{span:5}
    };
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    const { getFieldDecorator,validateFields } = this.props.form;


  

    return (
      <div>
      <Form className="login-form">
        <FormItem
        {...formItemLayout}
          label="名字"
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" /> 
          )}
        </FormItem>
        <FormItem
        {...formItemLayout}
          label="电话"
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="时间"
        >
          {getFieldDecorator('date-time-picker', config)(
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" style={{width:'200px'}}/>
          )}
        </FormItem>
       
      
      </Form>
       <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.onSubmit.bind(this)}>
        预约
      </Button>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(DoctorForm);
// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
export default WrappedNormalLoginForm