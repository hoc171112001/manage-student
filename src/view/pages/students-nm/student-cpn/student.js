import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { Table, Tag, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
//
import * as type from "../../../../redux/const/const";
import { getToken } from "../../../../helper/helper";
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
  let { Text } = Typography;
  let [pageSize,setSize] = useState(5)
  let [current,setCurrent] = useState(1)
  //actions
  const dispatch = useDispatch();
  let { loading, data, message,total } = useSelector((state) => {
    return state.student;
  });
  let token = getToken();
  useEffect(() => {
    dispatch({ type: type.STUDENT_FETCH, payload: {token, _page:current, _limit:pageSize} });
  }, [current,pageSize]);
  let onPageChange = (value)=>{
    setCurrent(value)
  }
  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        enterButton
        loading={loading}
      />
      <Text type="danger" style={{ fontSize: "16px" }}>
        {message}
      </Text>
      <Table columns={columns} dataSource={data} loading={loading} pagination={
        {pageSize,current,total,onChange:onPageChange}
        }/>
    </div>
  );
};
