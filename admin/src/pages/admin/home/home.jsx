import React, { Component } from "react";
import {
  Drawer,
  Button,
  Radio,
  Icon,
  Card,
  Statistic,
  DatePicker,
  Timeline,
} from "antd";
import moment from "moment";
import Line from "./line";
import Bar from "./bar";
import "./home.css";

const RadioGroup = Radio.Group;
const dateFormat = "YYYY/MM/DD";
const { RangePicker } = DatePicker;

export default class Home extends Component {
  state = { visible: false, placement: "top" };

  handleChange = (isVisited) => {
    return () => this.setState({ isVisited });
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  };
  render() {
    const { isVisited } = this.state;
    return (
      <div className="home">
        <Button type="primary" onClick={this.showDrawer}>
          Out
        </Button>
        <br />
        <br />
        <Card
          className="home-card"
          title="视频总量"
          extra={
            <Icon style={{ color: "rgba(0,0,0,.45)" }} type="question-circle" />
          }
          style={{ width: 250 }}
          headStyle={{ color: "rgba(0,0,0,.45)" }}
        >
          <Statistic
            value={1128163}
            suffix="个"
            style={{ fontWeight: "bolder" }}
          />
          <Statistic
            value={15}
            valueStyle={{ fontSize: 15 }}
            prefix={"周同比"}
            suffix={
              <div>
                %
                <Icon
                  style={{ color: "red", marginLeft: 10 }}
                  type="arrow-down"
                />
              </div>
            }
          />
          <Statistic
            value={10}
            valueStyle={{ fontSize: 15 }}
            prefix={"日同比"}
            suffix={
              <div>
                %
                <Icon
                  style={{ color: "#3f8600", marginLeft: 10 }}
                  type="arrow-up"
                />
              </div>
            }
          />
        </Card>
        <Card
          className="home-table-left"
          title={isVisited ? "访问趋势" : "收视趋势"}
          bodyStyle={{ padding: 0, height: 275 }}
          extra={<Icon type="reload" />}
        >
          <Bar />
        </Card>

        <Card
          title="任务"
          extra={<Icon type="reload" />}
          className="home-table-right"
        >
          <Timeline>
            <Timeline.Item color="green">新版本迭代会</Timeline.Item>
            <Timeline.Item color="green">完成网站设计初版</Timeline.Item>
            <Timeline.Item color="red">
              <p>联调接口</p>
              <p>功能验收</p>
            </Timeline.Item>
            <Timeline.Item>
              <p>登录功能设计</p>
              <p>权限验证</p>
              <p>页面排版</p>
            </Timeline.Item>
          </Timeline>
        </Card>
        <RadioGroup
          style={{ marginRight: 8 }}
          defaultValue={this.state.placement}
          onChange={this.onChange}
        >
          {/* <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio> */}
        </RadioGroup>

        <Drawer
          title="YouTube management system"
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p>你好 !</p>
          <p>欢迎来到</p>
          <p>YouTube 后台管理系统</p>
        </Drawer>
      </div>
    );
  }
}

// export default Home;
