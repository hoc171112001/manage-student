import React, { useEffect, useState } from "react";
import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
  Tag,
  Select,
  message,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { getToken, debounce } from "../../../helper/helper";
import * as type from "../../../redux/const/const";
/**
 * @author
 * @function Editable
 **/

const Teacher = (props) => {
  // const history = useHistory();
  let [pageSize] = useState(10);
  let [current, setCurrent] = useState(1);
  let [q, setQ] = useState("");
  let dispatch = useDispatch();
  const token = getToken();
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState("");
  const [children, setChild] = useState([]);
  let [newClasses, setNewClass] = useState([]);
  // const [details, setDetails] = useState(null);
  let { loading, total } = useSelector((state) => {
    return state.teacher;
  });
  let dataApi = useSelector((state) => {
    return state.teacher.data;
  });
  let {
    deleteSuccess,
    deleteMessage,
    detailTeacher,
    updateSuccess,
    updateMessage,
  } = useSelector((state) => {
    return state.teacher;
  });
  let { loadingClass, classData } = useSelector((state) => {
    return state.classes;
  });
  // editing
  useEffect(() => {
    dispatch({
      type: type.FETCH_TEACHER,
      payload: { token, _page: current, _limit: pageSize, query: q },
    });
  }, [current, pageSize]);

  useEffect(() => {
    setCurrent(1);
    dispatch({
      type: type.FETCH_TEACHER,
      payload: { token, _page: current, _limit: pageSize, query: q },
    });
  }, [deleteSuccess]);
  useEffect(()=>{
    deleteSuccess&&deleteMessage.length ? message.success(deleteMessage) : deleteMessage.length && message.error(deleteMessage)
  },[deleteMessage,deleteSuccess])
  useEffect(()=>{
    updateSuccess&&updateMessage.length ? message.success(updateMessage) : updateMessage.length && message.error(updateMessage)
  },[updateSuccess,updateMessage])
  useEffect(() => {
    if (dataApi && dataApi.length) {
      setData(
        dataApi.map((data) => {
          return {
            key: data.id,
            age: data.info.age,
            address: data.info.address,
            name: data.name,
            classes: data.classes,
          };
        })
      );
    } else {
      setData([]);
    }
  }, [dataApi]);
  useEffect(() => {
    dispatch({ type: type.FETCH_CLASSES, payload: token });
  }, [dispatch, token]);
  useEffect(() => {
    if (classData) {
      let classArr = classData.map((classes) => {
        return classes.classname;
      });
      setChild(classArr);
    }
  }, [loadingClass, classData]);
  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };
  const onSearch = (value) => {
    delay(value);
  };
  const onSearhChange = (e) => {
    setTimeout(() => {
      let value = e.target.value;
      delay(value);
    }, 500);
  };
  const search = (query) => {
    setCurrent(1);
    setQ(query);
    dispatch({
      type: type.FETCH_TEACHER,
      payload: { token, _page: 1, _limit: pageSize, query },
    });
  };
  const delay = debounce(search, 500);
  const isEditing = (record) => record.key === editingKey;
  const onPageChange = (value) => {
    setCurrent(value);
  };
  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      age: "",
      address: "",
      classes: [],
      ...record,
    });
    setEditingKey(record.key);
    setNewClass(record.classes);
    // dispatch({
    //   type: type.DETAIL_STUDENT_FETCH,
    //   payload: { token, key: record.key },
    // });
    dispatch({
      type: type.FETCH_DETAIL_TEACHER,
      payload: { key: record.key, token },
    });
  };

  const cancel = (value) => {
    setEditingKey("");
  };

  function handleChange(value) {
    setNewClass(value);
  }
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        newData[index].classes = [...newClasses];
        setData(newData);
        setEditingKey("");
        dispatch({
          type: type.UPDATE_TEACHER,
          payload: { data: newData[index], token, remainData: detailTeacher },
        });
        // console.log(newData[index]);
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const deleteCol = (record) => {
    dispatch({ type: type.DELETE_TEACHER, payload: { id: record.key, token } });
  };
  const viewStudent = (record) => {
    // history.push(`/students/${record.key}`);
  };
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      width: "25%",
      editable: true,
      render: (name, record) => {
        return (
          <Typography.Link
            onClick={() => {
              viewStudent(record);
            }}
          >
            {name}
          </Typography.Link>
        );
      },
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      width: "15%",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      width: "20%",
      editable: true,
    },
    {
      title: "Lớp",
      key: "classes",
      dataIndex: "classes",
      render: (classes, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            defaultValue={newClasses}
            onChange={handleChange}
          >
            {children.map((child) => {
              return <Option key={child}>{child}</Option>;
            })}
          </Select>
        ) : (
          <>
            {classes.map((grade) => {
              if (grade && grade.length) {
                let color = grade.length > 10 ? "geekblue" : "green";
                if (grade === "CD19CNTT2") {
                  color = "volcano";
                }
                return (
                  <Tag color={color} key={grade}>
                    {grade}
                  </Tag>
                );
              }
              return "none";
            })}
          </>
        );
      },
    },
    {
      title: "Thao tác",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => {
                save(record.key);
              }}
              style={{
                marginRight: 16,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Typography.Link>Cancel</Typography.Link>
            </Popconfirm>
          </span>
        ) : (
          <>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              Edit
            </Typography.Link>
            <Typography.Link
              onClick={() => deleteCol(record)}
              style={{ marginLeft: 16 }}
            >
              Delete
            </Typography.Link>
          </>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  // antd
  const { Option } = Select;
  // const { Text } = Typography;
  const { Search } = Input;
  return (
    <>
      <Form form={form} component={false}>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          loading={loading}
          onChange={onSearhChange}
        />
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          loading={loading}
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: onPageChange,
            pageSize,
            current,
            total,
          }}
        />
      </Form>
    </>
  );
};
export default Teacher;
