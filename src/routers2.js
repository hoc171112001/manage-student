import { Dasboard } from "./view/pages/dasboard/dasboard";
import {
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import React from "react";
//outta import lazy loading = if component dont even using so dont load this = higher performance
// const Student = React.lazy(()=>import('./view/pages/students-nm/student-cpn/student'))
// const CreateStudent = React.lazy(()=>import('./view/pages/students-nm/add-student/addStudent'))
// const Editable = React.lazy(()=>import ('./view/pages/students-nm/editable/editField'))
// const ViewStudent = React.lazy(()=>import ('./view/pages/students-nm/view-student/viewStudent'))


const routers2 = [
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
    title: "View Students",
    compn: "",
    child: [
      {
        path: "/students",
        key: "5",
        title: "List Students",
        compn: <div>list student</div>,
        child: [],
      },
    //   {
    //     path: "/students/:key",
    //     key: "6",
    //     title: "",
    //     compn: <ViewStudent/>,
    //     child: [],
    //     hidden:true
    //   },
    ],
  },
];
export default routers2;