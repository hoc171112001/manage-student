import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, Modal, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as type from "../../../../../redux/const/const";
/**
 * @author
 * @function ModalUpper
 **/

export const ModalUpper = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const { dataDetails, classData, dispatchData } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    if (dataDetails) {
      form.setFieldsValue({
        name:dataDetails?dataDetails.name:"",
        mssgv:dataDetails?dataDetails.mssgv:"",
        classes:dataDetails?dataDetails.classes:"",
        gender:dataDetails?dataDetails.gender:"",
        workDate:dataDetails?dataDetails.workDate:"",
        teacherExp:dataDetails?dataDetails.teacherExp:"",
      });
    }
  }, [dataDetails, form]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
  };

  const onFinish = (values) => {
    console.log(values);
    setIsModalVisible(false);
    dispatch({type:type.UPDATE_TEACHER_DETAIL,payload:{
      data:{
        ...dataDetails,
        ...values
      },
      dispatchData
    }})
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className="button" style={{ marginBottom: "10px" }}>
      <Button type="primary" onClick={showModal}>
        Cập nhật
      </Button>
      <Modal
        forceRender
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
        getContainer={false}
      >
        <div>
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            className="form-1"
          >
            <Form.Item
              name="mssgv"
              label="MSGV"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền đủ thông tin!",
                },
                {
                  validator: (_, val) => {
                    let message = "MSSV phải là 1 dãy số";
                    let check = false;
                    if (val && Number(val)) {
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
              <Input />
            </Form.Item>
            <Form.Item
              name="name"
              label="Họ tên"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền đủ thông tin!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            {/* giới tính  */}
            <Form.Item
              name="gender"
              label="Giới tính"
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
            {/* Lớp */}
            <Form.Item
              name="classes"
              label="Lớp"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Select
                mode="multiple"
                allowClear
                placeholder="Please select"
                // defaultValue={props.dataDetails.classes}
                // onChange={handleChange}
              >
                {classData
                  ? classData.map((classes) => {
                      return (
                        <Option key={classes.classname}>
                          {classes.classname}
                        </Option>
                      );
                    })
                  : "Loading"}
              </Select>
            </Form.Item>
            <Form.Item
              name="workDate"
              label="Ngày vào làm"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền đủ thông tin!",
                },
              ]}
            >
              <Input type="date" />
            </Form.Item>
            <Form.Item
              name="teacherExp"
              label="Kinh nghiệm"
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
            {/* button */}
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};
