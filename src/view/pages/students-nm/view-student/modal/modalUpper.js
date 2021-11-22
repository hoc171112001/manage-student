import React, { useEffect, useState} from "react";
import { Form, Input, Button, Select, Modal, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import * as type from '../../../../../redux/const/const'
/**
 * @author
 * @function ModalUpper
 **/

export const ModalUpper = (props) => {
  const { Option } = Select;
  const dispatch = useDispatch()
  const {classData} = useSelector((state)=>{
    return state.classes
  })
  const [form] = Form.useForm();
  useEffect(()=>{
    if(props.dataDetails){
      form.setFieldsValue({
        mssv: props.dataDetails.info?props.dataDetails.info.mssv:"",
        gender:props.dataDetails?props.dataDetails.gender:"",
        specialized:props.dataDetails?props.dataDetails.specialized:"",
        name:props.dataDetails?props.dataDetails.name:"",
        course:props.dataDetails?props.dataDetails.course:"",
        roles:props.dataDetails?props.dataDetails.roles:"",
        levelEducate:props.dataDetails?props.dataDetails.levelEducate:"",
        typeEducate:props.dataDetails?props.dataDetails.typeEducate:"",
        classes:props.dataDetails?props.dataDetails.classes:"",
      });
    }
  },[props.dataDetails])
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
    dispatch({type:type.UPDATE_STUDENT_DETAILS_TOP,payload:{
      token:props.dispatchData.token,
      key:props.dataDetails.id,
      data:values,
      remainData:props.dataDetails
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
        <Spin spinning={false} tip="Loading data">
          <div>
            <Form
              {...layout}
              form={form}
              name="control-hooks"
              onFinish={onFinish}
              className="form-1"
            >
              <Form.Item
                name="mssv"
                label="MSSV"
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
                    required: true,
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
                  {
                    classData?classData.map((classes)=>{
                      return <Option key={classes.classname}>{classes.classname}</Option>
                    }):"Loading"
                  }
                </Select>
              </Form.Item>
              <Form.Item
                name="specialized"
                label="Ngành học"
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
                name="course"
                label="Khóa"
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
                name="roles"
                label="Chức vụ"
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
                name="levelEducate"
                label="Cấp đào tạo"
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
                  <Option value="Cao đẳng">Cao đẳng</Option>
                  <Option value="Đại học">Đại học</Option>
                  <Option value="Trung cấp">Trung cấp</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="typeEducate"
                label="Loại đào tạo"
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
                  <Option value="Chính quy">Chính quy</Option>
                  <Option value="Khác">Khác</Option>
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
        </Spin>
      </Modal>
    </div>
  );
};
