import React from 'react'
import { Menu, Icon } from 'antd'

export default class MenuBar extends React.Component {
  state = {
    current: 'mail',
  };

  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Icon type="home" />
          Home
        </Menu.Item>
        <Menu.Item key="message">
          <Icon type="message" />
          Messages
        </Menu.Item>
        <Menu.Item key="star">
          <Icon type="star" />
          Wishlist
        </Menu.Item> 
        <Menu.Item key="setting">
          <Icon type="setting" />
          Settings
        </Menu.Item>
        <Menu.Item key="code">
          <Icon type="code" />
          My Account
        </Menu.Item>
      </Menu>
    );
  }
}