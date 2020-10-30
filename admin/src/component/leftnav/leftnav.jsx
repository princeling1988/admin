import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon, Input } from "antd";
import menuList from "../../config/menuConfig";
import "./leftnav.css";

const { SubMenu } = Menu;
class Leftnav extends Component {
  state = {
    flag: true,
  };
  getMenuNodes = (menuList) => {
    return menuList.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type="pie-chart" />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        );
      } else {
        //表示有子菜单
        const path = this.props.location.pathname;
        const cItem = item.children.find((cItem) => cItem.key === path);
        if (cItem) {
          //如果找到，返回父亲的key，这个key值就是默认展开选项
          this.openKey = item.key;
        }
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
            {this.getMenuNodes(item.children)}
          </SubMenu>
        );
      }
    });
  };
  UNSAFE_componentWillMount() {
    this.menunodes = this.getMenuNodes(menuList);
  }
  render() {
    const path = this.props.location.pathname;
    const openkey = this.openKey;
    const menunodes = this.menunodes;
    console.log(path);
    return (
      <div>
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603540613058&di=1c331e4988c6c5ba685d0784d7f967b9&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Ffeed%2Fpic%2Fitem%2F359b033b5bb5c9ea76a5d1c9d839b6003af3b342.jpg"
          style={{ borderRadius: "10% 10% 10% 10%" }}
        />
        <Menu
          selectedKeys={[path]}
          defaultOpenKeys={[openkey]}
          mode="inline"
          theme="light"
        >
          {menunodes}
        </Menu>
      </div>
    );
  }
}

export default withRouter(Leftnav);
