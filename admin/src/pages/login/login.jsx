import React, { Component } from "react";
import logo from "../../assets/logo192.png";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button, message } from "antd";
import "./login.css";
import { reqLogin } from "../../api";
import memoryUtils from "../../utils/memoryUtils";
import StorageUtils from "../../utils/storageUtils";

const Item = Form.Item; // 不能写在import之前
// 登录
class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        // console.log("Received values of form: ", values);
        const { username, password } = values;
        const result = await reqLogin(username, password);
        // console.log(result);
        if (result.status === 0) {
          message.success("登陆成功");
          const user = result.data;
          memoryUtils.user = user; //保存到内存
          StorageUtils.saveUser(user); //保存到local

          //跳转到管理页面(不需要再退回到登录)
          this.props.history.replace("/");
          //所有的路由对象都有location history match
        } else {
          message.error(result.msg);
        }
      } else {
        console.log("检验失败!");
      }
    });
  };
  validatorPassword = (rule, value, callback) => {
    console.log("validatePwd()", rule, value);
    if (!value) {
      callback("密码不能为空");
    } else if (value.length < 4) {
      callback("密码不能少于4位");
    } else if (value.length > 8) {
      callback("密码不能大于8位");
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      callback("密码必须是字母数字下划线");
    } else {
      callback();
    }
  };
  render() {
    //如果用户已经登录，自动跳转到管理页面
    const user = memoryUtils.user;
    if (user && user._id) {
      return <Redirect to="/" />;
    }

    // 得到具强大功能的form对象
    const form = this.props.form;
    const { getFieldDecorator } = form;

    return (
      <div className="login">
        <div className="login-header">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603540613058&di=1c331e4988c6c5ba685d0784d7f967b9&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Ffeed%2Fpic%2Fitem%2F359b033b5bb5c9ea76a5d1c9d839b6003af3b342.jpg"
            alt=""
            style={{ borderRadius: "10px" }}
          />
          <h1>Youtube management system</h1>
        </div>
        <div className="login-content">
          <h1>登录</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, whitespace: true, message: "请输入用户名" },
                  { min: 4, message: "用户名最少4位" },
                  { max: 12, message: "用户名最多8位" },
                  {
                    pattern: /^[0-9a-zA-Z_]+$/,
                    message: "用户名必须是字母数字或者下划线",
                  },
                ],
                initialValue: "admin", // 初始值
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ validator: this.validatorPassword }],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(Login);

/*
高阶函数  接受一个函数 
a setTimeout/setInterval
b promise
c 数组遍历的相关方法  forEach/map/reduce/filter/find/findIndex
d 函数对象的bind()  
纯函数  只使用自己的参数
*/
/*
高阶组件
接受一个组件，返回一个新的组件
react-redux中的connect就是一个高阶组件
 */
/*
包装Form组件生成一个新的组件Form.create()(Login)
新组件会向Form组件传递一个强大的对象属性:form
*/
