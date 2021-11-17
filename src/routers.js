import { Dasboard } from "./view/pages/dasboard/dasboard";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React from "react";
//outta import lazy loading = if component dont even using so dont load this = higher performance
// const Student = React.lazy(()=>import('./view/pages/students-nm/student-cpn/student'))
const CreateStudent = React.lazy(()=>import('./view/pages/students-nm/add-student/addStudent'))
const Editable = React.lazy(()=>import ('./view/pages/students-nm/editable/editField'))
const ViewStudent = React.lazy(()=>import ('./view/pages/students-nm/view-student/viewStudent'))



// import { Student } from "./view/pages/students-nm/student-cpn/student";
// import CreateStudent from "./view/pages/students-nm/add-student/addStudent";
// import  Editable  from "./view/pages/students-nm/editable/editField";
// import  ViewStudent  from "./view/pages/students-nm/view-student/viewStudent";

const routers = [
  {
    path: "/dasboard",
    key: "2",
    icon: <PieChartOutlined />,
    title: "Dashboard",
    compn: <Dasboard />,
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
];
export default routers;
