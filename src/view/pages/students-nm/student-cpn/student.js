import React, { useEffect } from "react";
import { Input } from "antd";
import { Table, Tag, Space } from "antd";
import {useDispatch, useSelector} from 'react-redux'
//
import * as type from '../../../../redux/const/const'
const { Search } = Input;

/**
 * @author
 * @function Student
 **/

export const Student = (props) => {
  const onSearch = (value) => console.log(value);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "addr",
      key: "addr", 
    },
    {
      title: "Classes",
      key: "classes",
      dataIndex: "classes",
      render: (classes) => (
        <>
          {classes.map((grade) => {
            let color = grade.length > 10 ? "geekblue" : "green";
            if (grade === "CD19CNTT2") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={grade}>
                {grade.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Actions",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      name: "Hoàng Văn Học",
      classes: ["REACTJS_7103SE"],
      age: 19,
      addr: "BG",
    },
    {
      id: 2,
      name: "Nguyễn Văn Thuần",
      classes: ["REACTJS_7103SE", "NODEJS_2107"],
      age: 50,
      addr: "BG",
    },
    {
      id: 3,
      name: "Ngọ Văn Tuấn",
      classes: ["REACTJS_7103SE", "SQL-XAMPP"],
      age: 20,
      addr: "HN",
    },
    {
      id: 4,
      name: "Hoàng Đăng Dương",
      classes: ["REACTJS_7103SE", "CNTT-BK HN"],
      age: 19,
      addr: "BG",
    },
    {
      id: 5,
      name: "Lê Văn Hậu",
      classes: ["CD19CNTT2", "SQL-XAMPP"],
      age: 20,
      addr: "TP-HCM",
    },
    {
      id: 6,
      name: "Lê Vũ Bảo Khanh",
      classes: ["CD19CNTT2"],
      age: 22,
      addr: "BR-VT",
    },
  ];
  //actions
  const dispatch = useDispatch()
  let loading = useSelector((state)=>{
    return state.student.loading
})
  useEffect(()=>{
      dispatch({type:type.STUDENT_FETCH,payload:data})
  },[])

  return (
    <div>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <Table columns={columns} dataSource={data} loading={loading}/>
    </div>
  );
};
