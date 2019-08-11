import React from 'react'
import { Menu, Icon } from 'antd'

const MenuBar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home" className="btn btn-outline-primary">
        <Icon type="home" />
        Home
        </Menu.Item>
      <Menu.Item key="message" className="btn btn-outline-primary">
        <Icon type="message" />
        Messages
        </Menu.Item>
      <Menu.Item key="star" className="btn btn-outline-primary">
        <Icon type="star" />
        Wishlist
        </Menu.Item>
      <Menu.Item key="setting" className="btn btn-outline-primary">
        <Icon type="setting" />
        Settings
        </Menu.Item>
      <Menu.Item key="code" className="btn btn-outline-primary">
        <Icon type="code" />
        My Account
        </Menu.Item>
    </Menu>
  );
}
export default MenuBar