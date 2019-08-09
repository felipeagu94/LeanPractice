import React from 'react'
import MenuBar from './components/menu'
import LateralBar from './components/lateralbar'
import 'antd/dist/antd.css'
import { Row, Col, Icon } from 'antd'

function App() {
  return (
    <div>
      <div>
        <Row>
          <Col span={4} offset={2}>
            <Icon type="amazon" style={{fontSize: '30px'}}/>
          </Col>
          <Col span={12} offset={3}>
            <MenuBar/>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <LateralBar/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default App
