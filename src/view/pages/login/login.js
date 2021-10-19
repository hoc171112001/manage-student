import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, Card, Typography } from "antd";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";

//import out library
import * as type from '../../../redux/const/const'
import "./login.css";


/**
 * @author
 * @function Login
 **/
const { Text } = Typography;
export const Login = (props) => {
  // let [isSubmit, setSubmit] = useState(false);
  // let [messageErr, setMessageErr] = useState("");
  let history = useHistory();
  let isSubmit = useSelector((state)=>{
    return state.auth.isSubmit
  })
  let messageErr = useSelector((state)=>{
    return state.auth.message
  })
  let isLogged = useSelector(state=>state.auth.isLogged)
  useEffect(()=>{
    if(isLogged){
      history.push('/dasboard')
    }
  },[isLogged])
  let dispatch = useDispatch()
  const onFinish = (values) => {
    dispatch({ type: type.USER_LOGIN, payload: values });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Card
      className="card"
      title="Login"
      extra={<a href="#">Register</a>}
      style={{ width: 500 }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              validator: (_, val) => {
                let message = "Password must be more than 3 characters!";
                let check = false;
                if (val.length > 3) {
                  check = true;
                  message = "";
                }
                return check
                  ? Promise.resolve(message)
                  : Promise.reject(message);
              },
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <div>
            <Text type="danger">{messageErr}</Text>
          </div>
          <Button type="primary" htmlType="submit" loading={isSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
