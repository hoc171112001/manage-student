import React, { useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { NotFoundPage } from "../pages/notfound/notfound";
import "./defaulayout.css";
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
/**
 * @author
 * @function DefaultLayout
 **/

export const DefaltLayout = ({ routers }) => {
  let [collapsed, setCollapse] = useState(false);
  let onCollapse = (collapsed) => {
    setCollapse(collapsed);
  };
  // let getMenuss = () => {
  //   let menus = [];
  //   routers.forEach((element) => {
  //     let item = (
  //       <Menu.Item key={element.key} icon={element.icon}>
  //         <Link to={element.path}>{element.title}</Link>
  //       </Menu.Item>
  //     );
  //     menus.push(item);
  //   });
  //   return menus;
  // };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        className="side-nav"
      >
        <div className="logo" />
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          {/* map into*/}
          {routers.map((element) => {
            return element.child && element.child.length ? (
              <SubMenu
                key={element.key}
                icon={element.icon}
                title={element.title}
              >
                {element.child.map((child) => {
                  return (
                    <Menu.Item key={child.key}>
                      <Link to={child.path}>{child.title}</Link>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            ) : (
              <Menu.Item key={element.key} icon={element.icon}>
                <Link to={element.path}>{element.title}</Link>
              </Menu.Item>
            );
          })}
          {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/dasboard">DasBoard</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Students">
            <Menu.Item key="2"><Link to="/createstudent">New Student</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/liststudent">List Student</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<UserOutlined />} title="Curriculum Vitae">
            <Menu.Item key="4">New Curriculum Vitae</Menu.Item>
            <Menu.Item key="5">Your Curriculum Vitae</Menu.Item>  
          </SubMenu> */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <Switch>
            {routers.map((element) => {
              return element.child && element.child.length ? (
                element.child.map((element) => {
                  return (
                    <Route exact path={element.path}>
                      {element.compn}
                    </Route>
                  );
                })
              ) : (
                <Route exact path={element.path}>
                  {element.compn}
                </Route>
              );
            })}
            <Route path="/">
              <NotFoundPage />
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
