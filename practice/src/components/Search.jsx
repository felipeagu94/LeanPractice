import React from 'react'
import { Icon, Row, Col, Input } from 'antd'
const { Search } = Input;

export default class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={2}>
                        <Icon type="check" style={{ fontSize: '30px', align: 'center' }} />
                    </Col>
                    <Col span={10} style={{ float: 'right'}}>
                        <Search placeholder="Search" size="large" />
                    </Col>
                </Row>
            </div>
        )
    }
}