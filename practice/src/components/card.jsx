import React from 'react'
import { Card, Row, Col, Icon, Layout, Button } from 'antd'
const { Content } = Layout;
const Cardtext = ({info, clicFav}) => {
    const sendFav = () => {
        clicFav(info)
    }
    return (
        <div>
            <Row>
                <Col span={2}>
                    <Icon type="check" style={{ fontSize: '30px' }} />
                </Col>
                <Col span={15}>
                    <Card style={{ width: 700, float: 'center' }}>
                        <Row>
                            <Col span={2}>
                                <div className="text-center">
                                    <p>{info.Day}</p>
                                </div>
                            </Col>
                            <Col span={1} className="justify-content-center">
                                <span className="ant-divider" style={{ margin: '0 1em' }} />
                            </Col>
                            <Col span={2} className="justify-content-center">
                                <div>
                                    <Button onClick={sendFav} type="link" ghost>
                                        <Icon type="pushpin" style={{ fontSize: '30px' }} theme={info.fav ? 'twoTone' : ''} />
                                    </Button>
                                </div>
                            </Col>
                            <Col span={6}>
                                <Layout style={{ alignItems: 'center' }}>
                                    <Content>{info.City1}</Content>
                                    <Content><Icon type="caret-down" /></Content>
                                    <Content>{info.City2}</Content>
                                </Layout>
                            </Col>
                            <Col span={2}>
                                <div className="justify-content-center">
                                    <Icon type="car" style={{ fontSize: '30px' }} />
                                </div>
                            </Col>
                            <Col span={4}>
                                <h3>{info.Price}</h3>
                            </Col>
                            <Col span={2}>
                                <div className="justify-content-center">
                                    <Icon type="border" style={{ fontSize: '30px' }} />
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Cardtext