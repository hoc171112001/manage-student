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
  const {dataDetails} = useSelector(state=>state.student)
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
  },[props.dataDetails,form])
  useEffect(()=>{
    dispatch({type:type.DETAIL_STUDENT_FETCH,payload:{token:props.dispatchData.token,key:props.dispatchData.key}})
  },[props.dispatchData.key,props.dispatchData.token,dispatch])
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
      remainData:dataDetails
    }})

  };

  const onReset = () => {
    form.resetFields();
  };


  
  return (
    <div className="button" style={{ marginBottom: "10px" }}>
      <Button type="primary" onClick={showModal}>
        C???p nh???t
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
                    message: "Vui l??ng ??i???n ????? th??ng tin!",
                  },
                  {
                    validator: (_, val) => {
                      let message = "MSSV ph???i l?? 1 d??y s???";
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
                label="H??? t??n"
                rules={[
                  {
                    required: true,
                    message: "Vui l??ng ??i???n ????? th??ng tin!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              {/* gi???i t??nh  */}
              <Form.Item
                name="gender"
                label="Gi???i t??nh"
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
                  <Option value="N???">N???</Option>
                  <Option value="Kh??c">Kh??c</Option>
                </Select>
              </Form.Item>
              {/* L???p */}
              <Form.Item
                name="classes"
                label="L???p"
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
                  {
                    classData?classData.map((classes)=>{
                      return <Option key={classes.classname}>{classes.classname}</Option>
                    }):"Loading"
                  }
                </Select>
              </Form.Item>
              <Form.Item
                name="specialized"
                label="Ng??nh h???c"
                rules={[
                  {
                    required: true,
                    message: "Vui l??ng ??i???n ????? th??ng tin!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="course"
                label="Kh??a"
                rules={[
                  {
                    required: true,
                    message: "Vui l??ng ??i???n ????? th??ng tin!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="roles"
                label="Ch???c v???"
                rules={[
                  {
                    required: true,
                    message: "Vui l??ng ??i???n ????? th??ng tin!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="levelEducate"
                label="C???p ????o t???o"
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
                  <Option value="Cao ?????ng">Cao ?????ng</Option>
                  <Option value="?????i h???c">?????i h???c</Option>
                  <Option value="Trung c???p">Trung c???p</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="typeEducate"
                label="Lo???i ????o t???o"
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
                  <Option value="Ch??nh quy">Ch??nh quy</Option>
                  <Option value="Kh??c">Kh??c</Option>
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
