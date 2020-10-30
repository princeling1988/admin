import React, { Component } from "react";
import { Input } from "antd";
import "./header.css";

const { Search } = Input;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <h1 className="logo-side">YouTube management system</h1>
        <Search
          placeholder="搜索"
          style={{ width: 500 }}
          onSearch={(value) => console.log(value)}
          enterButton
        />
      </div>
    );
  }
}

export default Header;
