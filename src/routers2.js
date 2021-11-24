import {
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import React from "react";
const DbGuest = React.lazy(() => import("./view/pages/dasboard/dbGuest"))
const StudentGuest = React.lazy(() => import("./view/pages/students-nm/editable/guestViewStudent"))
const GuestView = React.lazy(()=>import ("./view/pages/students-nm/guest-view/guestDetails"))



const routers2 = [
  {
    path: "/dasboard",
    key: "2",
    icon: <PieChartOutlined />,
    title: "Dashboard",
    compn: <DbGuest/>,
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
        compn: <StudentGuest/>,
        child: [],
      },
      {
        path: "/students/:key",
        key: "6",
        title: "",
        compn: <GuestView/>,
        child: [],
        hidden:true
      },
    ],
  },
];
export default routers2;