import { Dasboard } from "./view/pages/dasboard/dasboard";
import {
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import React from "react";
const CreateStudent = React.lazy(()=>import('./view/pages/students-nm/add-student/addStudent'))
const Editable = React.lazy(()=>import ('./view/pages/students-nm/editable/editField'))
const ViewStudent = React.lazy(()=>import ('./view/pages/students-nm/view-student/viewStudent'))
const Teacher = React.lazy(()=>import ('./view/pages/teacher/teacher'))
const CreateTeacher = React.lazy(()=>import("./view/pages/teacher/add-teacher/addTeacher"))
const ViewTeacher = React.lazy(()=>import("./view/pages/teacher/view-teacher/viewTeacher"))

const routers = [
  {
    path: "/dasboard",
    key: "2",
    icon: <PieChartOutlined />,
    title: "Dashboard",
    compn: <Dasboard/>,
    child: [],
  },
  {
    path: "",
    key: "sub2",
    icon: <TeamOutlined />,
    title: "Manage Students",
    compn: "",
    child: [
      {
        path: "/createstudent",
        key: "3",
        title: "Create Student",
        compn: <CreateStudent/>,
        child: [],
      },
      {
        path: "/students",
        key: "5",
        title: "List Students",
        compn: <Editable/>,
        child: [],
      },
      {
        path: "/students/:key",
        key: "6",
        title: "",
        compn: <ViewStudent/>,
        child: [],
        hidden:true
      },
    ],
  },
  {
    path: "",
    key: "sub3",
    icon: <TeamOutlined/>,
    title: "Teacher manager",
    compn: "",
    child: [
      {
        path:"/teachernm",
        compn:<Teacher/>,
        title:"List teacher",
        key:"7"
      },
      {
        path:"/addteacher",
        compn:<CreateTeacher/>,
        title:"Add teacher",
        key:"8"
      },
      {
        path: "/teachernm/:key",
        key: "9",
        title: "",
        compn: <ViewTeacher/>,
        child: [],
        hidden:true
      },
    ],
  },
  
];
export default routers;
