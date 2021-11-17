import React, { Suspense, useEffect, useState } from "react";
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
  return (
    <Layout style={{ minHeight: "100vh" }} className="layout">
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
                    !child.hidden && (
                      <Menu.Item key={child.key}>
                        <Link to={child.path}>{child.title}</Link>
                      </Menu.Item>
                    )
                  );
                })}
              </SubMenu>
            ) : (
              !element.hidden && (
                <Menu.Item key={element.key} icon={element.icon}>
                  <Link to={element.path}>{element.title}</Link>
                </Menu.Item>
              )
            );
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: "26px 16px" }}>
          <Suspense fallback={<div>Loading...</div>}>
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
              <Route exact path="/">
                <NotFoundPage />
              </Route>
            </Switch>
          </Suspense>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
