import React from 'react'
import { Menu, Switch, Icon, Input, Button } from 'antd'
const { Search } = Input;

export default class LateralBar extends React.Component {
    render() {
        return (
            <div>
                <br />
                <br />
                <Menu>
                    <Menu.Item key="1"><Icon type="bulb" style={{ fontSize: '30px' }} /> Smart Filters</Menu.Item>
                    <hr />
                    <Menu.Item key="2"><Icon type="dollar" style={{ fontSize: '30px' }} /><Switch /></Menu.Item>
                    <Menu.Item key="3"><Icon type="schedule" style={{ fontSize: '30px' }} /><Switch /></Menu.Item>
                    <Menu.Item key="4"><Icon type="star" style={{ fontSize: '30px' }} /><Switch /></Menu.Item>
                    <hr />
                    <Menu.Item key="5">Status</Menu.Item>
                    <Menu.Item key="6">
                        <Search placeholder="Search" size="large" />
                    </Menu.Item>
                    <Menu.Item key="7"><Button>Delivered</Button></Menu.Item>
                </Menu>
            </div>
        )
    }
}