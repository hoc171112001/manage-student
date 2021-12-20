import React, { useEffect, useRef } from "react";
import { Form, Input, Button, Select, message } from "antd";
import { useDispatch, useSelector } from "react-redux";

//
import * as type from "../../../../redux/const/const";
import { getToken } from "../../../../helper/helper";
/**
 * @author
 * @function CreateStudent
 **/

const CreateTeacher = (props) => {
  const resetRef = useRef()
  const token = getToken();
  let { createSuccess, createMessage } = useSelector((state) => {
    return state.teacher;
  });
  let { classData } = useSelector((state) => {
    return state.classes;
  });
  let dispatch = useDispatch();
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
    let birthDay = new Date(values.birth).getFullYear()
    let now = new Date().getFullYear()
    let age = now - birthDay
    dispatch({type:type.CREATE_TEACHER,payload:{token, data:values, age}})
    resetRef.current.click()
  };
  useEffect(() => {
    dispatch({ type: type.FETCH_CLASSES, payload: token });
  }, [dispatch,token]);
  useEffect(()=>{
    createSuccess && createMessage ? message.success(createMessage)
    : createMessage && message.error(createMessage)
    return ()=>{
      dispatch({type:type.CREATE_TEACHER_FAILED,message:""})
    }
  },[createSuccess,createMessage])
  const onReset = () => {
    form.resetFields();
  };
  return (
    <>
      <h2>Create teacher</h2>
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
          name="birth"
          label="Birth"
          rules={[
            {
              required: true,
            },
            {
              validator: (_, val) => {
                let message = "Teacher must be more than 18 years old!";
                let check = false;
                let now = new Date().getFullYear();
                let birth = new Date(val).getFullYear();
                if (now - birth >= 18) {
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
          <Input type="date" />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Option value="Nam">Nam</Option>
            <Option value="Nữ">Nữ</Option>
            <Option value="Khác">Khác</Option>
          </Select>
        </Form.Item>
        <Form.Item
                name="teacherExp"
                label="Experience"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  placeholder="Select a option and change input text above"
                  allowClear
                >
                  <Option value="Trợ giảng">Trợ giảng</Option>
                  <Option value="Fresher">Fresher</Option>
                  <Option value="Junior">Junior</Option>
                  <Option value="Senior">Senior</Option>
                </Select>
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
            {classData
              ? classData.map((classes) => {
                  return (
                    <Option key={classes.classname}>{classes.classname}</Option>
                  );
                })
              : "Loading..."}
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset} ref={resetRef}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateTeacher;
