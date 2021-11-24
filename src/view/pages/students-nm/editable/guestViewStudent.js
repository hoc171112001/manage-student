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
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getToken, debounce } from "../../../../helper/helper";
import * as type from "../../../../redux/const/const";
/**
 * @author
 * @function StudentGuest
 **/

const StudentGuest = (props) => {
  const history = useHistory();
  let [pageSize] = useState(6);
  let [current, setCurrent] = useState(1);
  let [q, setQ] = useState("");
  let dispatch = useDispatch();
  const token = getToken();
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState("");
  const [children, setChild] = useState([]);
  let [newClasses, setNewClass] = useState([]);
  const [details, setDetails] = useState(null);

  let {
    loading,
    total,
    delMessage,
    deleteSucceed,
    updateSucceed,
    updateMessage,
    dataDetails,
  } = useSelector((state) => {
    return state.student;
  });
  let dataApi = useSelector((state) => {
    return state.student.data;
  });
  let { loadingClass, classData } = useSelector((state) => {
    return state.classes;
  });
  // editing
  useEffect(() => {
    dispatch({
      type: type.STUDENT_FETCH,
      payload: { token, _page: current, _limit: pageSize, query: q },
    });
  }, [current, pageSize]);
//   useEffect(() => {
//     setCurrent(1);
//     dispatch({
//       type: type.STUDENT_FETCH,
//       payload: { token, _page: current, _limit: pageSize, query: q },
//     });
//   }, [deleteSucceed]);
  useEffect(() => {
    if (dataDetails) {
      setDetails(dataDetails);
    }
  }, [dataDetails]);
  useEffect(() => {
    if (dataApi && dataApi.length) {
      setData(
        dataApi.map((data) => {
          return {
            key: data.id,
            age: data.age,
            address: data.addr,
            name: data.name,
            classes: data.classes,
          };
        })
      );
    }
  }, [dataApi]);
  useEffect(() => {
    dispatch({ type: type.FETCH_CLASSES, payload: token });
  }, []);
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
      type: type.STUDENT_FETCH,
      payload: { token, _page: 1, _limit: pageSize, query },
    });
  };
  const delay = debounce(search, 500);
  const isEditing = (record) => record.key === editingKey;
  const onPageChange = (value) => {
    setCurrent(value);
  };
//   const edit = (record) => {
//     form.setFieldsValue({
//       name: "",
//       age: "",
//       address: "",
//       classes: [],
//       ...record,
//     });
//     setEditingKey(record.key);
//     setNewClass(record.classes);
//     dispatch({
//       type: type.DETAIL_STUDENT_FETCH,
//       payload: { token, key: record.key },
//     });
//   };

//   const cancel = (value) => {
//     setEditingKey("");
//   };

//   function handleChange(value) {
//     setNewClass(value);
//   }
//   const save = async (key) => {
//     try {
//       const row = await form.validateFields();
//       const newData = [...data];
//       const index = newData.findIndex((item) => key === item.key);
//       if (index > -1) {
//         const item = newData[index];
//         newData.splice(index, 1, { ...item, ...row });
//         newData[index].classes = [...newClasses];
//         setData(newData);
//         setEditingKey("");
//         dispatch({
//           type: type.UPDATE_STUDENT,
//           payload: { token, data: { ...newData[index] }, remainData: details },
//         });
//       } else {
//         newData.push(row);
//         setData(newData);
//         setEditingKey("");
//       }
//     } catch (errInfo) {
//       console.log("Validate Failed:", errInfo);
//     }
//   };
//   const deleteCol = (record) => {
//     dispatch({ type: type.DELETE_STUDENT, payload: { id: record.key, token } });
//   };
  const viewStudent = (record) => {
    history.push(`/students/${record.key}`);
  };
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      width: "25%",
      editable: true,
      render: (name, record) => {
        return (
          <a
            onClick={() => {
              viewStudent(record);
            }}
          >
            {name}
          </a>
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
  const { Text } = Typography;
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
        <Text type={deleteSucceed ? "success" : "danger"}>{delMessage}</Text>
        <br />
        <Text type={updateSucceed ? "success" : "danger"}>{updateMessage}</Text>

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
export default StudentGuest;
