import React from 'react'
import { Card, Row, Col, Icon, Layout } from 'antd'
const { Content } = Layout;

export default class Cardtext extends React.Component {
    render() {
        return (
            <div>
                <Card style={{ width: 800 }}>
                    <Row>
                        <Col span={2}>
                            <p>Monday 10th 2:28 PM</p>
                        </Col>
                        <Col span={1}>
                            <span className="ant-divider" style={{ margin: '0 1em' }} />
                        </Col>
                        <Col span={2}>
                            <Icon type="pushpin" style={{ fontSize: '30px' }} />
                        </Col>
                        <Col span={6}>
                            <Layout>
                                <Content>Houston, TX, 3361</Content>
                                <Content><Icon type="caret-down" /></Content>
                                <Content>Atalanta, GA, 30123</Content>
                            </Layout>
                        </Col>
                        <Col span={2}>
                            <Icon type="car" style={{ fontSize: '30px' }} />
                        </Col>
                        <Col span={4}>
                            <h3>$250.00</h3>
                        </Col>
                        <Col span={2}>
                            <Icon type="border" style={{ fontSize: '30px' }} />
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}