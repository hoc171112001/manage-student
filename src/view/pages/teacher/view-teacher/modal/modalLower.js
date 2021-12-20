import React, { useEffect, useState } from "react";
import { Form, Input, Button, Modal } from "antd";
import { useDispatch} from "react-redux";
import * as type from "../../../../../redux/const/const";
/**
 * @author
 * @function ModalLower
 **/

export const ModalLower = (props) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const {dataDetails, dispatchData} = props
  useEffect(() => {
    if (dataDetails && dataDetails.info) {
      form.setFieldsValue({
        address:dataDetails.info.address,
        location:dataDetails.info.location,
        nation:dataDetails.info.nation,
        religion:dataDetails.info.religion,
        birth:dataDetails.birth,
        union:dataDetails.info.union,
        cmnd:dataDetails.info.cmnd,
        phone:dataDetails.info.phone,
        email:dataDetails.info.email,
        bhyt:dataDetails.info.bhyt,

      });
    }
  }, [dataDetails]);
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
    let now= new Date().getFullYear()
    let birthh = new Date(values.birth).getFullYear()
    setIsModalVisible(false);
    console.log(values, now-birthh);
    dispatch({type:type.UPDATE_TEACHER_DETAIL,payload:{
      data:{
        ...dataDetails,
        birth:values.birth,
        info:{
          ...dataDetails.info,
          age:now-birthh,
          address:values.address,
          bhyt:values.bhyt,
          cmnd:values.cmnd,
          email:values.email,
          location:values.location,
          nation:values.nation,
          religion:values.religion,
          union:values.union,
          phone:values.phone,
        }
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
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
        getContainer={false}
        forceRender
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
              name="address"
              label="Nơi sinh"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền đủ thông tin!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="location"
              label="Địa chỉ hiện tại"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền đủ thông tin!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Ngày sinh"
              name="birth"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input type="date" />
            </Form.Item>
            <Form.Item
              name="nation"
              label="Dân tộc"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền đủ thông tin!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="religion"
              label="Tôn giáo"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền đủ thông tin!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Ngày vào đoàn"
              name="union"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input type="date" />
            </Form.Item>
            <Form.Item
              name="cmnd"
              label="CMND"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền đủ thông tin!",
                },
                {
                  validator: (_, val) => {
                    let message = "CMND phải là 1 dãy số";
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
              name="bhyt"
              label="BHYT"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền đủ thông tin!",
                },
                {
                  validator: (_, val) => {
                    let message = "BHYT phải là 1 dãy số";
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
              name="phone"
              label="SĐT"
              rules={[
                {
                  required: true,
                  message: "Vui lòng điền đủ thông tin!",
                },
                {
                  validator: (_, val) => {
                    let message = "SĐT phải là 1 dãy số";
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
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
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
