import React, { Suspense, useState } from "react";
import { Layout, Menu, Button } from "antd";
import { Link, Route, Switch } from "react-router-dom";
import { NotFoundPage } from "../pages/notfound/notfound";
import "./defaulayout.css";
import { useDispatch, useSelector } from "react-redux";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
/**
 * @author
 * @function DefaultLayout
 **/

export const DefaltLayout = ({ routers, routers2 }) => {
  const { isLogged, isGuest } = useSelector((state) => state.auth);
  let [collapsed, setCollapse] = useState(false);
  let onCollapse = (collapsed) => {
    setCollapse(collapsed);
  };
  const dispatch = useDispatch()
  const loggoutFunc=()=>{
    dispatch({type:"USER_FETCH_FAILED",message:"Logout succeed!"})
    dispatch({type:"GUEST_FETCH_FAILED",message:"Logout succeed!"})
  }
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
          {isLogged
            ? routers.map((element) => {
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
              })
            : routers2.map((element) => {
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
                    {/* end */}
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
        <div>
          <Button
            type="primary"
            style={{
              width: "100px",
              position: "absolute",
              right: "16px",
              top: "10px",
            }}
            onClick={loggoutFunc}
          >
            Đăng xuất
          </Button>
        </div>
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: "50px 16px" }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {isLogged
                ? routers.map((element) => {
                    return element.child && element.child.length ? (
                      element.child.map((element) => {
                        return (
                          <Route exact path={element.path} key={element.key}>
                            {element.compn}
                          </Route>
                        );
                      })
                    ) : (
                      <Route exact path={element.path} key={element.key}>
                        {element.compn}
                      </Route>
                    );
                  })
                : routers2.map((element) => {
                    return element.child && element.child.length ? (
                      element.child.map((element) => {
                        return (
                          <Route exact path={element.path} key={element.key}>
                            {element.compn}
                          </Route>
                        );
                      })
                    ) : (
                      <Route exact path={element.path} key={element.key}>
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
