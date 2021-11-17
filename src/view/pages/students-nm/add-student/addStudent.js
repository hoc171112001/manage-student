import React, { useState } from "react";
import { Form, Input, Button, Select ,Typography} from "antd";
import {useDispatch,useSelector} from 'react-redux';

//
import * as type from '../../../../redux/const/const'
import {getToken} from "../../../../helper/helper"
/**
 * @author
 * @function CreateStudent
 **/

const CreateStudent = (props) => {
    let {Text} = Typography
  const [classes, setClass] = useState([
    {
        key:1,
        name:"REACTJS-7103"
    },
    {
        key:2,
        name:"CD19CNTT2"
    },
    {
        key:3,
        name:"NODEJS-2107"
    },
    {
        key:4,
        name:"SQL-XAMPP"
    },
  ]);
  const token = getToken()
  let {createSucceed,creMessage} = useSelector((state)=>{
      return state.student
  })
  let dispatch = useDispatch()
  const { Option } = Select;
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  const [form] = Form.useForm();

  //   const onGenderChange = (value) => {
  //     switch (value) {
  //       case "male":
  //         form.setFieldsValue({
  //           note: "Hi, man!",
  //         });
  //         return;

  //       case "female":
  //         form.setFieldsValue({
  //           note: "Hi, lady!",
  //         });
  //         return;

  //       case "other":
  //         form.setFieldsValue({
  //           note: "Hi there!",
  //         });
  //     }
  //   };

  const onFinish = (values) => {
    dispatch({type:type.CREATE_STUDENT,payload:{data:values,token}})
  };

  const onReset = () => {
    form.resetFields();
  };

  //   const onFill = () => {
  //     form.setFieldsValue({
  //       note: "Hello world!",
  //       gender: "male",
  //     });
  //   };
  return (
    <>
      <h2>Create students</h2>
      <Text type={createSucceed?"success":"danger"} style={{margin:"0px auto"}}>{creMessage}</Text>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="adress"
          label="Adress"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="class"
          label="Class"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select class"
            //   onChange={onGenderChange}
            allowClear
          >
            {classes.map((classes) => {
              return <Option key={classes.key} value={classes.name}>{classes.name}</Option>;
            })}
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};


export default CreateStudent
