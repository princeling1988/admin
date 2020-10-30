import { Layout } from "antd";
import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Header from "../../component/header/header";
import Leftnav from "../../component/leftnav/leftnav";
import StorageUtils from "../../utils/storageUtils";
import Bar from "./charts/bar";
import Line from "./charts/line";
import Pie from "./charts/pie";
import Home from "./home/home";
import Category from "./product/category";
import Product from "./product/product";
import Role from "./role/role";
import User from "./user/user";
import Order from "./order/order";
import ProductAddUpdate from "./product/add-update";
import ProductDetail from "./product/detail";

const { Footer, Sider, Content } = Layout;

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (!StorageUtils.getUser()) {
      return <Redirect to="/login" />;
    }
    return (
      <Layout style={{ height: "100%" }}>
        <Sider>
          <Leftnav style={{ overflow: "auto" }} />
        </Sider>
        <Layout>
          <Header>YouTube</Header>
          <Content
            style={{ background: "#fff", padding: "50px", overflow: "auto" }}
          >
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/product/category" component={Category} />
              <Route path="/product/product" component={Product} />
              <Route path="/user" component={User} />
              <Route path="/order" component={Order} />
              <Route path="/role" component={Role} />
              <Route path="/charts/pie" component={Pie} />
              <Route path="/charts/line" component={Line} />
              <Route path="/charts/bar" component={Bar} />
              <Route path="/product/add-update" component={ProductAddUpdate} />
              <Route path="/product/detail" component={ProductDetail} />
              <Redirect to="/product/product" />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center", color: "#fff" }}>
            Ant DesYou Tube ©2020 Created by You Tube
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;
