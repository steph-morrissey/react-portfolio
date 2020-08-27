import React, { Component } from "react";
import { Menu } from "antd";

class Navigation extends Component {
  render() {
    return (
      <Menu className='text-center' mode='horizontal'>
        <Menu.Item key='about'>About</Menu.Item>
        <Menu.Item key='projects'>Projects</Menu.Item>
        <Menu.Item key='contact'>Contact</Menu.Item>
      </Menu>
    );
  }
}

export default Navigation;
