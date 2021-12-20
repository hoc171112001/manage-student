import React, { useEffect, useRef} from "react";
import { Form, Input, Button, Select ,message} from "antd";
import {useDispatch,useSelector} from 'react-redux';

//
import * as type from '../../../../redux/const/const'
import {getToken} from "../../../../helper/helper"
/**
 * @author
 * @function CreateStudent
 **/

const CreateStudent = (props) => {
  const resetBtnRef = useRef()
  const token = getToken()
  let {createSucceed,creMessage} = useSelector((state)=>{
      return state.student
  })
  let {classData} = useSelector((state)=>{
    return state.classes
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
  const onFinish = (values) => {
    dispatch({type:type.CREATE_STUDENT,payload:{data:values,token}})
    resetBtnRef.current.click()
  };
  useEffect(()=>{
    dispatch({type:type.FETCH_CLASSES,payload:token})
  },[dispatch,token])
  useEffect(()=>{
    createSucceed && creMessage ? message.success(creMessage) : creMessage && message.error(creMessage)
    return ()=>{
      dispatch({type:type.CREATE_STUDENT_FAILED,message:""})
    }
  },[createSucceed,creMessage])
  const onReset = () => {
    form.resetFields();
  };
  return (
    <>
      <h2>Create students</h2>
      {/* <Text type={createSucceed?"success":"danger"} style={{margin:"0px auto"}}>{creMessage}</Text> */}
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
            {classData?classData.map((classes)=>{
              return <Option key={classes.classname}>{classes.classname}</Option>
            }):"Loading..."}
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset} ref={resetBtnRef}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};


export default CreateStudent
