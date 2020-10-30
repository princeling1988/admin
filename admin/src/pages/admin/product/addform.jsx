import React, { Component } from "react";
import { Form, Select, Input } from "antd";
import PropTypes from "prop-types";
const Item = Form.Item;
const Option = Select.Option;
class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    setForm: PropTypes.func.isRequired, // 用来传递form对象的函数
    categorys: PropTypes.array.isRequired, // 一级分类的数组
    parentId: PropTypes.string.isRequired, // 父分类的ID
  };
  componentWillMount() {
    this.props.setForm(this.props.form); //把form对象传给父亲
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { parentId, categorys } = this.props;
    return (
      <Form>
        <Item>
          {getFieldDecorator("parentId", {
            initialValue: parentId,
          })(
            <Select>
              <Option value="0">一级分类</Option>
              {categorys.map((c) => {
                return (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                );
              })}
            </Select>
          )}
        </Item>
        <Item>
          {getFieldDecorator("categoryName", {
            initialValue: "",
          })(<Input type="text" placeholder="输入分类名称" />)}
        </Item>
      </Form>
    );
  }
}

export default Form.create()(AddForm);
