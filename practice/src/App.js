import React from 'react'
import MenuBar from './components/menu'
import LateralBar from './components/lateralbar'
import Cardtext from './components/card'
import SearchBar from './components/Search'
import 'antd/dist/antd.css'
import { Row, Col, Icon, Button } from 'antd'

export default class App extends React.Component {
  state = {
    info: [],
    fav: []
  }
  AddInfo = () =>{
    const newInfo = {Day: "Monday 10th 2:28 PM", City1: "Houston, TX, 3361", City2: "Atalanta, GA, 30123", Price: "$250.00", fav: false}
    const info = [...this.state.info, newInfo]
    this.setState({ info })
  }
  clicFav = (infoFav) =>{
    const info = this.state.info.map(c => {
      if(c === infoFav) c.fav = !c.fav
      return c
    })
    this.setState({ info })
  }
  render() {
    const { info } = this.state
    return (
      <div>
        <div className="container">
          <Row>
            <Col span={4} offset={2}>
              <Icon type="amazon" style={{ fontSize: '30px' }} />
            </Col>
            <Col span={15} offset={1}>
              <MenuBar />
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={5}>
              <LateralBar />
            </Col>
            <Col span={15} offset={1}>
              <SearchBar />
              <br />
            </Col>
            {info.map((infoDel, i) =>
              <Col span={10} offset={1} key={i}>
                <Cardtext info={infoDel} clicFav={this.clicFav} />
              </Col>
            )}
          </Row>
          <Row>
            <Col style={{ float: 'right' }}>
              <Button type="link" onClick={this.AddInfo}><Icon type="plus" style={{ fontSize: '30px' }} /></Button>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}