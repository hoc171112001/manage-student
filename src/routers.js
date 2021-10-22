import { Dasboard } from "./view/pages/dasboard/dasboard";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
//outta import
import { Student } from "./view/pages/students-nm/student-cpn/student";

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
    key: "sub1",
    icon: <TeamOutlined />,
    title: "Student",
    compn: "",
    child: [
      {
        path: "/createstudent",
        key: "3",
        title: "Create Student",
        compn: <div>Create Student</div>,
        child: [],
      },
      {
        path: "/liststudent",
        key: "4",
        title: "List Student",
        compn: <Student />,
        child: [],
      },
    ],
  },
  {
    path: "",
    key: "sub2",
    icon: <FileOutlined />,
    title: "Curriculum Vitae",
    compn: "",
    child: [
      {
        path: "/createcv",
        key: "5",
        title: "Create Curriculum Vitae",
        compn: <div>Create Curriculum Vitae</div>,
        child: [],
      },
      {
        path: "/yourcv",
        key: "6",
        title: "Your Curriculum Vitae",
        compn: <div>Your Curriculum Vitae</div>,
        child: [],
      },
    ],
  },
];
export default routers;
