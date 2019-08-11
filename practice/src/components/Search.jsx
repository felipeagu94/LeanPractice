import React from 'react'
import { Icon, Row, Col, Input } from 'antd'
const { Search } = Input;

const SearchBar = () => {
    return (
        <div>
            <Row>
                <Col span={2}>
                    <Icon type="check" style={{ fontSize: '30px', align: 'center' }} />
                </Col>
                <Col span={10} style={{ float: 'right' }}>
                    <Search placeholder="Search" size="large" />
                </Col>
            </Row>
        </div>
    )
}
export default SearchBar