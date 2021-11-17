import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { Table, Tag, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
//
import * as type from "../../../../redux/const/const";
import { getToken, debounce} from "../../../../helper/helper";
const { Search } = Input;

/**
 * @author
 * @function Student
 **/

const Student = (props) => {
  let { Text } = Typography;
  let [pageSize,setSize] = useState(6)
  let [current,setCurrent] = useState(1)
  let [q,setQ] = useState("")
  let [columns,setCol] = useState([
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
      render: (data) => (
        <Space size="middle">
          <a>Edit</a>
          <a onClick={()=>{deleteAction(data)}}>Delete</a>
        </Space>
      ),
    },
  ])
  //actions
  const dispatch = useDispatch();
  let { loading, data, message,total, delMessage, deleteSucceed} = useSelector((state) => {
    return state.student
  });
  let token = getToken();
  //func
  const onSearch = (value) => {
    delay(value)
  }
  const deleteAction = (data)=>{
    console.log(data);
    dispatch({type:type.DELETE_STUDENT,payload:{id:data.id,token}})
  }
  const onSearhChange = (e)=>{
    setTimeout(()=>{
      let value = e.target.value
      delay(value)
    },500)
  }
  const search = (query)=>{
    setCurrent(1)
    setQ(query)
    dispatch({ type: type.STUDENT_FETCH, payload: {token, _page:1, _limit:pageSize,query} });
    console.log(query);
  }
  const delay = debounce(search,500)
  useEffect(() => {
    dispatch({ type: type.STUDENT_FETCH, payload: {token, _page:current, _limit:pageSize,query:q} });
  }, [current,pageSize,deleteSucceed]);
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
        onChange={onSearhChange}
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



export default Student