import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, Modal } from "antd";
import { useDispatch} from "react-redux";
import * as type from "../../../../../redux/const/const";
/**
 * @author
 * @function ModalLower
 **/

export const ModalLower = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.dataDetails) {
        let data = props.dataDetails
      form.setFieldsValue({
          address:data?data.addr:"",
          accommodations:data.info?data.info.accommodations:"",
          birth:data.info?data.info.birth:"",
          nation:data.info?data.info.nation:"",
          religion:data.info?data.info.religion:"",
          union:data.info?data.info.union:"",
          cmnd:data.info?data.info.cmnd:"",
          bhyt:data.info?data.info.bhyt:"",
          phone:data.info?data.info.phone:"",
          email:data.info?data.info.email:"",
      });
    }
  }, [props.dataDetails]);
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
  const [form] = Form.useForm();

  const onFinish = (values) => {
    let now= new Date().getFullYear()
    let birthh = new Date(values.birth).getFullYear()
    setIsModalVisible(false);
    dispatch({
      type: type.UPDATE_STUDENT_DETAILS_BOT,
      payload: {
        token: props.dispatchData.token,
        key: props.dataDetails.id,
        data: values,
        remainData: props.dataDetails,
        age:now-birthh
      },
    });
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
              name="accommodations"
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
